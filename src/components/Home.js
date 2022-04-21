import TestCont from "./TestCont";
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import AuctionList from"./AuctionList";
import React from "react";


const Home = () => {
    return ( 
    <div className="home">
        <div className = "navbar">
            <NavBar />

        </div>
        <div className ="auctionlist">
            <AuctionList />
        </div>
        
    </div> );
}
 
export default Home;