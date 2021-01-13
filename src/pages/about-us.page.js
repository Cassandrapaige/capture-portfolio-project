import React from "react";

//components
import AboutSection from "../components/about-section/about-section.component";
import FaqSection from "../components/faq-section/faq-section.component";
import ServicesSection from "../components/services-section/services-section.component";

// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const AbousUsPage = () => {
  return (
    <motion.main
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.main>
  );
};

export default AbousUsPage;
