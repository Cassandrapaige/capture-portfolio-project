import styled from "styled-components";

export const StyledLayout = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHiddenElement = styled.div`
  overflow: hidden;
`;
