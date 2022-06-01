import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Link } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';
 

const AuctionList = () => {
    
    const { auctions } = useContext(AuctionContext);

    return (
        <div className="auctionlist">
        {auctions.map((auction) => (
        <Row className="auctionCard" xs={12} md={6} lg={4} key={auction.id}>
        <Card style={{ width: '50vw' }}>
        <Link to={`/auction/${auction.id}`}>
            <Card.Header><Card.Title>{auction.productName}</Card.Title></Card.Header>
            
                <Card.Img variant="top" src={auction.productImgURL} />
            <Card.Body>
                <Card.Text>
                    {auction.productInfo}
                    {auction.startPrice}
                </Card.Text>
            </Card.Body>
            </Link>
        </Card>
    </Row>))} 
    </div>
      );
    }

export default AuctionList;