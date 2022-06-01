import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import FileService from "../services/FileService";
import { Form, Container, Col, Button } from "react-bootstrap";

// Måste börja med Stor bokstav, även filnamnet
const NewAuction = () => {
    const { auction, createAuction, createNew } = useContext (AuctionContext);  
    const [newAuction, setNewAuction] = useState (createNew(auction));
    const [newFile, setNewFile] = useState ([]);
    const currentUser = AuthService.getCurrentUser();

    const handleOnChange = (event) => {
        setNewAuction({
          ...newAuction,
          [event.target.name]: event.target.value,  
            })
      }   
    
    const handleFileChange = (event) => {
        setNewFile(event.target.files[0])
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentUser){
            return alert("You must be logged in to create an auction")
          }
        newAuction.userId = currentUser.id
        const formData = new FormData();

        formData.append("file", newFile)
        formData.append("auction", new Blob([JSON.stringify(newAuction)], {type:"application/json"}));
    
            try {
               createAuction(formData)
            } catch(error) {
            console.log(error)
            }     
    }
    
    // setting values for all instans fields, updates values, learn more!

    return (   <Container className="newAuction">
        <h2>Create auction</h2>
      <Form>
        <Col className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Title: </Form.Label>
            <Form.Control
              required
              type="text"
              name="productName"
              defaultValue={auction.productName}
              onChange={handleOnChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Start price</Form.Label>
            <Form.Control
              type="number"
              name="startPrice"
              required 
              defaultValue={auction.startPrice}
              onChange={handleOnChange}
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="textArea">
            <Form.Label>Product information: </Form.Label>
            <Form.Control as="textarea" rows={3} 
              name="productInfo"
              required    
              defaultValue={auction.productInfo}
              onChange={handleOnChange}/>
            </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Title: </Form.Label>
            <Form.Control
                input type="file" 
                id="file" 
                name="productImgURL" 
                onChange={handleFileChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
              <Button className="btn-primary" onClick={handleSubmit}>
                <h5>Save auction!</h5>
              </Button>
      
      </Form>
    </Container>)
}

export default NewAuction; // <- Måste börja med Stor bokstav