import React, { useContext } from "react";
import AuctionContext from "../../context/AuctionContext";

import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const { auctions, bids } = useContext(AuctionContext);
  
  
    
        return (
        <div className="profile-renderer" >
                <div className="profile-user-container" key={currentUser.id}>
                   
                        <Link to="/">HOME</Link>
                        <Link to="/" onAuxClick={AuthService.logout}>LOGOUT</Link>
                        
                        <p className="label-userid">
                            <label>
                                user id:
                                {currentUser.id}
                            </label> 
                        </p>
                        <p className="label-username">
                            <label>
                                user name:
                                {currentUser.username}
                            </label>
                        </p> 
                </div>
            
        
    



    
        <div className="profile-auction-ongo-bids">
          <h4>These are the auctions where you have ongoing bids:</h4>
          <div className="map-auctions"> 
            {
              // Here comes the most painful code reading for a long time!
              // Go thru all auctions in the database
                auctions.map((auction) => 
                { 
                    let bidder = false;
                
                    // Go thru all bids and check if its yours
                    bids.map((bid) =>
                    {
                    
                        // If a bid in database is yours, we must go in and check if it belongs to the parent auction!
                        // First then can we know if you are a bidder. (Varför togs bidID bort från auctions från början?!)
                        // Finally we can set bidder state.
                        if(bid.userId === currentUser.id && bid.auctionId === auction.id)
                        {
                            bidder = true
                        }
                        
                        // 
                        if (bidder && Date.parse(auction.endTime) > Date.parse(Date()))
                        {
                                return ( 
                                <div className="map-bids-own-expired" key={auction.auctionId}>
                                    
                                    
                                    <p className="map-bid-product-name">
                                        Product name: {auction.productName}
                                    </p>
                                    <p className="map-bid-description">
                                        Description: {auction.productInfo}
                                    </p>
                                    <p className="map-bid-img-url">
                                        <img 
                                            src={auction.productImgURL}>
                                        </img>
                                    </p>
                                    <p className="map-bid-start-price">
                                        Starting price: {auction.startPrice}
                                    </p>
                                    <p className="map-bid-end-time">
                                        End time: {auction.endTime}
                                    </p>
                                </div>);
                        
                        }
                        else return (<empty-space className="map-bids-own-expired" key={auction.auctionId}>
                             
                        </empty-space>);                    
                } );

                return ; } )
        
     }</div>
 
    


        <div className="profile-won-auctions">
        <h4>This is your won auctions:</h4>
        <div className="map-won-auctions">
        {
            auctions.map((auction => 
            { 
                let highBid = 0
                let highBidUserId = ''
                bids.map((bid) => 
                    {
                        if (bid.auctionId === auction.id)
                        {
                            
                            if (highBid === 0 || highBid < bid.amount)
                            {
                                highBid = bid.amount
                                highBidUserId = bid.userId
                            }
                        }
                    }
                    )

                if (Date.parse(auction.endTime) < Date.parse(Date()) && highBidUserId === currentUser.id)
                {
                return(
                        <div className="auctions" key={auction.auctionId}>
                        <br></br>
                        Product name: {auction.productName}
                        <br></br>
                        Description: {auction.productInfo}
                        <br></br>
                        <img src={auction.productImgURL}></img>
                        <br></br>
                        Starting price: {auction.startPrice}
                        <br></br>
                        <Link to={`/delivery/${auction.id}`}><h5>Specify delivery Info</h5></Link>
                        <br></br>
                        </div>
                )
            }
        }
        ))
        }
        </div>
        </div>





        <div className="profile-selling-auctions">
        <h2>This is the auctions where you are selling:</h2>
        <div className="map-selling-auctions"> 
        {
            auctions.map((auction) => 
            {
                if (auction.userId === currentUser.id)
                { 
                return (
                    <div className="my-selling-auctions" key={auction.auctionId}>
                        <p className="my-selling-product-name">
                            Product name: {auction.productName}
                        </p>
                        <p className="my-selling-description">
                            Description: {auction.productInfo}
                        </p>
                        <p className="my-selling-img-url">
                            <img src={auction.productImgURL}></img>
                        </p>
                        <p className="my-selling-starting-price">
                            Starting price: {auction.startPrice}
                        </p>
                        <p className="my-selling-end-time">
                            End time: {auction.endTime}
                        </p>
                    </div>);
                }
            }
            )
            
        }
        </div>
        </div>
    </div> 

</div>

);
}     
    
export default Profile;
