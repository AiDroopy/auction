import React, { createContext, useEffect, useState } from "react";
import AuctionService from "../services/AuctionService";
import BidsService from "../services/BidsService";
import Bid from "../components/Bid";

const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {

  // Condition to be false when loading is done.
  const [isLoading, setIsLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [auctions, setAuctions] = useState([]);

    // Getter / Setter auction object
    const [auction, setAuction] = useState({
      userId:"",
      productName: "",
      productInfo: "",
      startPrice: "",
      endTime: "",
      endPrice: 0,
    });
  
    // Getter / Setter bid object
    const [bid, setBid] = useState({
      bidTime: "",
      userId: "",
      auctionId: "",
      amount: ""
    });
  
    // Getter / Setter user object
    const [user, setUser] = useState({
      username: "",
      password: ""
    });

  useEffect(() => {
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

function getUsersBids(userId){
  BidsService.getUserBids(userId).then(() =>{
})}

function getAuctionBids(auctionId){
  BidsService.getAuctionBids(auctionId).then(() =>{
})}

// Insert a Bid
function insertBid (aBid) {
  BidsService.createBid(aBid).then((response) => {
})}

  const renderHighBid = (theBids, auction) => {
    let highBid = 0
    theBids.forEach((bid) => {
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
        createAuction,
        insertBid,
        getAuctionBids,
        getBids,
        auctions,
        bids,
        renderHighBid,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
