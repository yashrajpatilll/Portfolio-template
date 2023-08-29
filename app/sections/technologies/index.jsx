import { useRef } from "react";
import { HeadingDivider } from "components";
import { TECHNOLOGIES } from "../../../constants";
import { LazyMotion, domAnimation, useInView } from "framer-motion";


export function TechnologiesSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isInView = useInView(textRef, { once: true });


	return (	
		<LazyMotion features={domAnimation}>

		<section id="tech" className="section mt-10"
		style={{
			transform: isInView ? "none" : "translateY(50px)",
                            opacity: isInView ? 1 : 0,
                            transition: "transform 0.9s ease-in-out, opacity 0.9s ease-in-out"
		}}
		>
			<h3 ref={textRef} className="text-2xl md:text-4xl font-extrabold">
				TECHNOLOGIES
			</h3>
			
			{!!TECHNOLOGIES.length && (
				<div className="mt-10 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-10">
					{TECHNOLOGIES.map((tech, index) => {
						return (
							<div
								key={tech.category}
								ref={stackRef}
								className="flex flex-col gap-4 flex-1 md:flex-auto"
							>
								<h3 tabIndex="0" className="text-xl md:text-2xl font-bold">
									{tech.category}
								</h3>
								<div className="flex items-center flex-wrap gap-x-5 gap-y-8">
									{tech.items.map((item) => (
										<div key={item.name} className="group relative flex">
											<span tabIndex="0" role="img">
												{item.icon}
											</span>
											<span className="group-hover:opacity-100 group-focus-within:opacity-100 bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
	-translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max">
												{item.name}
											</span>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
		</LazyMotion>
	);
}
