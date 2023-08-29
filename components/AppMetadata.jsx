const author = "Yashraj Patil";
const description = "I'm a passionate software developer. I love to build things that make a difference.";
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
        "Yashraj Patil",
        "Yashraj Patil - software developer",
        "Frontend dveloper",
        "Web Engineer",
        "Portfolio website",
        "Frontend Developer Portfolio",
        "yasrajpatilll",
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
				url: "",
				width: 800,
				height: 600,
				alt: "My personal website"
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