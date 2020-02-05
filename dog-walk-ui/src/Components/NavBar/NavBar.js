import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

const NavBar = () => {
  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }
  return (
    <>
    <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Should I Walk My Dog?</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" onClick={logMeOut}>Log Out</button>
            </Nav>
        </Navbar>
    </>
  );
};

export default NavBar;