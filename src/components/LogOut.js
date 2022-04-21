import { Link } from "react-router-dom";
import React from 'react';

const LogOut = () => {

    return ( 

        <Link to="/">

            {sessionStorage.clear()}

        Log Out

        </Link>
        );
}
 
export default LogOut;