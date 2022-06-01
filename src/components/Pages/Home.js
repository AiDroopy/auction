import NavBar from "../NavBar";
import AuctionList from"../AuctionList";
import React from "react";


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