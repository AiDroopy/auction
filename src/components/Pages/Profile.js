import React, { useContext } from "react";
import AuctionContext from "../../context/AuctionContext";
import { Row, Container, Button, Form } from "react-bootstrap"; 
import AuthService from "../../services/AuthService";
import Auction from "../Card";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const { auctions, bids } = useContext(AuctionContext);
  
  return (
          
      <>
      <div key={currentUser.id}>
        <Form.Control className="profileForm"
          type="text"
          placeholder={currentUser.username}
          aria-label="Disabled input example"
          readOnly
        />
      
      <br></br>
      <div className="myAuctions">
          <h3>Your current auctions: </h3>
              <Container>
                    <div className='row-wrapper'>
                        <Row>
                        {auctions.map((auction => { 
                          if (auction.userId === currentUser.id) 
                              return <Auction key={auction.id} auction={auction}/>}))}
                        </Row>
                    </div>
              </Container>    
          
          <h3>Your won auctions: </h3>
              <Container>
                    <div className='row-wrapper'>
                        <Row>
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
                              return <Auction key={auction.id} auction={auction}/>}))}
                        </Row>
                    </div>
              </Container>
              <br></br>
          <h3>Your ongoing bids: </h3>
            <Container>
                    <div className='row-wrapper'>
                        <Row>
                        {auctions.map((auction => { 
                          let bidder = false
                            bids.forEach((bid) => {
                          if(bid.userId === currentUser.id && bid.auctionId === auction.id){
                              bidder = true
                          }})
                    if (bidder && Date.parse(auction.endTime) > Date.parse(Date()))
                      return <Auction key={auction.id} auction={auction}/>}))}
                </Row>
              </div>
            </Container>
          
          </div>
      </div>
      </>
      )
}         
    
export default Profile;