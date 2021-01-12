import styled from "styled-components";
import { StyledLayout } from "../../styles";

export const StyledServicesLayout = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
`;

export const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  flex-basis: 15rem;
  padding: 2rem 1rem 0rem 0;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      background: #23d997;
      color: #1b1b1b;
      padding: 1rem;
    }
  }
`;
