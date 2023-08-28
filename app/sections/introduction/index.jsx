"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { WelcomeAnimation } from "./IntroAnimation";
import { useScrollTo } from "hooks";
import { useMediaQuery } from "utils";

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();
	const isTabletUp = useMediaQuery("min-width: 768px");

	let [count, setCount] = useState(0);
	const [text] = useState([
		"enjoy building software",
		"design and develop web apps",
		"like to Read",
		"love to explore new things"
	]);

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section" ref={introRef}>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
					<div className="py-5 md:py-10">
						<h1
							tabIndex="0"
							ref={ref}
							className="text-3xl md:text-5xl xl:text-6xl font-extrabold"
							style={{
								transform: isInView ? "none" : "translateX(-100px)",
                            	opacity: isInView ? 1 : 0,
                           		transition: "transform 1s ease-in-out, opacity 1s ease-in-out"
							}}
						>
							<p>
								Hi, I&apos;m <mark>Yashraj</mark>
							</p>
							<p>
								A <mark>passionate</mark> software developer.
							</p>
						</h1>

						<div className="mt-4 relative flex flex-col overflow-hidden">
							<p
								ref={ref}
								className="text-[17px] md:text-2xl transform-none opacity-100"
								style={{
									transform: isInView ? "none" : "translateX(-100px)",
                            		opacity: isInView ? 1 : 0,
                            		transition: "transform 1s ease-in-out, opacity 1s ease-in-out"
								}}
							>
								I
								<span
									className="absolute flex flex-col transition-all duration-700 ease-in-expo"
									style={{
										top:
											count === 0
												? "0"
												: count === 1
												? "-100%"
												: count === 2
												? "-200%"
												: count === 3
												? "-300%"
												: "0",
										left: "13px"
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>
						<div
							className="mt-8"
							ref={ref}
							style={{
							transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "transform 1s ease-in-out, opacity 1s ease-in-out"
							}}
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								See my latest projects
							</Link>
						</div>
					</div>

					{isTabletUp && <WelcomeAnimation />}
				</div>
			</section>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const firstWord = <b>{element.split(" ").at(0)}</b>;
	const restWords = element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex="0"
			ref={ref}
			className="text-[17px] md:text-2xl"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</span>
	);
}
