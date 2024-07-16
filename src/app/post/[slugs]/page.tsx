
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import {IoHome} from 'react-icons/io5'
// import { Link } from 'lucide-react'
// import { MDXRemote } from 'next-mdx-remote'


// const postsDirectory = path.join(process.cwd(),'posts')
// export async function generateStaticParams() {
//     const filesnames = fs.readdirSync(postsDirectory);
//     return filesnames.map((filename)=>({
//         slug: filename.replace(/\.mdx$/,'')
//     }))
    
// }
// export default async function page({params}) {
//     const {slug} = params;
//     const fullPath = path.join(postsDirectory,`${slug}.mdx`);
//     const fileContents = fs.readFileSync(fullPath,'utf8')
//     const {data,content} = matter(fileContents);
//     return(<>

//             <Link href='/'>
//             <button className='mt-20 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950'>
//                 <IoHome/>
//                 </button>
//                 </Link>
//                 <div className='my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300'>
//                     <MDXRemote source = {content}/>
//                 </div>
//     </>)
 
    
// }

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { IoHome } from 'react-icons/io5';
// import Link from 'next/link';
// import { MDXRemote } from 'next-mdx-remote/rsc';

// // Define posts directory
// const postsDirectory = path.join(process.cwd(), 'posts');

// // Static paths generation
// export async function getStaticPaths() {
//   const filenames = fs.readdirSync(postsDirectory);
//   const paths = filenames.map((filename) => ({
//     params: { slug: filename.replace(/\.mdx$/, '') },
//   }));
//   return { paths, fallback: false };
// }




// // Static props generation
// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   return {
//     props: {
//       content,
//     },
//   };
// }

// // React component
// export default function Page({ content }) {
//   return (
//     <>
//       <Link href='/'>
//         <button className='mt-20 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950'>
//           <IoHome />
//         </button>
//       </Link>
//       <div className='my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300'>
//         <MDXRemote source={content} />
//       </div>
//     </>
//   );
// }


import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IoHome } from 'react-icons/io5';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

// Define posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

// Type for `params`
interface Params extends ParsedUrlQuery {
  slug: string;
}

// Static paths generation
export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));
  return { paths, fallback: false };
};

// Static props generation
export const getStaticProps: GetStaticProps<{ content: string }> = async ({ params }) => {
  // Type assertion for params
  if (!params || typeof params.slug !== 'string') {
    return { notFound: true }; // Handle unexpected or missing params
  }

  const { slug } = params as Params;
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      content,
    },
  };
};

// React component
interface PageProps {
  content: string;
}

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <>
      <Link href='/'>
        <button className='mt-20 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950'>
          <IoHome />
        </button>
      </Link>
      <div className='my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300'>
        <MDXRemote source={content} />
      </div>
    </>
  );
};

export default Page;
