import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata, Analytics } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<Analytics />
		</head>		
			<body>
				<ThemeContext>
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContext>
			</body>
		</html>
	);
}
