import React, { useContext, useState } from 'react'
import AuctionContext from '../../context/AuctionContext';


const DeliveryOptions = () => {

    const {destinations} = useContext( AuctionContext )

    return (
        <div className="destination-List"> 
        {destinations.map((destination) => (<div className="destination" key={destination.id}> 
        <br></br>
            Product name: {destination.user}
        <br></br>
        </div>))} </div>)
 
}

export default DeliveryOptions;