import React from "react";

const AboutSection = () => {
  return (
    <section>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className='hide'>
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography ideas you have. We have many
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className='image'>
        <img
          src='https://images.unsplash.com/photo-1603351679592-f11af144e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGd1eSUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
          alt='guy holding a camera'
        />
      </div>
    </section>
  );
};

export default AboutSection;
