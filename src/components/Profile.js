import React, { useContext, useState, useEffect } from "react";
import AuctionContext from "../context/AuctionContext";

import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();

  console.log(currentUser)

  const { auctions } = useContext(AuctionContext);


    return (
          <div key={currentUser.id}>
            <form>
              <Link to="/">Home</Link>

              
              <br></br>
              <label>user id:</label>
              <input type = "text" name = "userId" value = {currentUser.id}/>
              <label>user name:</label>
              <input type = "text" name = "email" defaultValue= {currentUser.username}/>
            
            </form>
            <h2>This is your won auctions:</h2>
            <h3> listan på auctions: </h3>
            <h4>Auctions:</h4>
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
        Bids: {auction.bids}</div>}))}
            </div>
            <h4></h4>
            <h2>This is the auction where you are bidding:</h2>
            <h3> listan på auctions</h3>
            <h2>This is the auctions where you are selling:</h2>
            <h3> listan på auctions</h3>
        </div>
          )}


export default Profile;
