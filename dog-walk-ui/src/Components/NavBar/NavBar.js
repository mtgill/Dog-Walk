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

const NavBar = () => {
  return (
    <>
    <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Should I Walk My Dog?</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <button className="btn btn-danger my-2 my-sm-0 ml-3" >Log Out</button>
            </Nav>
        </Navbar>
    </>
  );
};

export default NavBar;