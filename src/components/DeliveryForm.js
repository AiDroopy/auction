import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import AuthService from "../services/AuthService";
import DeliveryService from "../services/DeliveryService";
import AuctionService from "../services/AuctionService";
import Home from "./Pages/Home";
import { Link } from "react-router-dom";

const DeliveryForm = () => {

    const currentUser = AuthService.getCurrentUser()
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

        console.log(dCost)
  };

    return ( 
        <>
        <Link to="/">Home</Link>
    <div className="delivery-form">
        <h2>Enter delivery info: </h2>
            <form className="delivery-input">

            <label className="address-street-label" htmlFor="Adress">Address: </label>
            <input 
                type="text"
                name="Adress"
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
            <br></br>
            <button type="submit" onClick={handleSubmit}>
               <h5>Send information</h5>
            </button>
            
        </form> 
    </div> 
    <div id="deliverycost">
        { showResult ? <div>Your total delivery cost is: {dCost}</div> : null}
    </div>
    </> );
}


export default DeliveryForm;