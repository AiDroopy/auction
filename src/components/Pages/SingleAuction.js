import React, {useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import AuctionService from '../../services/AuctionService'
import AuctionContext from '../../context/AuctionContext'

const SingleAuction = () => {

    const [auction, setAuction] = useState([])

    const {bids, renderHighBid} = useContext(AuctionContext);

    const {id} = useParams();

    useEffect(() => {
        AuctionService.getAuction(id).then(setAuction)
        }, []);
    
    return (
      <div className="auctions" key={auction.id}> 
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
    
        </div>
    )
}

export default SingleAuction;
