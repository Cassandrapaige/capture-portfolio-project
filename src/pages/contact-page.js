import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, lineAnimation } from "../animations";

const ContactPage = () => {
  return (
    <StyledContactSection
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <StyledTitle>
        <StyledHidden>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
          <motion.div className='line' variants={lineAnimation} />
        </StyledHidden>
      </StyledTitle>
      <div>
        <StyledHidden>
          <StyledLink variants={titleAnimation}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StyledLink>
        </StyledHidden>
        <StyledHidden>
          <StyledLink variants={titleAnimation}>
            <StyledCircle />
            <h2>Send Us An Email</h2>
          </StyledLink>
        </StyledHidden>
        <StyledHidden>
          <StyledLink variants={titleAnimation}>
            <StyledCircle />
            <h2>Connect on Twitter</h2>
          </StyledLink>
        </StyledHidden>
      </div>
    </StyledContactSection>
  );
};

const StyledContactSection = styled(motion.section)`
  padding: 5rem 10rem;
  min-height: 90vh;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 1rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
`;

const StyledHidden = styled.div`
  overflow: hidden;
`;

const StyledLink = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 1rem;
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #23d997;
`;
export default ContactPage;
