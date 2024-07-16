"use client"
// import React from 'react'
// import {PROJECTS} from '../../src/app/(routes)/blog/constants/index'
// import Image from 'next/image'

// const Projects = () => {
//   return (
//     <div>
//         <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200 '>
//             PROJECTS
//         </h2>
//         <div className=' flex flex-wrap items-center justify-center gap-2 '>
//             {PROJECTS.map((project,index)=>(
//                 <a href={project.url} key={index} target='_blank'>
//                     <Image src={project.image}
//                     alt={project.name}
//                     width={300}
//                     className='rounded-3xl'/>
//                 </a>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Projects


// import React from 'react';
// import { PROJECTS } from '../../app/(routes)/blog/constants';
// import Image from 'next/image';
// import projectcss from './Project.module.css'

// import { Card } from '../card';

// const Projects = () => {
   

//   function LightMove(e:MouseEvent)
//   {
//     const target = e.currentTarget as HTMLElement
  
//     let x = e.pageX - target.offsetLeft;

//   }


//   return (
//    <>
//       <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200 mt-10'>
//         PROJECTS
//       </h2>
//       <div className={` flex flex-wrap items-center justify-center gap-4 mt-10`}>
//         {PROJECTS.map((project, index) => (
//           <a
//             href={project.url}
//             key={index}
//             target='_blank'
//             rel='noopener noreferrer'
//             className={`${projectcss.cards} rounded-lg overflow-hidden shadow-lg w-72 md:w-80 lg:w-96`}
//           >
//          <div className={projectcss.container}>
//               <div className={projectcss.card} onMouseMove={(e)=>{LightMove(e)}}></div>
             


//          </div>
//           </a>
//         ))}
//       </div>
//       </>
    
//   );
// };

// export default Projects;
import React from 'react';
import { PROJECTS } from '../../app/(routes)/blog/constants';
import Image from 'next/image';
import projectcss from './Project.module.css';
import { Card } from '../card';

const Projects: React.FC = () => {

  function LightMove(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget as HTMLElement;
    
    let y = e.pageY - target.offsetTop;
    let x = e.pageX - target.offsetLeft;

   
    target.style.setProperty('--y',y + 'px');
    target.style.setProperty('--x',x + 'px');


   
  }

  return (
    <>
      <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200 mt-10'>
        PROJECTS
      </h2>
      <div className={projectcss.cardsSection}>
        {PROJECTS.map((project, index) => (
          <a
            href={project.url}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            
          >
            <div className={projectcss.container}>
              <div className={projectcss.card} onMouseMove={(e) => LightMove(e)}>
              <Image src={project.image}
                    alt={project.name}
                    width={100}
                    height={100}
                    className={projectcss.images}/>
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus pariatur rem.</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;

