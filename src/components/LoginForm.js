import React, { useContext, useState } from 'react';
import Login from './Login';
import Profile from './Profile';

const LoginForm = () => {
   
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <Login submitForm={submitForm} /> : <Profile />}
    </div>
  )
}

export default LoginForm;