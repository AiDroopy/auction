import AuctionContext from "../../context/AuctionContext"
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {

    const { auctions } = useContext(AuctionContext);
    const [theSearch, setTheSearch] = useState('')

  return (
    <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={event => {setTheSearch(event.target.value)}}/>
        {auctions.filter((auction)=>{
            if (theSearch === ''){
                return (<div>{auction.productName}</div>)
                }
                else if(auction.productName.toLowerCase().includes(theSearch.toLowerCase())){
                    return(<div>{auction.productName}</div>)
                }
        }).map((auction) => {
            return (<Link to={`/auction/${auction.id}`}><div>{auction.productName}</div></Link>)
        })}
    </div>
)}

export default Search
