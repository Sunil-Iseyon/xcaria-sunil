'use client'
import React from 'react'
import Image from 'next/image'
import Profilepic from '../../public/patrickBravo.jpeg'
// import { getAllPosts } from '@/src/app/lib/mdx'
import blogstyle from './blog.module.css'
const BlogOverview = () => {
  // const posts =await getAllPosts();

  return (
    <div className=''>
        {/* <div className='flex flex-col items-center justify-center gap-4'>
           <Image src={Profilepic}
           width={110} 
           height={110}
           alt='profilepic'
           className='rounded-full border-2 border-slate-400 mt-10'/>
        </div> */}
        {/* <p className={blogstyle.bloglogo}>
            EXPLORE  BLOGS 
        </p> */}

        {/* <h2 className={blogstyle.bloglogo}><span>EXPLORE</span><span> BLOGS</span></h2> */}
        <h2 className={blogstyle.bloglogo}><span>E</span><span>X</span><span>P</span><span>L</span><span>O</span><span>R</span><span>E</span><span> </span><span>B</span><span>L</span><span>O</span><span>G</span><span>S</span></h2>
       
    </div>
  )
}

export default BlogOverview