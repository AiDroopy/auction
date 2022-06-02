import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import DeliveryService from "../services/DeliveryService";
import AuctionService from "../services/AuctionService";
import { Form, Button, Container } from "react-bootstrap";

const DeliveryForm = () => {

    const [auction, setAuction] = useState([])
    const[showResult, setShowResult] = useState(false)
    const [dCost, setDCost] = useState([])

    const {id} = useParams();

    useEffect(() => {
        AuctionService.getAuction(id).then(setAuction)
        }, []);

    const [address, setAddress] = useState (
        {   "VerboseMode": true,
            "Adress": "",
            }
    );

     // setting values for all instans fields, updates values, learn more!
     const handleOnChange = (event) => {
        setAddress({
          ...address,
          [event.target.name]: event.target.value,  // prop name måste finnas med i html-fälten (i return..)
    
      })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        address.AuctionId = auction.id
        console.log("DeliveryForm.js ", address)  //DEBUG 
        DeliveryService.getDeliveryInfo(address).then((response) => {
            setDCost(response.deliveryCost)
        })
        setShowResult(true)
  };

    return ( 
        <>
        <Container className="deliveryform">
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control className="deliver"
                    type="text"
                    name="Adress"
                    required 
                    defaultValue={""}
                    onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control className="deliver"
                    type="text"
                    name="City"
                    required 
                    defaultValue={""}
                    onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control className="deliver"
                    type="text"
                    name="Country"
                    required 
                    defaultValue={""}
                    onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Zip code</Form.Label>
                <Form.Control className="deliver"
                    type="text"
                    name="Zip"
                    required 
                    defaultValue={""}
                    onChange={handleOnChange}/>
            </Form.Group>
            <Button className="btn-primary" type="submit" onClick={handleSubmit}>
                Send information
            </Button>
            </Form>
            <div id="deliverycost">
                <br></br>
                { showResult ? <div className="dcost">Your total delivery cost is: {dCost}</div> : null}
            </div>
    </Container>
    </> );
}

export default DeliveryForm;