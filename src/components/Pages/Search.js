import AuctionContext from "../../context/AuctionContext"
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {

    const { auctions, bids, renderHighBid } = useContext(AuctionContext);
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
            return (<div><Link to={`/auction/${auction.id}`}>
                <div>{auction.productName}</div>
                <div className="auctions" key={auction.id}> 
                <br></br>
                    Product name: {auction.productName}
                <br></br>
                    Description: {auction.productInfo}
                <br></br>
                    <img src={auction.productImgURL} alt="img" className="img"></img>
                <br></br>
                    Starting price: {auction.startPrice}
                    </div> </Link>   
                <br/>
                    {renderHighBid(bids, auction)}
    
        </div>
                )
        })}
    </div>
)}

export default Search
