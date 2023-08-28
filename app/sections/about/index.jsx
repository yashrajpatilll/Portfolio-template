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
                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <p>
                            My name is Niranjan. I am pursuing my AIML Engineering in the computer
                            science field.
                        </p>
                        <p>
                            In my university years, I tried to develop in different technologies, and I
                            consistently engaged in learning new concepts and techniques in this field.
                        </p>
                        <p>So, officially, my programming journey began in 2021 with the Java language.</p>
                        <p className="my-3.5">
                            I enjoy learning technologies that interest me, which is why I dedicated a significant
                            amount of time to working with Java.
                        </p>
                        <p>
                            One day, I decided to try something new, and I started learning React. I was so
                            excited to see how fast I can build a website with it, and how easy it is to maintain
                            it. Consequently, I quickly learned Next.js and I tried to build some useful
                            projects, working and learning solo.
                        </p>
                        <p className="my-3.5">
                            In 2023, I tried to create an opportunity to start working as a React developer for self-development,
                            with the possibility of getting involved with the community and open source. I was skeptical
                            about it at first, but I decided to give it a try, and I am still learning and growing every day.
                        </p>
                    </div>
                </div>

                <TimeLine />
            </section>
        </LazyMotion>
    );
}
