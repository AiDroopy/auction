import React, { useContext, useState } from 'react';
import Login from './Login';
import SignupFormSuccess from './SignupFormSuccess';


const LoginForm = () => {
   
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <Login submitForm={submitForm} /> : <SignupFormSuccess />}
    </div>
  )
}

export default LoginForm