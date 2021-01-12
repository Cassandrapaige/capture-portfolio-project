import React from "react";

const ServicesSection = () => {
  return (
    <section className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <h3>Quality</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img
          src='https://images.unsplash.com/photo-1457608135803-4827addc43e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80'
          alt='camera'
        />
      </div>
    </section>
  );
};

export default ServicesSection;
