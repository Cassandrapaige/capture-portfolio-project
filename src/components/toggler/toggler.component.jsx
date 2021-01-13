import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggler = ({ faq, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className='question'
      onClick={() => setToggle(!toggle)}
      style={{ cursor: "pointer" }}
    >
      <motion.h4 layout>{faq}</motion.h4>
      {toggle && children}
      <div className='faq-line' />
    </motion.div>
  );
};

export default Toggler;
