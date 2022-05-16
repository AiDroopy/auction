import { Link } from "react-router-dom";
<<<<<<< HEAD
import React, { Component }  from 'react';


const NavBar = () => {
  return (
=======
import React from 'react';

const NavBar = () => {
  return (
    <div className="nav">
        
        <div className="nav_container">
                
                <div className="nav_left">
                <div className="nav_text">Welcome to our auction site, here you can buy awesome watches!</div>
                        <Link to="/AuctionList"><h2>Auctions</h2></Link>
                        <Link to="/Search"><h2>Search</h2></Link>
                        <Link to="/Destination"><h2>Destinations</h2></Link>
                </div>
                <div className="nav_right">
                        <Link to="/LoginForm"><h2>Login</h2></Link>
                        <Link to="/Profile"><h2>Profile</h2></Link>
                        <Link to="/SignUpForm"><h2>Sign Up!</h2></Link>
                        <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                </div>
>>>>>>> master

        <><header>
                < Link to='/Home'></Link><h1>Clock auction </h1> 
        </header>
        <div className="nav">
                  <div className="nav_container">

                          <div className="nav_left">
                                  <Link to="/AuctionList"><h2>Auctions</h2></Link>
                                  <Link to="/Search"><h2>Search</h2></Link>
                          </div>
                          <div className="nav_right">
                                  <Link to="/LoginForm"><h2>Login</h2></Link>
                                  <Link to="/Login/Home/Profile"><h2>Profile</h2></Link>
                                  <Link to="/SignUpForm"><h2>Sign Up!</h2></Link>
                                  <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                          </div>
                  </div>
          </div></>
  )
}

export default NavBar;
