"use client";

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
                <HeadingDivider title="About me" />
                <div className="pt-4 sm:pt-8 pb-12 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-lg md:text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
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
