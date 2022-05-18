import React,{useContext} from "react";
import { Link } from "react-router-dom";
import AuctionContext from "../context/AuctionContext";
import AuthService from "../services/AuthService";




const NavBar = () => {
        const currentUser = AuthService.getCurrentUser()

        if (!currentUser)
        return(
        <div className="nav_container">
                <Link to="/AuctionList"><h2>Auctions</h2></Link>
                <Link to="/Search"><h2>Search</h2></Link>
                <Link to="/Destination"><h2>Destinations</h2></Link>
                <Link to="/LoginForm"><h2>Login</h2></Link>        
                <Link to="/SignUpForm"><h2>Sign Up!</h2></Link>       
        </div>
        ); 
  else 
  return (
      <div className="Login">
      <Link to="/Profile"><h2>Profile</h2></Link>
      <Link to="/NewAuction"><h2>Create auction!</h2></Link>
      <Link to ="/Logout"><h2>Logout</h2></Link>

  </div> )} 
  

export default NavBar;
