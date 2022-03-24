import { useContext, useState } from "react";
import AuctionContext from "../context/AuctionContext";


const NewAuction = () => {
    const { user, createNew, isLoading, authUser} = useContext (AuctionContext);  
    
    const [startPrice, setStartPrice] = useState("");
    const [startDate, setStarDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [info, setInfo] = useState("");
    const [img, setImg] = useState("");


    
    return ( <div className="new">
    <h2>Creat Auction</h2>
        <form>
            <label htmlFor="title">Title: </label>
            <input 
                type="title"
                required 
                value={users.title}
                onChange={handleOnChange}
              
            />
            <label htmlFor="startPrice">Start Price:</label>
            <input 
                type="Start Price"
                required 
                value={users.startPrice}
                onChange={handleOnChange}
                
            />
            
            <label htmlFor="startDate">Start Date: </label>
            <input 
                Month = "set Month"
                Day = "set Day"
                required 
                value={users.startDate}
                onChange={handleOnChange}
              
            />

            
            <label htmlFor="endate">End Date: </label>
            <input 
                Month = "set Month"
                Day = "set Day"
                required 
                value={users.endDate}
                onChange={handleOnChange}
              
            />

        
            <label htmlFor="endTime">Start Time: </label>
            <input 
                Hours = "set Hour"
                Minutes = "set Minute"
                required 
                value={users.endTime}
                onChange={handleOnChange}
              
            />

            
            <label htmlFor="info">Information: </label>
            <input 
                type = "text"
                required 
                value={users.info}
                onChange={handleOnChange}
              
            />






            <button type="submit" onClick={handleSubmit}>
                Add Auction
            </button>
        </form> 
    </div>);
}
 
export default NewAuction;