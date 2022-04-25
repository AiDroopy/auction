import AuctionContext from "../context/AuctionContext"
import React, { useContext, useState } from "react";

const Users = () => {

    const { users } = useContext(AuctionContext);

    return (

        <div className="users"> 
        {users.map((user) => (<div className="users"> 
        <br></br>
        Username: {user.username}
        <br></br>
    
        </div>))} 
         </div>

      );
    }

export default Users