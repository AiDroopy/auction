import { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";

// Måste börja med Stor bokstav, även filnamnet
const NewAuction = () => {
    const { auction, addAuction, createNew, isLoading} = useContext (AuctionContext);  
    const [newAuction, setNewAuction] = useState (createNew(auction));
//     const [newAuction, setAuction] = useState(
//         createNew(newAuction)
//     // auctionId: 0,
//     // userId: 0,
//     // bids: [], // Change to bidId for relationship instead of aggregation
//     // startPrice: "",
//     // endPrice: 0,
//     // productName: "",
//     // productInfo: "",
//     // productImgURL: "",
//   );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        auction.userId = sessionStorage.getItem("userId");
        addAuction(newAuction);
  
  }
    
    // setting values for all instans fields, updates values, learn more!
    const handleOnChange = (event) => {
    setNewAuction({
      ...newAuction,
      [event.target.name]: event.target.value,  // prop name måste finnas med i html-fälten (i return..)

  })
  console.log(newAuction)
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
                required 
                defaultValue={auction.startPrice}
                onChange={handleOnChange}
                
            />


            <label className="bidlabel" htmlFor="startDate">Start Date: </label>
            <input 
                Month = "set Month"
                Day = "set Day"
                required 
                value={auction.startDate}
                onChange={handleOnChange}
              
            />



            <label className="bidlabel" htmlFor="endate">End Date: </label>
            <input 
                type="text"
                name="endDate"
                required 
                value={auction.endDate}
                onChange={handleOnChange}
              
            />

 
            <label className="bidlabel" htmlFor="endTime">Start Time: </label>
            <input 
                type="text"
                name="endTime"
                required 
                value={auction.endTime}
                onChange={handleOnChange}
              
            />

            
            <label className="bidlabel" htmlFor="productInfo">Information: </label>
            <input 
                type="text"
                name="productInfo"
                id="productInfo"
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
                Add Auction
            </button>
        </form> 
    </div>);
}
 
export default NewAuction; // <- Måste börja med Stor bokstav