import React from 'react';
import { Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Auction = ({auction}) => (
 
    
        <Col className="auctionCard" xs={12} md={6} lg={4} key={auction.id}>
            <Card style={{ width: '18rem' }}>
            <Link to={`/auction/${auction.id}`}>
                <Card.Header><Card.Title>{auction.productName}</Card.Title></Card.Header>
                
                    <Card.Img variant="top" src={auction.productImgURL} />
                <Card.Body>
                    <Card.Text>
                        {auction.productInfo}
                    </Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </Col>
     
)

export default Auction;