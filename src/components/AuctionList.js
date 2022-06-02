import React from 'react'
import { useContext } from 'react';
import AuctionContext from '../context/AuctionContext';
import { Container, Row } from 'react-bootstrap';
import AuctionLink from './CardLnk'
 

const AuctionList = () => {
    
    const { auctions } = useContext(AuctionContext);

    return (
        <Container className="rowBidAuction">
        <div className='row-wrapper'>
            <Row>
                {auctions.map((auction => {
                    if(Date.parse(auction.endTime) > Date.parse(Date()))
                        return <AuctionLink key={auction.id} auction={auction}/>
                }))}
            </Row> 
        </div>
    </Container>
    );
    }

export default AuctionList;