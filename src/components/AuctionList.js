import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import Card from "./Card";

const AuctionList = () => {

    const { auctions } = useContext(AuctionContext);
    
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
        

        </div>))} 
         </div>

      );
    }

export default AuctionList;