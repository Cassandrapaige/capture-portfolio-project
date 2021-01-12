import React from "react";

import {
  StyledAboutContainer,
  StyledDescription,
  StyledImage,
  StyledHiddenElement,
} from "./about-section.styles";

const AboutSection = () => {
  return (
    <StyledAboutContainer>
      <StyledDescription>
        <div className='title'>
          <StyledHiddenElement>
            <h2>We work to make</h2>
          </StyledHiddenElement>
          <StyledHiddenElement>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHiddenElement>
          <StyledHiddenElement>
            <h2>come true.</h2>
          </StyledHiddenElement>
        </div>
        <p>
          Contact us for any photography ideas you have. We have many
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img
          src='https://images.unsplash.com/photo-1603351679592-f11af144e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGd1eSUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
          alt='guy holding a camera'
        />
      </StyledImage>
    </StyledAboutContainer>
  );
};

export default AboutSection;
