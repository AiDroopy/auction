import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Auction from './Card'
 

const AuctionList = () => {
    
    const { auctions } = useContext(AuctionContext);

    return (
        <Container className="rowBidAuction">
        <div className='row-wrapper'>
            <Row>
            
            {auctions.map((auction => { 
         
                    return <Auction key={auction.id} auction={auction}/>
                    
                }))}
            </Row> 
        </div>
    </Container>
    );
    }

export default AuctionList;