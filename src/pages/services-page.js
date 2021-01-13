import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// data
import { ServicesData as DATA } from "../servicesData";

// animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  fadeAnimation,
  lineAnimation,
} from "../animations";

// components
import TransitionAnimation from "../components/transition-animation/transition-animation.component";

// hooks
import { useScroll } from "../hooks/useScroll";

const ServicesPage = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServicesSection
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: "#fff" }}
    >
      <TransitionAnimation />
      {DATA.map(({ mainImg, title, id }) => (
        <StyledBlock>
          <motion.h2 variants={fadeAnimation}>{title}</motion.h2>
          <motion.div variants={lineAnimation} className='line' />
          <Link to={`/services/${id}`}>
            <StyledImage>
              <motion.img src={mainImg} alt={title} variants={photoAnimation} />
            </StyledImage>
          </Link>
        </StyledBlock>
      ))}
    </StyledServicesSection>
  );
};

const StyledServicesSection = styled(motion.section)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
    color: #191919;
  }
`;

const StyledImage = styled.div`
  overflow: hidden;

  img {
    width: 100%100vh;
    min-height: 70vh;
    object-fit: cover;
  }
`;

const StyledBlock = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;
export default ServicesPage;
