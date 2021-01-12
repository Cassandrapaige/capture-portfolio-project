import styled from "styled-components";

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      padding-left: 10rem;
      position: relative;
    }
  }
`;
