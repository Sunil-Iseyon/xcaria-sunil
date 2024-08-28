// "use client";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";

// export const Navigation: React.FC = () => {
// 	const ref = useRef<HTMLElement>(null);
// 	const [isIntersecting, setIntersecting] = useState(true);

// 	useEffect(() => {
// 		if (!ref.current) return;
// 		const observer = new IntersectionObserver(([entry]) =>
// 			setIntersecting(entry.isIntersecting),
// 		);

// 		observer.observe(ref.current);
// 		return () => observer.disconnect();
// 	}, []);

// 	return (
// 		<header ref={ref}>
// 			<div
// 				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
// 					isIntersecting
// 						? "bg-zinc-900/0 border-transparent"
// 						: "bg-zinc-900/500  border-zinc-800 "
// 				}`}
// 			>
// 				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
// 					{/* <div className="flex justify-between gap-8">
// 						<Link
// 							href="/projects"
// 							className="duration-200 text-zinc-400 hover:text-zinc-100"
// 						>
// 							Projects
// 						</Link>
// 						<Link
// 							href="/contact"
// 							className="duration-200 text-zinc-400 hover:text-zinc-100"
// 						>
// 							Contact
// 						</Link>
// 					</div> */}

// 					<Link
// 						href="/"
// 						className="duration-200 text-zinc-300 hover:text-zinc-100"
// 					>
// 						<ArrowLeft className="w-6 h-6 " />
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // Ensure you import the correct icons
import { logOut } from '../app/logout/action';
import { usePathname } from 'next/navigation';

function Nav() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
	// backdrop-blur
	<header ref={ref}>
	  <div
		className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
		  isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500 border-zinc-800"
		}`}
	  >
		<div className="container flex items-center justify-between p-6 mx-auto">
		  {/* Logo on the left */}
		  <Link href="/projects" className="flex items-center">
			<h1 className="text-xl font-bold text-white">xCaria</h1>
		  </Link>
  
		  {/* Navigation Links in the middle */}
		  <div className="flex-1 text-center gap-4">
			<Link href="/showcase" className={path.startsWith('/showcase')?"text-white" : "px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200"} >
			  Showcase
			</Link>
			<Link href="/blog" className={path.startsWith('/blog')?"text-white" : "px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200"}>
			  Blog
			</Link>
		  </div>
  
		  {/* Action buttons on the right */}
		  <div className="flex items-center gap-4">
			<Link href="/login" className={path.startsWith('/login')?"text-white" : "px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200"}>
			  Login
			</Link>
			<form action={logOut}>
			<button type="submit" className="px-4 py-2 text-zinc-400 hover:text-zinc-100 duration-200">
			  LogOut
			</button></form>
			<Link href="/request-demo" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 duration-200">
			  Request Demo
			</Link>
		  </div>
		</div>
	  </div>
	</header>
	
  );
}

export default Nav;