import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import "../NewAuction.css";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

// Måste börja med Stor bokstav, även filnamnet
const NewAuction = () => {
    const { auction, createAuction, createNew } = useContext (AuctionContext);  
    const [newAuction, setNewAuction] = useState (createNew(auction));
    const currentUser = AuthService.getCurrentUser()
    const date = new Date()
    date.setDate(date.getDate() + 5)

    const handleSubmit = (e) => {
        e.preventDefault();
        newAuction.userId = currentUser.id
        newAuction.endTime = date
        createAuction(newAuction);
  }
    
    // setting values for all instans fields, updates values, learn more!
    const handleOnChange = (event) => {
    setNewAuction({
      ...newAuction,
      [event.target.name]: event.target.value,  // prop name måste finnas med i html-fälten (i return..)

  })
}
    return ( <div className="new_auction">
    <h2>Create Auction</h2>
        <form className="new-auction">

            <label className="bidlabel" htmlFor="productName">Title: </label>
            <input 
                type="text"
                name="productName"
                required 
                defaultValue={auction.productName}
                onChange={handleOnChange}
              
            />
 
            <label className="bidlabel" htmlFor="startPrice">Start Price:</label>
            <input 
                type="Start Price"
                name="startPrice"
                required 
                defaultValue={auction.startPrice}
                onChange={handleOnChange}
                
            />

            
            <label className="bidlabel" htmlFor="productInfo">Information: </label>
            <input 
                type="text"
                name="productInfo"
                required 
                defaultValue={auction.productInfo}
                onChange={handleOnChange}
              
            />


            <label className="bidlabel" htmlFor="productImgURL">Upload image:  </label>

                <input type="file" 
                id="file-input" 
                name="productImgURL" 
                value={auction.productImgURL}
                onChange={handleOnChange}
                />

            <button type="submit" onClick={handleSubmit}>
                <Link to="/"><h2>Create auction!</h2></Link>
            </button>
        </form> 
    </div>);
}
 
export default NewAuction; // <- Måste börja med Stor bokstav