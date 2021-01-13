import React from "react";
import { motion } from "framer-motion";

import { StyledSVG } from "./wave-animation.styles";

const WaveAnimation = () => {
  return (
    <StyledSVG
      viewBox='0 0 1441 308'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{
          pathLength: 0,
          pathOffset: 1,
        }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: {
            duration: 1,
            delay: 1.2,
          },
        }}
        d='M3 27.5C72.1667 147.5 185.6 306.2 480 305C848 303.5 930.5 -120 1439.5 39'
        stroke='#D96ED4'
        strokeOpacity='0.5'
        strokeWidth='5'
      />
    </StyledSVG>
  );
};

export default WaveAnimation;
