import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
//import BidsService from "../services/BidsService";

const Bid = ({auctionId}) => {
  const { bid, createNew, insertBid, isLoading, auctions, userid } = useContext (AuctionContext);  
  const [newBid, setNewBid] = useState(createNew(bid));  // newBid gets a fresh copy of bid
  console.log(auctionId)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userid === 1){
      alert("You must be logged in to bid")
    }
    else{
      newBid.auctionId = auctionId
      insertBid(newBid)
    }
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
            <label className="bidlabel"htmlFor="amount">Bid </label>
            <input 
                type="number"
                name="amount"
                required 
                defaultValue={bid.amount}
                onChange={handleOnChange}
              
            />
         
            <button type="submit" onClick={handleSubmit}>
                Bid
            </button>
            </form> 
    </div>
  )
}


export default Bid;