import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
// import { Redis } from "@upstash/redis";
import { Card } from "../components/card";
import { Article } from "./(routes)/projects/article";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
// const redis = Redis.fromEnv();

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="z-10 text-4xl sm:text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700 font-bold cursor-default animate-pulse leading-tight tracking-tight">
          See our working business use cases for AI
        </h1>
        <p className="mt-4 text-xl text-zinc-300 animate-bounce">
          Explore how AI is revolutionizing industries.
        </p>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );

}


