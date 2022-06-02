import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import AuthService from "../services/AuthService";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


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
    window.location.reload();
    
}
  const handleOnChange = (event) => {
    setNewBid({
      ...newBid,
      [event.target.name]: event.target.value,
  })};


  return (
    <div className="new-bid">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="$" defaultValue={bid.amount}
                    onChange={handleOnChange} />
        </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
              Enter Bid
          </Button>
      </Form>
    </div>
  )
}


export default Bid;