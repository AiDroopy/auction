import React, { useContext, useEffect, useState } from "react";
import validation from "./Validation";
import AuctionContext from "../context/AuctionContext";

const SignUp = ({submitForm}) => {

  const { user, createNew, isLoading, addUser} = useContext (AuctionContext);  // get some stuff from AuctionContext
  const [newUser, setNewUser] = useState(createNew(user)); // Getters & setters
  const  [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);


  /*
  Setting values for all instans fields, updates values. 
  Function will update state all { key: value } in newUser
  */
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
    // console.log(newUser);  // DEBUG
    addUser(newUser);
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
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
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
