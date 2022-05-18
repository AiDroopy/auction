import React, { useContext, useState } from 'react';
import Home from '../Pages/Home';

const Logout = () => {
   
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <Logout submitForm={submitForm} /> : <Home />}
    </div>
    
  )
}

export default Logout;