"use client";

import { Logo, Menu, MobileMenu, ThemeSwitcher } from "components";
import { useMediaQuery } from "utils";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-md dark:shadow-lg">
			<div className="container-md">
				<div className="flex justify-between items-center gap-3">
					<div className="hidden md:block">
					<Logo />
					</div>

					{/* For mobile view */}
					{isMobile ? <MobileMenu />: <Menu />}
					{isMobile ? <Logo />: null}
					<div className="flex items-center gap-5">
						{/* {!isMobile && <ConnectMedia />} */}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
