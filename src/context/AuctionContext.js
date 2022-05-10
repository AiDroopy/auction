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
      setAuctions(response.data);
      setIsLoading(false);
  })
}

const createAuction = async (aAuction) => {
  AuctionService.createAuction(aAuction).then((response) => {
  })
};

// Get all bids in database
const getBids = () =>{
  BidsService.getAllBids().then((response) => {
    setBids(response.data);
    setIsLoading(false);
})
}

// get Bids belonging to a specific user
// 625e701f3712d9caa15f2634 testuserID
// Tested OK!
function getUsersBids(userId){
  BidsService.getUserBids(userId).then(() =>{
  }
  )
}

// get Bids belonging to a specific auction
// 625e70c13712d9caa15f263a testauctionID
// Tested OK!
function getAuctionBids(auctionId){
  BidsService.getAuctionBids(auctionId).then(() =>{
  }
  )
}
// Insert a Bid
function insertBid (aBid) {
  BidsService.createBid(aBid).then((response) => {
});
}

  // Getter / Setter auction object
  const [auction, setAuction] = useState({
    userId:"",
    productName: "",
    productInfo: "",
    productImgURL: "",
    startPrice: "",
    endTime: "",
    endPrice: 0,
    bids: [], // Change to bidId for relationship instead of aggregation
  });

  // Getter / Setter auction object
  const [bid, setBid] = useState({
    bidTime: Date.now(),
    userId: "",
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
    UserService.getUserById(id).then((response) => {
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
        AuthService.login(newUser).then(() => {
        setLoggedIn(true)
      })
    };

  // Getter / Setter user object
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  return (
    <AuctionContext.Provider
      value={{
        bid, // bid object
        auction, // auction object
        user, // user object
        isLoading, // Conditional when fetching data or not.
        createNew, // Hardcopy json object
        createUser, //Adduser function with backend
        createAuction,
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
