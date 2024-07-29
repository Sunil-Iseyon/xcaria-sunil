
// import React from 'react'
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
 import {IoHome} from 'react-icons/io5'
// import { Link } from 'lucide-react'
 import { MDXRemote } from 'next-mdx-remote'
 
 
 
const getPostContent = (slug:string)=>{
    const folder = 'posts/';
    const file= `${folder}${slug}.mdx`;
    const content = fs.readFileSync(file,'utf8');
    return content
 
}
 
const PostPage = (props:any) => {
 
 
        const slug = props.params.slug;
        const content = getPostContent(slug);
        // console.log(content)
 
  return (
    // <div className='text-white mt-32 ml-28'>
    //     <h1>{slug}</h1>
    //     <Markdown>{content}</Markdown>
   
   
   
    // </div>
    <>
 
{/* //             <Link href='/'>
//             <button className='mt-28 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950'>
//                 <IoHome/>
//                 </button>
//                 </Link> */}
//                 <div className='my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300'>
//                     <Markdown>
                         {content}
                       </Markdown>
//                 </div>
//     </>
  )
}
 
export default PostPage
 