import React, { useContext, useState } from 'react';
import SignUp from './SignUp';
import SignupFormSuccess from './SignupFormSuccess';


const SignUpForm = () => {
   
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
        {!formIsSubmitted ? <SignUp submitForm={submitForm} /> : <SignupFormSuccess />}
    </div>
  )
}

export default SignUpForm