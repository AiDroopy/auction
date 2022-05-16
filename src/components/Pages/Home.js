import NavBar from "../NavBar";
import AuctionList from"../AuctionList";
import Layout from "../Layout";
import React from "react";


const Home = () => {
    return ( 
        <Layout>
        <div className="home">
            <div className = "navbar">
                <NavBar />

        </div>
        <div className ="auctionlist">
            <AuctionList />
        </div>
        
    </div> 
    </Layout>
    );
}
 
export default Home;