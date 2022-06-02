import React, { useContext } from "react";
import AuctionContext from "../../context/AuctionContext";
import { Row, Container, Button, Form, ListGroup, Badge } from "react-bootstrap"; 
import AuthService from "../../services/AuthService";
import Auction from "../Card";
import AuctionLink from "../CardLnk";
import { Link } from "react-router-dom";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const { auctions, bids } = useContext(AuctionContext);
  
  return (
          
      <>
        <Form.Control className="profileForm"
          type="text"
          placeholder={currentUser.username}
          aria-label="Disabled input example"
          readOnly
        />
      
      <br></br>
      <div className="myAuctions">
      <Container className='row-wrapper'>
          <h3>Your current auctions: </h3>
                        <Row>
                        {auctions.map((auction => { 
                          if (auction.userId === currentUser.id) 
                              return<Link className="wonauctions" to={`/auction/${auction.id}`}>
                              <ListGroup as="ol" numbered>
                                    <ListGroup.Item
                                      as="li"
                                      className="d-flex justify-content-between align-items-start"
                                    >
                                      <div className="ms-2 me-auto">
                                        <div className="fw-bold">{auction.productName}</div>
                                      {auction.productInfo}
                                      </div>
                                      <img className="imglst" src={auction.productImgURL}></img>

                                    </ListGroup.Item></ListGroup>
                                    </Link>}))}

                        </Row>
      </Container>    
      <Container className='row-wrapper'>
               
          <Row>
              <h3>Your won auctions: </h3>
              <h5>Press auction to enter delivery details:</h5>
                {auctions.map((auction => { 
                  let highBid = 0
                  let highBidUserId = ''
                

                  bids.forEach((bid) => {
                      if (bid.auctionId === auction.id){
                      if (highBid === 0 || highBid < bid.amount){
                          highBid = bid.amount
                          highBidUserId = bid.userId
                        }}}
                )

              if (Date.parse(auction.endTime) < Date.parse(Date()) && highBidUserId === currentUser.id)  
                      return <Link className="wonauctions" to={`/delivery/${auction.id}`}>
                                <ListGroup as="ol" numbered>
                                      <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                      >
                                        <div className="ms-2 me-auto">
                                          <div className="fw-bold">{auction.productName}</div>
                                        {auction.productInfo}
                                        </div>
                                        <img className="imglst" src={auction.productImgURL}></img>

                                      </ListGroup.Item></ListGroup>
                                      </Link>}))}

          </Row>
      </Container>
          
      <Container className='row-wrapper'>
           
          <Row>
                <h3>Your ongoing bids: </h3>
                        {auctions.map((auction => { 
                          let bidder = false
                            bids.forEach((bid) => {
                          if(bid.userId === currentUser.id && bid.auctionId === auction.id){
                              bidder = true
                          }})
                    if (bidder && Date.parse(auction.endTime) > Date.parse(Date()))
                      return <AuctionLink key={auction.id} auction={auction}/>}))}
            </Row>
          </Container>
          
        </div>
      </>
      )
}         
    
export default Profile;