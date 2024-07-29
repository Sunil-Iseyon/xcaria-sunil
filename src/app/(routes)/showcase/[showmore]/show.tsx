'use client'

import { useState } from "react";
import { datas } from "../datas";
import Image from "next/image";
import styles from '../../showcase/page.module.css'

export default function ViewMorePage({id} :any) {

    const [question,setQuestion] = useState('');
    const [toggle,setToggle] = useState(false);

  return (
    <div className="my-28 mx-4 md:mx-28 space-y-8 md:space-y-20 sm:px-8 md:px-0 ">
      {/* my-24 mt-32 px-28 space-y-20 */}

      {/* heading  */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="rounded-full bg-white h-16 w-16 flex justify-center items-center overflow-hidden">
          <Image src={datas[id].img} alt="Image is getting loaded" width={64} height={64} className="w-full h-full object-cover"/>
        </div>
        <h6 className="text-white uppercase tracking-wider font-mono text-sm md:text-base">
          Hii I am an expert in {datas[id].heading}<br />You Can ask anything
        </h6>
      </div>

      {/* The answers will be displayed here  */}
      <div className={toggle?`block`:`hidden`}>
      <h6 className="text-white text-sm md:text-base">Question: {question}</h6>
        {/* <div>
            
        </div> */}
      </div>

      {/* Input Box to ask question */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <input
          type="text"
          value={question}
          placeholder="Ask anything"
          className="w-full h-10 bg-transparent p-2 border border-slate-600 rounded-xl text-sm md:text-base"
          onChange={(e)=>{setQuestion(e.target.value)}}
        />
        <button 
          className="bg-white text-black font-semibold w-full h-9 md:w-24 rounded-xl flex justify-center items-center gap-2 text-sm md:text-base"
          onClick={()=>{setToggle(true)}}
          >
          <div className="w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full h-full">
              <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
            </svg>
          </div>
          Ask
        </button>
      </div>

      {/* Description  */}
      <div className="text-xs text-slate-500 border border-slate-500 p-3 rounded-lg text-justify">
        <p>{datas[id].more}</p>
      </div>
    </div>
  ); 
}
