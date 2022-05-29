import { Link } from "react-router-dom";
import React from 'react';
import "./navbar.css"

/**
 *      <Link to="/DeliveryForm"><h4>Address</h4></Link> is a temporary link until DeliveryForm.js 
 *      can be called from an Auction or a Bid when Auction is closed.
 */
const NavBar = () => {
  return (
    <div className="nav ">
                <div className="nav_left ">
                        <Link to="/AuctionList"><h2>Auctions</h2></Link>
                        <Link to="/Search"><h2>Search</h2></Link>
                        <Link to="/DeliveryForm"><h2>Shipment Info</h2></Link>
                        <Link to="/LoginForm"><h2>Login</h2></Link>
                        <Link to="/Profile"><h2>Profile</h2></Link>
                        <Link to="/SignUpForm"><h2>Sign Up!</h2></Link>
                        <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                </div>
    </div>
  )
}

export default NavBar;
