import TestCont from "./TestCont";
import Auction from "./Auction"
import NavBar from "./NavBar";
import React, { Component }  from 'react';


const Home = () => {

    return ( 
      <><div><NavBar /></div><div className="home">
          <div> <Auction /></div>
          <div><Auction /></div>
       </div></>   
        )

}
 
export default Home;