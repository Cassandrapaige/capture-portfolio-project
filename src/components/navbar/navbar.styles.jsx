import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  z-index: 300;
  position: sticky;
  top: 0;

  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;

    li {
      padding-left: 10rem;
      position: relative;
    }

    a {
      position: relative;

      &:before {
        content: "";
        height: 0.3rem;
        background: #23d997;
        width: 0%;
        position: absolute;
        bottom: -80%;
        left: 0%;
        transition: all 0.5s ease;
      }

      &.active:before {
        width: 50%;
      }
    }
  }
`;
