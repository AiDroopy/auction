import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import "./navbar.css"




const NavBar = () => {
        
        
  return (
        <>
          <div className="nav_container">
                

                          <div className="nav-left">
                                  <Link to="/AuctionList"><h2>Auctions</h2></Link>
                                  <Link to="/Search"><h2>Search</h2></Link>
                                  <Link to="/Destination"><h2>Destinations</h2></Link>
                                  <Link to="/LoginForm"><h2>Login</h2></Link>
                                  <Link to="/SignUpForm"><h2>Sign Up!</h2></Link>
                                  <Link to="/Profile"><h2>Profile</h2></Link>
                                  <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                          </div>
                  </div></>     
        )
}

export default NavBar;
