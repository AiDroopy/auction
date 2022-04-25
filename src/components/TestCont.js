import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";


/*
Not used in project only for learning!
*/

const TestCont = () => {

    const {bid, auction, profile, user, createNew, isLoading} = useContext(AuctionContext);  // get some stuff from AuctionContext

    // Set up a mockup profile
    const [newProfile, setNewProfile] = useState(createNew(profile));  // use createNew to construct an exact copy of the object.
    newProfile.userId = 3;
    newProfile.firstName = "Björn";
    newProfile.lastName = "Milebjörk"
    newProfile.address = "Ankeborg";
    
    

    // Set up a mockup user
    const [newUser, setNewUser] = useState(createNew(user)); 
    newUser.userId = 3;
    newUser.email = "bjpes@hotmail.com"
    newUser.password = "123";
    newUser.profile = newProfile;

    
    const auctions = [];  // Empty container for storing auctions
    
    
    // Two mockup auctions....

    // set up a mockup auction1
    let auction1 = createNew(auction);
    auction1.auctionId = 1;
    auction1.userId = 3;
    // We leave out bids for now, still empty.
    auction1.startPrice = 1000;
    auction1.endPrice = 5000;   // SKA VI HA MED DENNA? kommer att finnas i bids men vi behöver end DateTime typ. 
    auction1.productName = "Cass Casio";
    auction1.productInfo = "En jävligt kass Casio klocka";
    auction1.productImgURL = "https://worldbeyondwar.org/wp-content/uploads/2019/04/broken-clock.jpg";

    newUser.auctions.push(auction1); // Add it to the user.


    // set up a mockup auction2
    let auction2 = createNew(auction);
    auction2.auctionId = 2;
    auction2.userId = 3;
    // We leave out bids for now, still empty.
    auction2.startPrice = 2000;
    auction2.endPrice = 10000;   // SKA VI HA MED DENNA? kommer att finnas i bids men vi behöver end DateTime typ. 
    auction2.productName = "Värsta väckarklockan";
    auction2.productInfo = "20hp urverk något för stark för min smak";
    auction2.productImgURL = "http://www.stridentconservative.com/wp-content/uploads/2017/06/Broken-clock.jpg";

    newUser.auctions.push(auction2);  // Add it to the user.

    const [bids, setBids] = useState([]);

    let bid1 = createNew(bid);
    bid1.bidId = 1;
    bid1.userId = 3;
    bid1.auctionId = 2;
    bid1.bidAmount = 2100;
    bid1.timeStamp = Date.now();

    let bid2 = createNew(bid);
    bid2.bidId = 2;
    bid2.userId = 3;
    bid2.auctionId = 2;
    bid2.bidAmount = 2200;
    bid2.timeStamp = Date.now();

    bids.push(bid1, bid2);
    newUser.auctions[1].bids = bids;
    console.log(newUser);
   
    // Spit out the inormation
    return ( <div>
        TestCont
        <div className="user-object">
            
        </div>
        <div className="list">
      
        <>  <p>User Id: {newUser.id}</p>
            <p>Email: {newUser.email}</p>
            <p>Password: {newUser.password}</p>
            <p>---PROFILE----</p>
            <p>------User Id: {newProfile.userId}</p>
            <p>------First name: {newProfile.firstName}</p>
            <p>------Last name: {newProfile.lastName}</p>
            <p>------Address: {newProfile.address}</p>
            <p>---Auctions----</p>

            <div className="auctions">
                {newUser.auctions.map((item) => (
                <>
                    <div></div> 
                        <p>------Auction Id: { item.auctionId } </p>
                        <p>------User Id: { item.userId } </p>
                        <p>------Start Price: { item.startPrice } </p>
                        <p>------End Price: { item.endPrice } </p>
                        <p>------Product Name: { item.productName } </p>
                        <p>------Product Info: { item.productInfo } </p>
                        <p>------Image URL: { item.productImgURL } </p>
                        
                    <div/>
                </>
                ))}
            </div>

           
        </>
      
    </div>
    </div> );
}
 
export default TestCont;