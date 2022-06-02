import React, { useContext, useEffect, useState } from "react";
import validation from "../Login/Validation";
import AuctionContext from "../../context/AuctionContext";

const SignUp = ({submitForm}) => {

  const { user, createNew, createUser} = useContext (AuctionContext);  // get some stuff from AuctionContext
  
  //useState for values, using object data types
  const [newUser, setNewUser] = useState(createNew(user));
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  // setting values for all instans fields, updates values. 
  const handleChange = (event) => {
        setNewUser({
          ...newUser,
          [event.target.name]: event.target.value,
          

      })
  }
 
  // event handler to prevent update site when click on Sign up!
  // setErrors -->
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(newUser)); // Pass in validation 
    setDataIsCorrect(true);
    createUser(newUser);
    
  };
         

  // if errors is empty and data is correted change propsvalue to true 
  useEffect(() =>{
    if (Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    };
  });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create account</h2>
        </div>
        <form className="form-wrapper">
          
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              data-cy="email"
              type="email"
              name="username"
              value={newUser.username}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              data-cy="password"
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
