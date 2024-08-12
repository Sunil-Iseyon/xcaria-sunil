"use client";
import React from 'react'
import './HeroSection.css'
import { Spotlight } from '../ui/Spotlight';

const HeroSection = () => {
  return (
    <div className='text-white h-screen md:[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden  mx-auto py-10 md:py-0'>
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
      />
        <div className='p-4 relative z-10 w-full text-center hero-section'>

              <h1 className='hero-logo'>xCARIA</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus culpa nobis in at adipisci quidem.</p>
              <div className='search-section'>
                <input type="text" placeholder='Ask me anything about xCaria'/>
                <button>Proceed</button>
              </div>
        </div>


    </div>
  )
}

export default HeroSection