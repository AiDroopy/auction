import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Link } from 'react-router-dom';
 

const AuctionList = () => {

    const { auctions, bids, renderHighBid} = useContext(AuctionContext);

    
    return (

        <div className="auction-List"> 
            {auctions.map((auction) => (<div><Link to={`auction/${auction.id}`}><div className="auctions" key={auction.id}> 
                <br></br>
                    Product name: {auction.productName}
                <br></br>
                    Description: {auction.productInfo}
                <br></br>
                    <img src={`data:image/png;base64,${auction.productImgURL.data}`} alt="img" className="img"></img>
                <br></br>
                    Starting price: {auction.startPrice}
                    
                <br></br>
                    
    
        </div></Link> <div>{renderHighBid(bids, auction)}</div></div>))} 
         </div>

      );
    }

export default AuctionList;