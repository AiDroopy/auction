import { useState } from "react";

const Auction = () => {
    return (
        <div className="Content">
            <div className= "information">
                <div className="box-1">
                    <div className="item-bid">
                        <div className="high-bid">
                            Högst bud
                        </div>
                        <div className="bid">
                            Aktuell bud
                        </div>
                    </div>
                </div>    
            </div>

                <div className="info">
                    <div className="date-end">
                        Avslutas:
                    </div>
                    <div className="start-price">
                        Startpris:
                    </div>
                </div>

                <div className="form">
                    <form className="myform">
                        <label>
                            Lägg till maxbud:
                        </label>
                        <div className="bid-input">
                            <input
                            className="input"
                            type="Bud"
                            />
                        </div>
                        <div className="bjud">
                            <button>Bjud</button>
                        </div>
                    </form>
            </div>

            <div className="time-left">
                Bid-end: 
                <span id="time">05:00</span> minutes!
            </div>

            <div className="about">
                <div className="item">
                    Item
                </div>
                <div>
                    Data
                </div>
            </div>

        </div>
    )
}

export default Auction;