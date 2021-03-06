import { Link } from "react-router-dom";
import React from 'react';
import AuthService from "../services/AuthService";

const NavBar = () => {
const currentUser = AuthService.getCurrentUser();

if (currentUser) {
return (

    <div className="nav">
        
        <div className="nav_container">
                
                <div className="nav_left">
                <div className="nav_text">Welcome to our auction site, here you can buy awesome watches!</div>
                        <Link to="/AuctionList"><h2>Auctions</h2></Link>
                        <Link to="/Search"><h2>Search</h2></Link>
                </div>
                <div className="nav_right">
                        <Link to="/Login"><h2>Login</h2></Link>
                        <Link to="/Profile"><h2>Profile</h2></Link>
                        <Link to="/NewAuction"><h2>Create auction!</h2></Link>
                </div>

        </div>
    </div>
  ) } else {
  return (<div className="Login">
                
  <Link to="/SignUpForm"><h2>Sign Up!</h2></Link> 
  <Link to="/Login"><h2>Login</h2></Link> 
  <Link to="/AuctionList"><h2>Auctions</h2></Link>
<Link to="/Search"><h2>Search</h2></Link>

</div> )
  }

}

export default NavBar;
