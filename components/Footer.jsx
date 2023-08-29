"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";
import Link from "next/link";

export function AppFooter() {
	const footerRef = useRef(null);
	const isInView = useInView(footerRef, { once: true });
	const year = new Date().getFullYear();

	return (
		<LazyMotion features={domAnimation}>
			<footer
				ref={footerRef}
				className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-500/20"
				style={{
					transform: isInView ? "none" : "translateY(40px)",
                            opacity: isInView ? 1 : 0,
                            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
				}}
			>
				<div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
				
				<div>
				Copyright &copy; {year} {" "}	
				<Link
            		target='_blank'
            		href='https://yashraj.site'
            		className='text-blue-500 hover:text-blue-600'
				 >
            		Yashraj Patil
          		</Link>{" "} 

				  </div>
					<div className="hidden sm:block ">
					<ScrollTop />
					</div>
					<div className="hidden sm:block ">
					<ConnectMedia />
					</div>
				</div>
			</footer>
		</LazyMotion>
	);
}
