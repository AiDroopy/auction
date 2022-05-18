import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import AuthService from "../services/AuthService";

const Bid = ({theAuction}) => {
  const { bid, createNew, insertBid } = useContext (AuctionContext);  
  const [newBid, setNewBid] = useState(createNew(bid));  // newBid gets a fresh copy of bid
  const currentUser = AuthService.getCurrentUser()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser){
      return alert("You must be logged in to make a bid")
    }
    newBid.auctionId = theAuction.id
    newBid.userId = currentUser.id
    if(currentUser.id === theAuction.userId){
      return alert("You may not bid on your own auction")
    }
    insertBid(newBid)
    
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