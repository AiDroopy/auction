import { Link } from "react-router-dom";
import React from 'react';
import AuthService from "../services/AuthService";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const NavBar = () => {
const currentUser = AuthService.getCurrentUser();

if (currentUser) {
return (

        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Auction</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/auctionlist">Auctions</Nav.Link>
          <Nav.Link href="/signupform">Sign up</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/newauction">Create Auction</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

  ) } else {

        return (
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Auction</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/auctionlist">Auctions</Nav.Link>
                  <Nav.Link href="/signupform">Sign up</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  <Nav.Link href="/newauction">Create Auction</Nav.Link>
                </Nav>
                </Container>
              </Navbar>
        )
  }

}

export default NavBar;
