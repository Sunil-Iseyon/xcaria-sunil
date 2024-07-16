import React from 'react'

import Navbar from '@/src/components/Navbar/Navbar'
import HeroSection from '@/src/components/HeroSection/HeroSection'

const hero = () => {
  return (
    <>
   <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
    <HeroSection/>
   </main>
    </>
  )
}

export default hero