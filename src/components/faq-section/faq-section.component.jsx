import React from "react";
import Toggler from "../toggler/toggler.component";

import { StyledFAQLayout } from "./faq-section.styles";

import { AnimateSharedLayout } from "framer-motion";
//animations
import { scrollReveal } from "../../animations";

// hooks
import { useScroll } from "../../hooks/useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFAQLayout
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggler faq='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
              quo.
            </p>
          </div>
        </Toggler>
        <Toggler faq='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
              quo.
            </p>
          </div>
        </Toggler>
        <Toggler faq='Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
              quo.
            </p>
          </div>
        </Toggler>
        <Toggler faq='What services do you offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
              quo.
            </p>
          </div>
        </Toggler>
      </AnimateSharedLayout>
    </StyledFAQLayout>
  );
};

export default FaqSection;
