import React from "react";

import { Link } from "react-router-dom";

import { StyledNav } from "./navbar.styles";

const Navbar = () => {
  return (
    <StyledNav>
      <h1 id='logo'>
        <Link to='/'>Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>1. About Us</Link>
        </li>
        <li>
          <Link to='/services'>2. Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
