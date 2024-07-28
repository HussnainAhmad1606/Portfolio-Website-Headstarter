import Image from 'next/image'
import React from 'react';
import Skillset from './Skillset';

function AboutMe() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row w-[80%]">
    <Image className='mx-10' alt='Hussnain Profile Pic' width={200} height={500} src="/pic.jpg" />
    <div>
      <h1 className="text-5xl font-bold">Hi, I am <span className='text-primary'>Hussnain</span></h1>
      <p className="py-6">Playing with AI</p>
      <Skillset/>
      <a href='https://linkedin.com/in/Hussnain-Ahmad/' target='_blank' className="my-10 btn btn-primary">Have a project idea? Let's Chat</a>
    </div>
  </div>
</div>
  )
}

export default AboutMe