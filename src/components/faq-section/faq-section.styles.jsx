import styled from "styled-components";

import { StyledLayout } from "../../styles";

export const StyledFAQLayout = styled(StyledLayout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100% auto;
  }

  .question {
    padding: 1rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 0.5rem 0;
    }
  }
`;
