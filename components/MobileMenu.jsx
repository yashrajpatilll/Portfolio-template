"use client";

import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { ConnectMedia, Menu } from "components";
import {
	animate,
	animateMobile,
	exit,
	exitMobile,
	initial,
	initialMobile,
	transition
} from "utils";
import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				onClick={onOpen}
				title="Open menu"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				// className=" shadow-md rounded-md p-2 bg-inherit hover:bg-gray-200/30 dark:bg-[#1f1f1f] dark:hover:bg-[#1b1b1b] "
			>
				<HiMenu size={26} />
			</m.button>

			<AnimatePresence>
				{isOpen && (
					<m.div
						className={`backdrop-blur-3xl fixed left-0 right-0 top-0 min-h-screen z-50`}
						initial={initialMobile}
						animate={animateMobile}
						exit={exitMobile}
					>
						<header className="p-6 flex items-center justify-between border-b border-gray-500/30 z-10">
							<ConnectMedia />
							<button
								onClick={onClose}
								className="w-10 h-10 inline-flex items-center justify-center"
							>
								<IoMdClose size="24" />
							</button>
						</header>
						<div className="px-6 py-8">
							<Menu onClick={onClose} />
						</div>
					</m.div>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}