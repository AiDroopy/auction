import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import Card from "./Card";
import CountdownTimer from './CountdownTimer/CountdownTimer';

const AuctionList = () => {

    const { auctions } = useContext(AuctionContext);
    
    console.log(Date.now())
    return (

        <div className="auctions"> 
        {auctions.map((auction) => (<div className="auctions" key={auction.auctionId}> 
        <br></br>
        Product name: {auction.productName}
        <br></br>
        Description: {auction.productInfo}
        <br></br>
        <img src={auction.productImage}></img>
        <br></br>
        Starting price: {auction.Startprice}
        <br></br>
        Bids: {auction.Bids}
        <CountdownTimer
                countdownTimestampMs={auction.endTime + 259200000}/>
        </div>))} 
         </div>

      );
    }

export default AuctionList;