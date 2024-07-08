import { MDXRemote } from "next-mdx-remote/rsc";
// import Particle from './particleLog';
import AnimatedTextWord from "./animatedText";
// import Particles from "../../../components/particles";
import styles from "./page.module.css";
import { data } from "./data";
import Image from "next/image";
import i1 from "../../../../public/SD.png";

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  // return <MDXRemote source={markdown} />
  // console.log(data)
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-screen h-screen"> */}
      {/* <Particle id="part"/> */}
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      {/* <div className="text-center">
          <AnimatedTextWord text1="An AI tool to make your work smoother" />
        </div> */}

      {/* </div> */}
      {/* <div className=" mt-20">
        <h1 className='text-white'>Showcase</h1>
      </div> */}
      <div className="h-screen w-screen flex flex-wrap gap-7 items-center justify-center mt-32 text-white text-center ">
        {data.map((i) => (
          <div className={`${styles.sect} space-y-8`}>
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center bg-white h-16 w-16 rounded-xl">
                <Image  src={i.img} alt="Image is getting loaded" width={40} height={40}/>
              </div>
            </div>
            <div>
              <h3 className=" text-xl">{i.heading}</h3>
            </div>
            <p className="text-xs">{i.descp}</p>
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
