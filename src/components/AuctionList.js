import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import Card from "./Card";
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Bid from "./Bid";

const AuctionList = () => {

const { auctions } = useContext(AuctionContext);
const{setAuction} = useContext(AuctionContext);

const removeAuction = (id) => { 
    setAuction(auctions.filter((auctions) => auctions.id !== id));
    }

    return (

        <div className="auction-List"> 
        {auctions.map((auction) => (<div className="auctions" key={auction.auctionId}> 
        <br></br>
        Product name: {auction.productName}
        <br></br>
        Description: {auction.productInfo}
        <br></br>
        <img src={auction.productImgURL} alt="img" className="img"></img>
        <br></br>
        Starting price: {auction.startPrice}
        <br></br>
        Bids: {auction.bids}
        <Bid></Bid>
        <CountdownTimer
                countdownTimestampMs={auction.endTime + 259200000}/>

        {auctions.map((auctions) => (
          <div key={auctions.id} className="auction">
            <p>{auctions.text}</p>
            <button className="btn-delete" onClick={() => removeAuction(auctions.id)}>
              Delete
            </button>
          </div>
        ))}
        
        {sessionStorage.getItem("authed") &&  < Bid auctionId={ auction.auctionId }/>}
    
        </div>))} 
         </div>

      );
    }

export default AuctionList;