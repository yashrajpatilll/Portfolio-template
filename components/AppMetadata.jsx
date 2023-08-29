const author = "Yashraj";
const description = "Open source Portfolio template built using Next.js and TailwindCss";
const url = "https://template.yashraj.site";
export const AppMetadata = {
    metadataBase: new URL("https://template.yashraj.site"),
    title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
    description: description,
	icons: {
		icon: "/favicon.png"
    },
    keywords: [
        "Nextjs tailwind",
        "Next.js",
        "Frontend dveloper",
        "template",
        "Portfolio website",
        "Frontend Developer Portfolio",
        "open source",
		"yashraj.site"
    ],
    creator: author,
    authors: [{name: author}],
    colorScheme: "dark",
	openGraph: {
        title: `${author}`,
		description: description,
		url: url,
		siteName: `${author}`, 
        images: [
			{
				url: "/template-og.png",
				width: 1600,
				height: 856,
				alt: "Portfolio Template"
			},
			{
				url: "",
				width: 1800,
				height: 1600,
				alt: "My personal website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};