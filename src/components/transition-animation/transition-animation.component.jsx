import React from "react";

import {
  StyledFrame1,
  StyledFrame2,
  StyledFrame3,
  StyledFrame4,
} from "./transition-animation.styles";

// animations
import { motion } from "framer-motion";
import {
  transitionAnimation,
  transitionContainerAnimation,
} from "../../animations";

const TransitionAnimation = () => {
  return (
    <motion.div variants={transitionContainerAnimation}>
      <StyledFrame1 variants={transitionAnimation} />
      <StyledFrame2 variants={transitionAnimation} />
      <StyledFrame3 variants={transitionAnimation} />
      <StyledFrame4 variants={transitionAnimation} />
    </motion.div>
  );
};

export default TransitionAnimation;
