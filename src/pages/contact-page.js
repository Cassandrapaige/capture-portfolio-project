import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ContactPage = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default ContactPage;
