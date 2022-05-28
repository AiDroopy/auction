import NavBar from "../NavBar";
import AuctionList from"../AuctionList";
import React from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";


const Home = () => {
    
    return ( 


        <>

        <h1>Auction</h1>
        <div className="home">
            <div className = "navbar">
            
                <NavBar />
                </div>
                

        
        <div className ="auctionlist">
            <AuctionList />
        </div>
        
    </div> 
    </>
    );
}

export default Home;