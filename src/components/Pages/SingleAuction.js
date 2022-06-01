import React, {useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import AuctionService from '../../services/AuctionService'
import AuctionContext from '../../context/AuctionContext'
import { Row , Card} from 'react-bootstrap'

const SingleAuction = () => {

    const [auction, setAuction] = useState([])
    const {bids, renderHighBid} = useContext(AuctionContext);
    const {id} = useParams();

    useEffect(() => {
        AuctionService.getAuction(id).then(setAuction)
        }, []);
    
    return (
        <Row className="auctionCard" xs={12} md={6} lg={4} key={auction.id}>
        <Card style={{ width: '50vw' }}>
            <Card.Header><Card.Title>{auction.productName}</Card.Title></Card.Header>
            
                <Card.Img variant="top" src={auction.productImgURL} />
            <Card.Body>
                <Card.Text>
                    {auction.productInfo}
                    {auction.startPrice}
                </Card.Text>
            </Card.Body>

            {renderHighBid(bids, auction)}

        </Card>
    </Row>
    
    )
}

export default SingleAuction;
