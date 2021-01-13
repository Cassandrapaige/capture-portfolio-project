import React from "react";

// animations
import { motion } from "framer-motion";
import {
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from "../../animations";

//styles
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHiddenElement,
} from "../../styles";

// components
import WaveAnimation from "../wave-animation/wave-animation.component";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <motion.div className='title'>
          <StyledHiddenElement>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHiddenElement>

          <StyledHiddenElement>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHiddenElement>

          <StyledHiddenElement>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </StyledHiddenElement>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography ideas you have. We have many
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src='https://images.unsplash.com/photo-1603351679592-f11af144e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGd1eSUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
          alt='guy holding a camera'
        />
      </StyledImage>
      <WaveAnimation />
    </StyledLayout>
  );
};

export default AboutSection;
