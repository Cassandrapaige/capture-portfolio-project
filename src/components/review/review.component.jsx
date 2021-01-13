import React from "react";

import { StyledReview } from "./review.styles";

const Review = ({ title, description }) => {
  return (
    <StyledReview>
      <h3>{title}</h3>
      <div className='line' />
      <p>{description}</p>
    </StyledReview>
  );
};

export default Review;
