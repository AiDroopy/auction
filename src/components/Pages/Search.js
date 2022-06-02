import AuctionContext from "../../context/AuctionContext"
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {

    const { auctions } = useContext(AuctionContext);
    const [theSearch, setTheSearch] = useState('')

  return (
      
    <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={event => {setTheSearch(event.target.value)}}/>
        {auctions.filter((auction)=>{
            if (theSearch === '') {
                }
                else if(auction.productName.toLowerCase().includes(theSearch.toLowerCase())){
                    return(<div>{auction.productName}</div>)
                }
        }).map((auction) => {
            return (
                <div>
                    <Link to={`/auction/${auction.id}`}>
                        <div className="searchproduct">{auction.productName} <img className="searchimg" src={auction.productImgURL}></img></div>
                        
                    </Link>   
                </div>
                )
        })}
    </div>
)}

export default Search;
