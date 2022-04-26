import { Link } from "react-router-dom";
import React from 'react';
import AuthService from "../services/AuthService";

const LogOut = () => {

    return ( 

        <Link to="/">

            {AuthService.logout()}

        Log Out

        </Link>
        );
}
 
export default LogOut;