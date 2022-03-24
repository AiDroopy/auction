import { useContext, useState, useEffect } from "react";
import AuctionContext from "../context/AuctionContext";


const Profile = () => {
  
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
            <h4>Auction ID:</h4>
            <div className="auctions"> 
            {auctions.map((auction) => if () {
              
            } (<div className="auctions">{auction.SellerId}{auction.productName}</div>   ))}   </div>
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
