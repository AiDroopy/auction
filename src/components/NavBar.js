import React from 'react';
import AuthService from "../services/AuthService";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {

        const currentUser = AuthService.getCurrentUser();

        if(currentUser){
        return (
        <div>
        <Navbar id= "fade" bg="light" variant={"light"} expand="lg">
                <Container>
                        <Navbar.Brand href="/">Watches</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/newauction">Create Auction</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="/about">About</Nav.Link>
                        
                </Nav>
                
                </Navbar.Collapse>
                
                </Container>
                <Button className="logOut" variant="outline-dark" href="/" onClick={AuthService.logout}><a>Log out!</a></Button>
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
