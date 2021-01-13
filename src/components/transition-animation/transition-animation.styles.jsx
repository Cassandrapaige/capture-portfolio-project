import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

export const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

export const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;
