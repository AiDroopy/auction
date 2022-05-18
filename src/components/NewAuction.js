import React, { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";
import "../NewAuction.css";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import FileService from "../services/FileService";

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
        setNewFile(event.target.files[0]); 
      }

    const handleSubmit = (e) => {
        e.preventDefault();
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

    return ( <div className="new_auction">

    <h2>Create Auction</h2>
        <form id="formElem"className="new-auction">

            <label className="bidlabel" htmlFor="productName">Title: </label>
            <input 
                type="productName"
                name="productName"
                id=""
                required 
                defaultValue={auction.productName}
                onChange={handleOnChange}
              
            />
 
            <label className="bidlabel" htmlFor="startPrice">Start Price:</label>
            <input 
                type="Start Price"
                name="startPrice"
                id="startPrice"
                required 
                defaultValue={auction.startPrice}
                onChange={handleOnChange}
                
            />

            
            <label className="bidlabel" htmlFor="productInfo">Information: </label>
            <input 
                type="text"
                id="productInfo"
                name="productInfo"
                required 
                defaultValue={auction.productInfo}
                onChange={handleOnChange}
              
            />

            <label className="bidlabel" htmlFor="file">Upload image:  </label>

                <input type="file" 
                id="file" 
                name="file"
                // defaultValue={auction.productImgURL}
                onChange={handleFileChange}
                />

            <button type="submit" onClick={handleSubmit}>
                <Link to="/"><h2>Create auction!</h2></Link>
            </button>
            </form>
    </div>);
}

export default NewAuction; // <- Måste börja med Stor bokstav