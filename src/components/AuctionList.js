import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Bid from "./Bid";

const AuctionList = () => {

    const { auctions, bids} = useContext(AuctionContext);

    return (

        <div className="auction-List"> 
            {auctions.map((auction) => (<div className="auctions" key={auction.id}> 
                <br></br>
                    Product name: {auction.productName}
                <br></br>
                    Description: {auction.productInfo}
                <br></br>
                    <img src={auction.productImgURL} alt="img" className="img"></img>
                <br></br>
                    Starting price: {auction.startPrice}
                <br></br>
                    Bids: {bids.map((bid) => {if(bid.auctionId === auction.id) return( <div className="bids">
                        bid time: {bid.bidTime}
                        <br></br>
                        bid amount: {bid.amount}
                        <br></br>
                        bid amount: {bid.amount}
                        <br></br><br></br>
                </div>)})}
                <CountdownTimer
                    countdownTimestampMs={auction.endTime}/>
            
                {< Bid auctionId={ auction.id }/>}
    
        </div>))} 
         </div>

      );
    }

export default AuctionList;