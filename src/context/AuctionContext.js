import React, { createContext, useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
import BidsService from "../services/BidsService";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
  // Condition to be false when loading is done.
  const [isLoading, setIsLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);
  const [login, setLoggedIn] = useState(false);

  useEffect(() => {
    getAllUsers();
    getAuctions();
    getBids();
    getUsersBids();
    getAuctionBids();
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

// Get all bids in database
// Tested OK!
const getBids = () =>{
  BidsService.getAllBids().then((response) => {
    console.log(response.data)
    setBids(response.data);
 
  setIsLoading(false);
})
}

// get Bids belonging to a specific user
// 625e701f3712d9caa15f2634 testuserID
// Tested OK!
function getUsersBids(userId){
  BidsService.getUserBids("625e701f3712d9caa15f2634").then((response) =>{
    console.log(response.data);
  }
  )
}

// get Bids belonging to a specific auction
// 625e70c13712d9caa15f263a testauctionID
// Tested OK!
function getAuctionBids(auctionId){
  BidsService.getAuctionBids("625e70c13712d9caa15f263a").then((response) =>{
    console.log(response.data);
  }
  )
}
// Insert a Bid
// Tested OK!
function insertBid (aBid) {
  BidsService.createBid(aBid).then((response) => {
    console.log(response.data);
});
}


  const fetchAuctions = async () => {
    const res = await fetch("/auctions");
    const data = await res.json();

    console.log(data); // DEBUG
    setAuctions(data);
    setIsLoading(false);
  };
  
  const addAuction = async (aAuction) => {
    AuctionService.createAuction(aAuction).then((response) => {
      console.log(response.data)
    })
  };

  const userid = AuthService.getCurrentUser();

  // Getter / Setter auction object
  const [auction, setAuction] = useState({
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
    bidTime: Date.now(),
    userId: 0,
    auctionId: 0,
    amount: 0
  });

  // Get all users
  const getAllUsers = () =>{
      UserService.getAllUsers().then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    })
  }

  // Get user by id
  const getUserById = (id) =>{
    UserService.getUserById().then((response) => {
    setUsers(response.data);
    setIsLoading(false);
  })
}

const createUser = (newUser) =>{
  UserService.createUser(newUser).then((response) => {
  setUser(response.data);
  setIsLoading(false);
})
}


  // Client side auth until backend is up and running.
    const authUser = (newUser) => {
        AuthService.login(newUser).then((response) => {
        setLoggedIn(true)
        
      })
    };

  // Getter / Setter profile object
  const [profile, setProfile] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    address: "",
  });

  // Getter / Setter user object
  const [user, setUser] = useState({
    username: "",
    password: ""
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


  return (
    <AuctionContext.Provider
      value={{
        bid, // bid object
        auction, // auction object
        profile, // profile object
        user, // user object
        createNew, // Hardcopy json object
        addUser, // AddUser function
        createUser, //Adduser function with backend
        isLoading, // Conditional when fetching data or not.
        users,
        addAuction,
        insertBid,
        authUser,
        auctions
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
