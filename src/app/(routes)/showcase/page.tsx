// 'use client'
// import { MDXRemote } from "next-mdx-remote/rsc";
// import Particle from './particleLog';
import AnimatedTextWord from "./animatedText";
// import Particles from "../../../components/particles";
import styles from "./page.module.css";
import { datas } from "./datas";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

// import { motion } from "framer-motion";

export default async function RemoteMdxPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return redirect("/login");
  }

  const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/auth");
	}

	// const { data: user } = await supabase.from("user").select("*").single();
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
  //     delay: .2,
  //     y: -80,
  //     transition: {
  //       staggerChildren: .5,
  //       duration: .8,

  //     },
  //   },
  // };



  
  return (
    <>
      <div className="flex items-center mt-36 justify-center  ">
        {/* <Particle id="part"/> */}
        {/* <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/> */}
          <AnimatedTextWord text1="An AI tool to make your work smoother" />
          
      </div>

      {/* cards  */}
      <div className="flex flex-wrap gap-7 items-center justify-center mt-12 text-white text-center ">
      {datas.map((i,index) => (
        <div
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true }}
          // variants={fadeInUpAnimation}
          className={`${styles.container} space-y-2`}
        >
          {/* image  */}
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center bg-gradient-to-br from-cyan-500 to-green-400 h-16 w-16 rounded-xl">
              <Image src={i.img} alt="Image is getting loaded" width={40} height={40}/>
            </div>
          </div>

          {/* heading  */}
          <div><h3 className=" text-xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">{i.heading}</h3> </div>
          
          {/* desc  */}
          <div className={styles.descp}>
            <p className="text-xs">{i.descp}</p>

            {/* button  */}
            <Link href={`showcase/${index}`} className={`${styles.view} relative inline-flex h-10 overflow-hidden rounded-full p-[1px] `}>
              <span className={`${styles.span1} absolute inset-[-1000%] animate-[spin_2s_linear_infinite] `}/>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
                Learn More about {i.heading}
              </span>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
