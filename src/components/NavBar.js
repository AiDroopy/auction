import { Link } from "react-router-dom";
import React from 'react';
import AuthService from "../services/AuthService";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {

        const currentUser = AuthService.getCurrentUser();

        if(currentUser){
        return (
        <div>
        <Navbar id= "fade" bg="dark" variant={"dark"} expand="lg">
                <Container>
                        <Navbar.Brand href="/">Watches</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/search">Search</NavDropdown.Item>
                        <NavDropdown.Item href="/newauction">Create Auction</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
    
                </Container>
        </Navbar>
        </div>

  )
} else{
        return (
                <Navbar id="fade" bg="dark" variant={"dark"} expand="lg">
                        <Container>
                                <Navbar.Brand href="/">Watches</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="menu" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/signupform">Sign up!</NavDropdown.Item>
                                <NavDropdown.Item href="/search">Search</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
            
                        </Container>
                </Navbar>

)}
} 

export default NavBar;
