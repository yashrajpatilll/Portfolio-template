"use client";

import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { animate, exit, initial, transition } from "utils";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				className=" shadow-md rounded-lg p-2 bg-inherit hover:bg-gray-200/30 dark:bg-[#262626] dark:hover:bg-gray-800/50 "
			>
				{currentTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
			</m.button>
		</LazyMotion>
	);
};
