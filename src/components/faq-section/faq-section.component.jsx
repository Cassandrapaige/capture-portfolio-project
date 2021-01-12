import React from "react";

import { StyledFAQLayout } from "./faq-section.styles";

const FaqSection = () => {
  return (
    <StyledFAQLayout>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </p>
        </div>
        <div className='faq-line' />
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </p>
        </div>
        <div className='faq-line' />
      </div>
      <div className='question'>
        <h4>Payment Methods</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </p>
        </div>
        <div className='faq-line' />
      </div>
      <div className='question'>
        <h4>What services do you offer?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </p>
        </div>
        <div className='faq-line' />
      </div>
    </StyledFAQLayout>
  );
};

export default FaqSection;
