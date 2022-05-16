import React, { useState } from "react";
import AuctionContext from "../context/AuctionContext";
import AuthService from "../services/AuthService";
import DeliveryService from "../services/DeliveryService";
import { Link } from "react-router-dom";

const DeliveryForm = () => {
    const currentUser = AuthService.getCurrentUser()
    
    const [address, setAddress] = useState ({
 
        "user": {
          "id": "FRONTEND-USR-ID_101",
          "name": "FRONTEND-USR-NAME"
        },
        "address": "FRONTEND-USR-ADDRESS",
        "city": "Halmstad",
        "country": "Sverige",
        "zipCode": 12345,
        "auction": {
          "id": "POSTMAN-AUCTION-ID_8"
        }
      });

    const saveAddr = (address) =>{
        DeliveryService.deliver(address).then((response) => {
            console.log(response.data);
            // setUser(response.data);
            // setIsLoading(false);
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
        address.auction = "AUCTIONID";
        address.user = currentUser.id;
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

            <label className="address-zip-label" htmlFor="zip">Country: </label>
            <input 
                type="text"
                name="zip"
                required 
                defaultValue={123}
                onChange={handleOnChange}
              
            />
           

            <button type="submit" onClick={handleSubmit}>
                <Link to="/"><h2>Save</h2></Link>
            </button>
        </form> 
    </div> );
}


export default DeliveryForm;