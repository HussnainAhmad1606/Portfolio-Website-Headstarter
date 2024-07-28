"use client"
import React from "react";



function HeroSection() {

  
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(header.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="pic.jpg" />
            </div>
          </div>
          <h1 className="mb-5 text-3xl font-bold">Psycho in AI</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
