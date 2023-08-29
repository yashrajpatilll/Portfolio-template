import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <div className="pt-4 pb-24 max-w-5xl"
                 style={{
                    transform: isInView ? "none" : "translateY(50px)",
                            opacity: isInView ? 1 : 0,
                            transition: "transform 0.9s ease-in-out, opacity 0.9s ease-in-out"
                 }}
                 >
                
                <h3 className="text-2xl md:text-4xl font-extrabold">
				ABOUT 
			    </h3>
             
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-lg md:text-xl font-light leading-relaxed pt-8"
                    >
                        <p>
                        I&apos;m excited to share that this website is an open-source project crafted with Next.js and Tailwind CSS. The best part? It&apos;s available for anyone to use, completely free of charge. Feel free to explore, learn from, and even adapt the code for your own purposes. 
                        And remember, giving credit to the creator is all I ask in return – let&apos;s keep the spirit of open collaboration alive!
                        </p>
                        <p className="my-3">
                        While the code isn&apos;t perfectly optimized just yet, I&apos;m committed to continuous improvement. I warmly welcome feedback and contributions from the community.
                        </p>
                    </div>
                </div>
                <h3 className="text-lg md:text-2xl font-bold pb-4 md:pb-8"
                    style={{
                        transform: isInView ? "none" : "translateY(50px)",
                        opacity: isInView ? 1 : 0,
                        transition: "transform 1.2s ease-in-out, opacity 1.2s ease-in-out"
                     }}
                >
				JOURNEY 
			    </h3>
                <TimeLine />
            </section>
        </LazyMotion>
    );
}
