import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
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
				ABOUT ME
			    </h3>
             
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-lg md:text-xl font-light leading-relaxed pt-8"
                    >
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores officia numquam, reprehenderit ullam laborum doloremque officiis repellat laboriosam minus. Quis sapiente dolores enim numquam nesciunt voluptatum! Alias veniam recusandae doloremque.
                        </p>
                        <p className="my-3">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat ex consectetur, odio libero numquam inventore! Numquam iusto sit illo quisquam obcaecati excepturi, eum illum. Natus expedita corrupti repudiandae possimus.
                        </p>
                    </div>
                </div>

                <TimeLine />
            </section>
        </LazyMotion>
    );
}
