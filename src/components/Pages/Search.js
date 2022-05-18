import AuctionContext from "../../context/AuctionContext"
import React, { useContext, useState } from "react";

const Search = () => {

    const { auctions } = useContext(AuctionContext);
    const [theSearch, setTheSearch] = useState("");
    
    

  return (
    <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={event => {setTheSearch(event.target.value)}}/>
        {auctions.filter((val)=>{
            if (theSearch == ''){
                return val
            }
                else if(val.productName.toLowerCase().includes(theSearch.toLowerCase())){
                    return val.productName
                }
            }).map((val) => {
                return (
                    <div class="auctions"> {val.productName}
                    </div>
                );
            })}
        </div>
    )}

export default Search
