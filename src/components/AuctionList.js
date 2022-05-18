import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Link } from 'react-router-dom';
 

const AuctionList = () => {

    const { auctions, bids, renderHighBid} = useContext(AuctionContext);

    
    return (

        <div className="auction-List"> 
            {auctions.map((auction) => (<Link to={`auction/${auction.id}`}><div className="auctions" key={auction.id}> 
                <br></br>
                    Product name: {auction.productName}
                <br></br>
                    Description: {auction.productInfo}
                <br></br>
                    <img src={auction.productImgURL} alt="img" className="img"></img>
                <br></br>
                    Starting price: {auction.startPrice}
                    
                <br></br>
                    {renderHighBid(bids, auction)}
    
        </div></Link>))} 
         </div>

      );
    }

export default AuctionList;