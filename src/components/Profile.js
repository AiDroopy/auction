import { useContext } from "react";
import AuctionContext from "../context/AuctionContext";

const Profile = () => {
  
    const { users } = useContext(AuctionContext);
    console.log(users)
    
    return (
      users.map(function(user){
        if (user.userId === localStorage.getItem('userId')){
          return (
          <div>
            <form>
              <label>user id:</label>
              <input type = "text" value= {user.userId}/>
              <label>user name:</label>
              <input type = "text" value= {user.email}/>
              <label>Adress:</label>
              <input type = "text" value= {user.adress}/>
              <label>Phone nr:</label>
              <input type = "text" value= {user.phoneNr}/>
            </form>
            <h2>This is your won auctions:</h2>
            <h3> listan på auctions: </h3>
            <h4>Auction ID:</h4>
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
