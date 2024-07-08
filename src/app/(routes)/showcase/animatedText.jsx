"use client";
import React from "react";
import { motion } from "framer-motion";
// import {createContext} from 'react';

const AnimatedTextWord = ({text1}) =>{
  // const words = text.split(" ");
  const letters1 = Array.from(text1);
  // const letters2 = Array.from(text2);

  // const container = {
  //   hidden: { opacity: 0 },
  //   visible: (i = 0.3) => ({
  //     opacity: 1,
  //     transition: { staggerChildren: 0.2, delayChildren: 0.4 * i },
  //   }),
  // };
  const container2 = {
    hidden: { opacity: 0 },
    visible: (i = 1.85) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1 * i },
    }),
  };

  // const child = {
  //   visible: {
  //     opacity: 1,
  //     x:0,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: -20,
  //     y: 10,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  // };

  // const child2 = {
  //   visible: {
  //     opacity: 1,
  //     x:0,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: -20,
  //     y: 10,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  // };
  const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            y: { type: "spring", stiffness: 60 },
            staggerChildren: 0.3,
            opacity: { duration: 3 },
            ease: "easeTn",
            duration: .8,
        },
    },
};


  return(
    <motion.div
    initial="hidden"
    animate="show"
    variants={fadeInUpAnimation}
    // style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      // variants={container}
      // initial="hidden"
      // animate="visible"
    
    >
       {letters1.map((letter, index) => (
        <motion.span variants={fadeInUpAnimation} key={index}
        className=' z-10 text-4xl sm:text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700 font-bold leading-tight tracking-tight'>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
      {/* {letters2.map((letter, index) => (
        <motion.span variants={fadeInUpAnimation} key={index}
        className='z-10 text-4xl sm:text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700 font-bold leading-tight tracking-tight'>
          {letter === " " ? " " : letter}
        </motion.span>
      ))} */}
      <motion.div variants={fadeInUpAnimation}
        className='text-white w-[750px] my-5 mx-auto'>
         <h3 > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus placeat quos eum 
          laudantium doloremque, nam praesentium aspernatur ipsum</h3>
        </motion.div>
      
    </motion.div>
    
)
};

export default AnimatedTextWord;
