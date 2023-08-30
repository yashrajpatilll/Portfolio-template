import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { IoIosConstruct } from "react-icons/io";


export function ProjectsSection() {

    const projectRef = useRef(null);
    const isInView = useInView(projectRef, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="projects" className="section"
             style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 0.9s ease-in-out, opacity 0.9s ease-in-out"
             }}
            >
                <div ref={projectRef} className="pt-4 pb-28 max-w-5xl">
                    <h3 className="text-2xl md:text-4xl font-extrabold">
                        PROJECTS
                    </h3>   
                    <div className="text-lg md:text-xl font-light leading-relaxed pt-8">
                        <p>
                            Coming Soon!
                        </p>
                        <IoIosConstruct size={36} className="mt-4" />
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
