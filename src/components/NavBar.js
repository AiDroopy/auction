import { Link } from "react-router-dom";
import React from 'react';



const NavBar = () => {
  return (
        <>
        <div className="nav">
                <header className="h">
                <Link to='/Home'><h1>Clock auction </h1></Link> 
                </header>
                <div className="navbar">
                <Link to="/AuctionList"><h2>Auctions</h2></Link>
                <Link to="/Search"><h2>Search</h2></Link>
                <Link to="/LoginForm"><h2>Login</h2></Link>
                <Link to="/Profile"><h2>Profile</h2></Link>
                <Link to="/SignUpForm"><h2>Create account</h2></Link>
                <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                </div>
        </div></>
  )
}

export default NavBar;
