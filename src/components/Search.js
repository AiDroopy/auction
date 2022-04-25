import AuctionContext from "../context/AuctionContext"
import React, { useContext, useState } from "react";

const Search = () => {

    const { auctions } = useContext(AuctionContext);
    const [theSearch, setTheSearch] = useState('')

  return (
    <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={event => {setTheSearch(event.target.value)}}/>
        {auctions.filter((val)=>{
            if (theSearch == ''){
                return (<div>{val.productName}</div>)
                }
                else if(val.productName.toLowerCase().includes(theSearch.toLowerCase())){
                    return(<div>{val.productName}</div>)
                }
        }).map((val) => {
            return (<div>{val.productName}</div>)
        })}
    </div>
)}

export default Search
