import React, { createContext, useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
import BidsService from "../services/BidsService";
import DeliveryService from "../services/DeliveryService";
import Bid from "../components/Bid";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
  // Condition to be false when loading is done.
  const [isLoading, setIsLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    getAuctions();
    getBids();
    getUsersBids();
    getAuctionBids();
    getAllDestinations();
  }, []);

  // Deep copy / clone a json object, creates and returns an identical JSON object that was passed in.
  function createNew(object) {
    let cloneObj = JSON.parse(JSON.stringify(object));
    return cloneObj;
  }

  const getAllDestinations = () => {
    DeliveryService.getAllDestinations().then((response) => {
      console.log(response)
    })
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
    startPrice: "",
    endTime: "",
    endPrice: 0,
  });

  // Getter / Setter auction object
  const [bid, setBid] = useState({
    bidTime: "",
    userId: "",
    auctionId: "",
    amount: ""
  });

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

  const renderHighBid = (theBids, auction) => {
    let highBid = 0
    theBids.map((bid) => {
    if (bid.auctionId === auction.id){
        if (highBid === 0 || highBid < bid.amount){
            highBid = bid.amount
        }
    }})
    if(Date.parse(auction.endTime) < Date.parse(Date())){
        return <div> Auction closed with winning bid: {highBid} </div> 
    }
    if(Date.parse(auction.endTime) > Date.parse(Date())){
        return <div>
            Highest bid: {highBid} 
            <CountdownTimer
            countdownTimestampMs={auction.endTime}/>
            {< Bid theAuction ={ auction }/>}
            </div> 
    }
}

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
        getAuctionBids,
        getBids,
        auctions,
        bids,
        renderHighBid
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
