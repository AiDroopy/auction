import React, { createContext, useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import UserService from "../services/UserService";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
  // Condition to be false when loading is done.
  const [isLoading, setIsLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
    getAuctions();
    fetchBids();
  }, []);

  // Deep copy / clone a json object, creates and returns an identical JSON object that was passed in.
  function createNew(object) {
    let cloneObj = JSON.parse(JSON.stringify(object));
    return cloneObj;
  }

  // Get all auctions
  const getAuctions = () =>{
    AuctionService.getAuctions().then((response) => {
      console.log(response.data)
      setAuctions(response.data);
   
    setIsLoading(false);
  })
}
  const fetchAuctions = async () => {
    const res = await fetch("/auctions");
    const data = await res.json();

    console.log(data); // DEBUG
    setAuctions(data);
    setIsLoading(false);
  };
  
  const addAuction = async (aAuction) => {
    const res = await fetch("/auctions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aAuction),
    });
  };

  // Getter / Setter auction object
  const [auction, setAuction] = useState({
    auctionId: 0,
    userId: 0,
    productName: "",
    productInfo: "",
    productImgURL: "",
    startPrice: 0,
    endPrice: 0,
    endTime: Date.now(),
    bids: [], // Change to bidId for relationship instead of aggregation
  });

  // Getter / Setter auction object
  const [bid, setBid] = useState({
    id: 0,
    bidTime: Date.now(),
    userId: 0,
    auctionId: 0,
    amount: 0
  });

  // Get all bids
  const fetchBids = async () => {
    const res = await fetch("/bids");
    const data = await res.json();

    console.log(data); // DEBUG
    setBids(data);
    setIsLoading(false);
  };

  const addBid = async (aBid) => {
    const res = await fetch("/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aBid),
    });
  };


  // Get all users
  const getAllUsers = () =>{
      UserService.getAllUsers().then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    })
  }
  // const fetchUsers = async () => {
  //   const res = await fetch("/users");
  //   const data = await res.json();

  //   console.log(data); // DEBUG
  //   setUsers(data);
  //   setIsLoading(false);
  // };

  // Client side auth until backend is up and running.
  // const authUser = async (aUser) => {
  //   let usr = users.filter((fUser) => fUser.username == aUser.username);
  //   console.log(users);  // DEBUG
  //   console.log(aUser);   // DEBUG

  //   // filtrera ut aUser.email == någon av alla Users
  //   if (aUser.username == usr[0].username && aUser.password == usr[0].password) {
  //     console.log(usr[0].id);
  //     console.log("User & Password Correct");
  //     sessionStorage.setItem("authed", true);
  //     sessionStorage.setItem("userId", usr[0].id);
      
  //   } else {
  //     console.log("User or Password incorrect", aUser.username, aUser.password);
  //     sessionStorage.setItem("authed", false);
  //   }

  //   console.log("SessionStorage key authed: ", sessionStorage.getItem("authed")); // DEBUG
  // };

  // Getter / Setter profile object
  const [profile, setProfile] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    address: "",
  });

  // Getter / Setter user object
  const [user, setUser] = useState({
    email: "",
    password: "",
    profile: {},
  });

  // Adds a user to REST API
  const addUser = async (aUser) => {
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aUser),
    });
  };

  const updateProfile = async (userId, updateUser) => {
    const response = await fetch(`/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });

    const data = await response.json();

    setUser(
      user.map((user) => (user.userId === userId ? { ...user, ...data } : user))
    );
  };

  return (
    <AuctionContext.Provider
      value={{
        bid, // bid object
        auction, // auction object
        profile, // profile object
        user, // user object
        createNew, // Hardcopy json object
        addUser, // AddUser function
        isLoading, // Conditional when fetching data or not.
        users,
        addAuction,
        addBid,
        auctions
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
