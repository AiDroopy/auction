import { useContext, useState, useEffect } from "react";
import AuctionContext from "../context/AuctionContext";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

const Profile = () => {
  
    const { users, auctions } = useContext(AuctionContext);

    return (
      users.map(function(user){
        if (user.id == sessionStorage.getItem('userId')){
          return (
          <div key={user.id}>
            <form>
              <Link to="/">Home</Link>
              <LogOut/>
              
              <br></br>
              <label>user id:</label>
              <input type = "text" name = "userId" value = {user.id}/>
              <label>user name:</label>
              <input type = "text" name = "email" defaultValue= {user.email}/>
              {/* <label>Adress:</label>
              <input type = "text" value= {user.adress}/>
              <label>Phone nr:</label>
              <input type = "text" value= {user.phoneNr}/> */}
            
            </form>
            <h2>This is your won auctions:</h2>
            <h3> listan på auctions: </h3>
            <h4>Auctions:</h4>
            <div className="auctions"> 
            {auctions.map((auction => { if (auction.userId === user.id) return <div className="auctions" key={auction.auctionId}><br></br>
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
        Bids: {auction.bids}</div>}))}
            </div>
            <h4></h4>
            <h2>This is the auction where you are bidding:</h2>
            <h3> listan på auctions</h3>
            <h2>This is the auctions where you are selling:</h2>
            <h3> listan på auctions</h3>
        </div>
          )}
    })
  )
}

export default Profile;
