import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
 

const AuctionList = () => {
    
    const { auctions, bids, renderHighBid} = useContext(AuctionContext);

    return (

        <div className="auction-List"> 
  
            {auctions.map((auction) => (
            <div><Link to={`/auction/${auction.id}`}>
            <div className="auctions" key={auction.id}> 
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={auction.productImgURL} />
                        <Card.Body>
                        <Card.Title>Product name: {auction.productName}</Card.Title>
                        <Card.Text>
                            Description: {auction.productInfo}
                            Starting price: {auction.startPrice}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        {renderHighBid(bids, auction)}
                        </Card.Footer>
                    </Card>
                </CardGroup>
                    
            </div></Link> </div>))} 
         </div>

      );
    }

export default AuctionList;