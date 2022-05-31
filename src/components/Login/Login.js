import React, { useContext, useEffect, useState } from "react";
import validation from "./Validation";
import AuctionContext from "../../context/AuctionContext";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = ({submitForm}) => {

  const { user, createNew, authUser } = useContext (AuctionContext);  // get some stuff from AuctionContext
  
  //useState for values, using object data types
  const [newUser, setNewUser] = useState(createNew(user));
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const navigate = useNavigate();

  // setting values for all instans fields.
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
    setErrors(validation(newUser));
    setDataIsCorrect(true);
    authUser(newUser);
    navigate("/profile")
    window.location.reload()
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
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" data-cy="login-form">
          
          <div className="email">
            <label className="label">Username: </label>
            <input
              className="input"
              type="email"
              data-cy="username"
              name="username"
              value={newUser.username}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="password">
            <label className="label">Password: </label>
            <input
              className="input"
              type="password"
              data-cy="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>

            <button className="submit" data-cy="submit" onClick={handleFormSubmit}>
              Login
            </button> 
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
