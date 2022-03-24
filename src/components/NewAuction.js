import { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";

// Måste börja med Stor bokstav, även filnamnet
const NewAuction = () => {
    const { user, createNew, isLoading, auction} = useContext (AuctionContext);  
    const [newAuction, setNewAcution]
    const [startPrice, setStartPrice] = useState("");
    const [startDate, setStarDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [info, setInfo] = useState("");
    const [img, setImg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        auction.sellerId = sessionStorage.getItem("userId");
        auction.productName = "PRODUKT NAMN";
        auction.productInfo = 
  
  }

    // setting values for all instans fields, updates values, learn more!
    const handleChange = (event) => {
    setAuction({
      ...newUser,
      [event.target.name]: event.target.value,

  })
}
    return ( <div className="new">
    <h2>Creat Auction</h2>
        <form>
            <label htmlFor="title">Title: </label>
            <input 
                type="title"
                required 
                value={auction.title}
                onChange={handleOnChange}
              
            />
            <label htmlFor="stratPrice">Start Price:</label>
            <input 
                type="Start Price"
                required 
                value={auction.startPrice}
                onChange={handleOnChange}
                
            />
            
            <label htmlFor="startDate">Start Date: </label>
            <input 
                Month = "set Month"
                Day = "set Day"
                required 
                value={auction.startDate}
                onChange={handleOnChange}
              
            />

            
            <label htmlFor="endtDate">End Date: </label>
            <input 
                Month = "set Month"
                Day = "set Day"
                required 
                value={auction.endDate}
                onChange={handleOnChange}
              
            />

        
            <label htmlFor="endTime">Start Time: </label>
            <input 
                Hours = "set Hour"
                Minutes = "set Minute"
                required 
                value={auction.endTime}
                onChange={handleOnChange}
              
            />

            
            <label htmlFor="info">Information: </label>
            <input 
                type = "text"
                required 
                value={auction.info}
                onChange={handleOnChange}
              
            />






            <button type="submit" onClick={handleSubmit}>
                Add Auction
            </button>
        </form> 
    </div>);
}
 
export default NewAuction; // <- Måste börja med Stor bokstav