import NavBar from "../NavBar";
import AuctionList from"../AuctionList";
import React from "react";


const Home = () => {

    return ( 

    <div className="home">
        <NavBar />
        <br></br>
        <AuctionList />
    </div>
    );
}
 
export default Home;