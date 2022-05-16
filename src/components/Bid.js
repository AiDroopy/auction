import { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import React, { Component }  from 'react';


const Bid = ({auctionId}) => {
  const { bid, createNew, addBid, isLoading} = useContext (AuctionContext);  
  const [newBid, setNewBid] = useState(createNew(bid));  // newBid gets a fresh copy of bid
  console.log(auctionId);

  const handleSubmit = (e) => {
    e.preventDefault();
    bid.bidTime = Date.now()
    bid.userId = sessionStorage.getItem("userId");
    bid.auctionId = auctionId;
    addBid(bid)

}
  const handleOnChange = (event) => {
    setNewBid({
      ...newBid,
      [event.target.name]: event.target.value, 
  })};


  return (
      <div className="new-bid">
    <h2>Add bid</h2>
        <form>
            <label htmlFor="amount">Bid </label>
            <input 
                type="text"
                name="amount"
                required 
                defaultValue={bid.amount}
                onChange={handleOnChange}
              
            />
         
            <button type="submit" onClick={handleSubmit}>
                Add Bet
            </button>
            </form> 
    </div>
  )
}


export default Bid;