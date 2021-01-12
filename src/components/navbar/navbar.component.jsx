import React from "react";

import { NavLink } from "react-router-dom";

import { StyledNav } from "./navbar.styles";

const Navbar = () => {
  return (
    <StyledNav>
      <h1 id='logo'>
        <NavLink to='/'>Capture</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/'>1. About Us</NavLink>
        </li>
        <li>
          <NavLink to='/services'>2. Our Work</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>3. Contact Us</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
