import React, { useContext } from "react";
import AuctionContext from "../../context/AuctionContext";

import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const { auctions, bids } = useContext(AuctionContext);
  
  return (<div className="profile-renderer" >
          <div className="profile-form-container" key={currentUser.id}>
            <form className="profile-form">
              
              <Link to="/">Home</Link>
              <Link to="/"><button onClick={AuthService.logout}>LOG OUT</button></Link>
              
              <br></br>
              
              <label>user id:</label>
              <input type = "text" name = "userId" value = {currentUser.id}/>
              
              <label>user name:</label>
              <input type = "text" name = "email" defaultValue= {currentUser.username}/>
            </form>
          </div>

            <h2>These are the auctions where you have ongoing bids:</h2>
            <div className="auctions"> 
            {auctions.map((auction => { 
              let bidder = false
              bids.map((bid) => {
                if(bid.userId === currentUser.id && bid.auctionId === auction.id){
                  bidder = true
                }})
              
              if (bidder && Date.parse(auction.endTime) > Date.parse(Date())) 
              return <div className="auctions" key={auction.auctionId}><br></br>
              Product name: {auction.productName}
              <br></br>
              Description: {auction.productInfo}
              <br></br>
              <img src={auction.productImgURL}></img>
              <br></br>
              Starting price: {auction.startPrice}
              <br></br>
              End time: {auction.endTime}
              <br></br>
              </div>}))}
                  </div>
            
            <h2>This is your won auctions:</h2>
            {auctions.map((auction => { 
              let highBid = 0
              let highBidUserId = ''
              bids.map((bid) => {
              if (bid.auctionId === auction.id){
                  if (highBid === 0 || highBid < bid.amount){
                      highBid = bid.amount
                      highBidUserId = bid.userId
                  }}})
              if (Date.parse(auction.endTime) < Date.parse(Date()) && highBidUserId === currentUser.id) return <div className="auctions" key={auction.auctionId}><br></br>
              Product name: {auction.productName}
              <br></br>
              Description: {auction.productInfo}
              <br></br>
              <img src={auction.productImgURL}></img>
              <br></br>
              Starting price: {auction.startPrice}
              <br></br>
              <Link to={`/delivery/${auction.id}`}><h5>Specify delivery Info</h5></Link>
              <br></br>
              </div>}))}

            <h2>This is the auctions where you are selling:</h2>
            <div className="auctions"> 
              {auctions.map((auction => { if (auction.userId === currentUser.id) return <div className="auctions" key={auction.auctionId}><br></br>
                Product name: {auction.productName}
                <br></br>
                Description: {auction.productInfo}
                <br></br>
                <img src={auction.productImgURL}></img>
                <br></br>
                Starting price: {auction.startPrice}
                <br></br>
                End time: {auction.endTime}
                <br></br>
                </div>}))}
                </div>
        
      </div>
          )}
    
export default Profile;
