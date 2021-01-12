import React from "react";

//components
import AboutSection from "../components/about-section/about-section.component";
import FaqSection from "../components/faq-section/faq-section.component";
import ServicesSection from "../components/services-section/services-section.component";

const AbousUsPage = () => {
  return (
    <main>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </main>
  );
};

export default AbousUsPage;
