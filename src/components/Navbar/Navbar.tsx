"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn";
import Link from "next/link";
import './Navbar.css'
import Image from "next/image";
const Navbar = ({ className }: { className?: string }) => {


  const [active, setActive] = useState<string | null>(null); 

  return (
    <>
    {/* <nav className='nav'>
      <h1 className='nav-logo'>xCARIA</h1>
        <ul className='nav-items'>
        <li><a href="#">home</a></li>
        <li><a href="#">projects</a></li>
        <li><a href="#">contact</a></li>
        </ul>
    </nav> */}
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent" , className)}>
      
      <Menu setActive={setActive}>
     <div className="nav-logo">
     <Link href={"/"}>
        <h1 className="text-white">xCARIA</h1>
      </Link>
     </div>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects" >
        <div className="flex flex-col space-y-4 text-sm gap-5 options">
        <HoveredLink href="/projects">Data Governance Chatbot</HoveredLink>
            <HoveredLink href="/projects">Business Intelligence Chatbot</HoveredLink>
            <HoveredLink href="/projects">Local Chatbot</HoveredLink>
            <HoveredLink href="/projects">SQL-Generation</HoveredLink>
            </div>
        </MenuItem>
        <Link href='/contact'>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
      </Menu>
    </div>


    </>
  )
}

export default Navbar