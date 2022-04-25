import CountdownTimer from './CountdownTimer/CountdownTimer.js';
import React from 'react';


const Card = ({image, title, id, latestBid, startPrice}) => {
    return (
    <div className="cards">
        <img src={image}/>
            <div className="cards__item">
                <h2> { title}</h2>
                <p>id.nr:{id}</p>
                <p>Aktuellt bud:{latestBid}</p>
                <p>Utropspris:{startPrice}</p>
                <CountdownTimer
                countdownTimestampMs={Date.now() + 259200000}/>
            </div>
    </div>)
};
 
export default Card;