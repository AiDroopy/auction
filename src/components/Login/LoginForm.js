import React, { useContext, useState } from 'react';
import Login from './Login';
import Home from '../Pages/Home'
import Profile from '../Pages/Profile';

const LoginForm = () => {
   
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <Login submitForm={submitForm} /> : <Home />}
    </div>
    
  )
}

export default LoginForm;