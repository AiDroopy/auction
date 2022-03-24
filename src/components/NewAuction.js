import { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";

// Måste börja med Stor bokstav, även filnamnet
const NewAuction = () => {
    const { user, createNew, isLoading} = useContext (AuctionContext);  
    const [newAuction, setNewAuction] = useState (null);
    const [auction, setAuction] = useState({
    auctionId: 0,
    userId: 0,
    bids: [], // Change to bidId for relationship instead of aggregation
    startPrice: "0",
    endPrice: 0,
    productName: "",
    productInfo: "",
    productImgURL: "",
  });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        auction.sellerId = sessionStorage.getItem("userId");
        
  
  }

    // setting values for all instans fields, updates values, learn more!
    const handleOnChange = (event) => {
    setNewAuction({
      ...newAuction,
      [event.target.name]: event.target.value,  // prop name måste finnas med i html-fälten (i return..)

  })
}
    return ( <div className="new-auction">
    <h2>Creat Auction</h2>
        <form>
            <label htmlFor="productName">Title: </label>
            <input 
                type="text"
                name="productName"
                required 
                value={auction.productName}
                onChange={handleOnChange}
              
            />


            <label htmlFor="startPrice">Start Price:</label>
            <input
                id="startPrice" 
                type="text"
                name="startPrice"
                required 
                value={auction.startPrice}
                onChange={handleOnChange}
                
            />
            
                        
            <label htmlFor="endDate">End Date: </label>
            <input 
                type="text"
                name="endDate"
                required 
                value={auction.endDate}
                onChange={handleOnChange}
              
            />

        
            <label htmlFor="endTime">Start Time: </label>
            <input 
                type="text"
                name="endTime"
                required 
                value={auction.endTime}
                onChange={handleOnChange}
              
            />

            
            <label htmlFor="productInfo">Information: </label>
            <input 
                type="text"
                name="productInfo"
                id="productInfo"
                required 
                value={auction.productInfo}
                onChange={handleOnChange}
              
            />

            <button type="submit" onClick={handleSubmit}>
                Add Auction
            </button>
        </form> 
    </div>);
}
 
export default NewAuction; // <- Måste börja med Stor bokstav