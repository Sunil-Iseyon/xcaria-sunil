// 'use client'
// import { MDXRemote } from "next-mdx-remote/rsc";
// import Particle from './particleLog';
import AnimatedTextWord from "./animatedText";
// import Particles from "../../../components/particles";
import styles from "./page.module.css";
import { data } from "./data";
import Image from "next/image";
// import { motion } from "framer-motion";

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  // return <MDXRemote source={markdown} />
  // const fadeInUpAnimation = {
  //   hidden: {
  //     opacity: 0,
  //     y: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     delay: .8,
  //     y: -80,
  //     transition: {
  //       staggerChildren: .5,
  //       duration: .8,
  
  //     },
  //   },
  // };
  return (
    <>
      <div className="flex items-center mt-32 justify-center w-screen ">
      {/* <Particle id="part"/> */}
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      <div className="text-center">
          <AnimatedTextWord text1="An AI tool to make your work smoother" />
        </div>

      </div>
      <div className="h-screen w-screen flex flex-wrap gap-7 items-center justify-center mt-20 text-white text-center ">
        {data.map((i) => (
          <div
          // initial='hidden'
          // whileInView='show'
          // viewport={{ once: true }}
          // variants={fadeInUpAnimation}
          className={`${styles.sect} space-y-4`}>
            {/* image  */}
            <div className="flex justify-center items-center ">
              <div className='flex justify-center items-center bg-gradient-to-br from-cyan-500 to-green-400 h-16 w-16 rounded-xl' >
                <Image  src={i.img} alt="Image is getting loaded" width={40} height={40}/>
              </div>
            </div>
            {/* heading  */}
            <div>
              <h3 className=" text-xl">{i.heading}</h3>
            </div>
            {/* desc  */}
            <div className={styles.descp}>
              <p className="text-xs">{i.descp}</p>

              {/* button  */}
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ff77_0%,#04f9d0_50%,#000000_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View More
              </span> </button> 
            </div>
          </div>
        ))}
      </div>
      {/* <h3>{data[0].heading}</h3>
              <p>{data[0].descp}</p> */}

      {/* <div className={`${styles.insideBox}`}>
            <div>
              <h3>{data[1].heading}</h3>
              <p>{data[1].descp}</p>
            </div>
          </div> */}

      {/* <section className={styles.sect}>
          <div>
            <h3>{data[2].heading}</h3>
            <p>{data[2].descp}</p>
          </div>
        </section> */}

      {/* <nav className="w-[30%] h-[500px] space-y-5">
          <div className={`${styles.insideBox}`}>
            <div>
              <h3>{data[3].heading}</h3>
              <p>{data[3].descp}</p>
            </div>
          </div>
          <div className={`${styles.insideBox} ${styles.iB4}`}>
            <div>
              <h3>{data[4].heading}</h3>
              <p>{data[4].descp}</p>
            </div>
          </div>
        </nav> */}
    </>
  );
}
