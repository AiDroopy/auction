import React, { useContext, useEffect, useState } from "react";
import validation from "./Validation";
import AuctionContext from "../context/AuctionContext";
import { Link } from "react-router-dom";
import Home from "./Home";

const LogOut = () => {
    const { user, createNew, isLoading, authUser} = useContext (AuctionContext);  // get some stuff from AuctionContext
  
    //useState for values, using object data types
    const [newUser, setNewUser] = useState(createNew(user));
    const [errors, setErrors] = useState({});
    const [dataCorrect, setDataCorrect] = useState(true);
  
  
    // event handler to prevent update site when click on Sign up!
    // setErrors -->
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setErrors(validation(newUser)); 
      setDataCorrect(false);
      // console.log(newUser);  // DEBUG
      authUser(newUser);
  
      // Check if user is correct... low prio!
    };
  
    // if errors is empty and data is correted change propsvalue to true 
    useEffect(() =>{
      if (Object.keys(errors).length === 0 && !dataCorrect){
        <Home/>
      };
    });
    
    
    return ( 
    <div>
        <button 
        className="submit" 
        onClick={handleFormSubmit}> 
        Logout</button>

    </div> );
}
 
export default LogOut;