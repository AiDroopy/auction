import React, { useState } from "react";

import AuthService from "../services/AuthService";
import DeliveryService from "../services/DeliveryService";
import { Link } from "react-router-dom";

const DeliveryForm = ({auctionId}) => {
    const currentUser = AuthService.getCurrentUser()
    
    const [auction_Id, setAuction_Id] = useState()

    if (!auctionId){
        console.log("AuctionId PROP not set");
        auctionId = "PROP-NOT-SET";
        
    }

    const [address, setAddress] = useState (
        { 
        "adress": "string",
        "city": "string",
        "zipCode": "string",
        "country": "string",
        "auctionId": auctionId,
        "deliveryCost": 0,
        "dilivered": true,
        "tariff": 0,
        "fixedCosts": 0,
        "distanceInKm": 0,
        "verboseMode": true }
    );

    const saveAddr = (address) =>{
        DeliveryService.getDeliveryInfo(address).then((response) => {
            console.log(response.data);
            
      })
      }

     // setting values for all instans fields, updates values, learn more!
     const handleOnChange = (event) => {
        setAddress({
          ...address,
          [event.target.name]: event.target.value,  // prop name måste finnas med i html-fälten (i return..)
    
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // ANVÄNDER INTE DESSA FÄLT FÖR ATT SLIPPA DUPLICATED STUFF VID UTVECKLING
        // address.address = "AuctionObjID";
        // address.user.name = currentUser.id;
        console.log("DeliveryForm.js ", address)        //DEBUG
        saveAddr(address);
       
  }

    return (  <div className="delivery-form">
    <h2>Create Auction</h2>
        <form className="delivery-input">

            <label className="address-street-label" htmlFor="address">Address: </label>
            <input 
                type="text"
                name="address"
                required 
                defaultValue={""}
                onChange={handleOnChange}
              
            />
 
            <label className="address-city-label" htmlFor="city">City: </label>
            <input 
                type="text"
                name="city"
                required 
                defaultValue={""}
                onChange={handleOnChange}
              
                
            />

            
            <label className="address-country-label" htmlFor="country">Country: </label>
            <input 
                type="text"
                name="country"
                required 
                defaultValue={"Sweden"}
                onChange={handleOnChange}
              
            />

            <label className="address-zip-label" htmlFor="zip">Zip: </label>
            <input 
                type="text"
                name="zip"
                required 
                defaultValue={"123 12"}
                onChange={handleOnChange}
              
            />
           

            <button type="submit" onClick={handleSubmit}>
                <Link to="/"><h2>Save</h2></Link>
            </button>
        </form> 
    </div> );
}


export default DeliveryForm;