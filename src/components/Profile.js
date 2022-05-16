import { useContext, useState, useEffect } from "react";
import AuctionContext from "../context/AuctionContext";
import { useParams } from "react-router";
import React, { Component }  from 'react';


const Profile = () => {
    const params = useParams ();

  
    const { users, auctions } = useContext(AuctionContext);

    return (

      users.map(function(user){
        if (user.userId == localStorage.getItem('userId')){
          return (
          <div key={user.id}>
            <form>
            
              <label>user id:</label>
              <input type = "text" name = "userId" value = {user.userId}/>
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
            {auctions.map((auction => { if (auction.sellerId === user.userId) return <div className="auctions" key={auction.auctionId}><br></br>
        Product name: {auction.productName}
        <br></br>
        Description: {auction.productInfo}
        <br></br>
        <img src={auction.productImage}></img>
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
            <h3>listan på auctions</h3>
        </div>
          )}
    })
  )
}

export default Profile;
