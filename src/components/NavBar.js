import React,{useContext} from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";


/**
 *      <Link to="/DeliveryForm"><h4>Address</h4></Link> is a temporary link until DeliveryForm.js 
 *      can be called from an Auction or a Bid when Auction is closed.
 */
const NavBar = () => {
        const currentUser = AuthService.getCurrentUser()
         
        if (currentUser)
        {
        return(
        <div className="nav_container">
                <Link to="/Profile"><h2>Profile</h2></Link>
                <Link to="/AuctionList"><h2>Auctions</h2></Link>
                <Link to="/Search"><h2>Search</h2></Link>
                <Link to="/Destination"><h2>Destinations</h2></Link>
                <Link to="/NewAuction"><h2>NewAuction</h2></Link>
                  
                
                     
        </div>
        ); }
  else
  return (
      <div className="Login">
                
              <Link to="/SignUpForm"><h2>Sign Up!</h2></Link> 
              <Link to="/LoginForm"><h2>Login</h2></Link> 
       
      
     

  </div> )} 
  

export default NavBar;
