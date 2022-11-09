import React from 'react';
import image1 from '../../../../images/dentist1.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen my-5 rounded-lg" style={{ backgroundImage: `url(${image1})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Change smile with Dentist</h1>
            <p className="mb-5">Teeth are an incredibly strong and important part of the human body. Losing a tooth can be a traumatic experience but the good news is that there are many different ways to replace your natural teeth. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;