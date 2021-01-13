import React, { useState, useEffect } from "react";

//styles
import { StyledDescription, StyledImage } from "../../styles";

import {
  StyledServicesLayout,
  StyledCards,
  StyledCard,
} from "./services-section.styles";

//animations
import { scrollReveal } from "../../animations";

// hooks
import { useScroll } from "../../hooks/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServicesLayout
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className='icon'>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>

          <StyledCard>
            <div className='icon'>
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>

          <StyledCard>
            <div className='icon'>
              <h3>Quality</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>

          <StyledCard>
            <div className='icon'>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img
          src='https://images.unsplash.com/photo-1457608135803-4827addc43e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80'
          alt='camera'
        />
      </StyledImage>
    </StyledServicesLayout>
  );
};

export default ServicesSection;
