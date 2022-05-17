import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import Bid from "./Bid";
import { Link } from 'react-router-dom';

 

const AuctionList = () => {

    const { auctions, bids} = useContext(AuctionContext);

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
                    countdownTimestampMs={auction.endTime}/></div> 
        }
    }

    
    return (

        <div className="auction-List"> 
            {auctions.map((auction) => (<Link to="/"><div className="auctions" key={auction.id}> 
                <br></br>
                    Product name: {auction.productName}
                <br></br>
                    Description: {auction.productInfo}
                <br></br>
                    <img src={auction.productImgURL} alt="img" className="img"></img>
                <br></br>
                    Starting price: {auction.startPrice}
                    
                <br></br>
                    {renderHighBid(bids, auction)}
            
                {< Bid auctionId={ auction.id }/>}
    
        </div></Link>))} 
         </div>

      );
    }

export default AuctionList;