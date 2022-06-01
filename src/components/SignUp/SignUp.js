import React, { useContext, useEffect, useState } from "react";
import validation from "../Login/Validation";
import AuctionContext from "../../context/AuctionContext";
import { Form, Container, Button } from "react-bootstrap";

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
    <Container className="signUpForm">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control
            type="username"
            name="username"
            value={newUser.username}
            onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}/>
      </Form.Group>
      
      <Button className="btn-primary" href="/" onClick={handleFormSubmit}>
        Create Account
      </Button>
    </Form>
  </Container>
  );
};

export default SignUp;
