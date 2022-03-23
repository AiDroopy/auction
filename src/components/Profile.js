import { useContext, useState, useEffect } from "react";
import AuctionContext from "../context/AuctionContext";


const Profile = () => {
  
    const { users, updateProfile, userEdit} = useContext(AuctionContext);

    const USERID = localStorage.getItem('userId')
    const [ user, setUser ] = useState( {
      userId: USERID,
      email: "",
    });

    useEffect(() => {
      if (userEdit.edit === true) {
        setUser(userEdit.item.user);
      }
    }, [userEdit]);

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setUser({[name]: value})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      updateProfile(user)
      console.log(user)
    }


    return (
      users.map(function(user){
        if (user.userId == localStorage.getItem('userId')){
          return (
          <div key={user.id}>
            <form onSubmit={handleSubmit}>
            
              <label>user id:</label>
              <input type = "text" name = "userId" value = {user.userId} onChange={handleChange}/>
              <label>user name:</label>
              <input type = "text" name = "email" defaultValue= {user.email} onChange={handleChange}/>
              {/* <label>Adress:</label>
              <input type = "text" value= {user.adress}/>
              <label>Phone nr:</label>
              <input type = "text" value= {user.phoneNr}/> */}
      
            </form>
            <button type="submit">Send</button>
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
