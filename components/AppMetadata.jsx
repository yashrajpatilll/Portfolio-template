const author = "Niranjan Patil";
const description = " Software developer form Mumbai, Republic of, who loves to develop beautiful websites, single page application, customer relationship management or code from scratch using React and Next.js";
const url = "https://github.com/NiranjanxPatil";
export const AppMetadata = {
    metadataBase: new URL("https://github.com/NiranjanxPatil"),
    title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
    description: description,
	icons: {
		icon: "/favicon.png"
    },
    keywords: [
        "Niranjan Patil",
        "Niranjan Patil - software & devops Engineer",
        "Frontend dveloper",
        "Devops Engineer",
        "Portfolio website",
        "Frontend Developer Portfolio",
        "Flutter developer",
    ],
    creator: author,
    authors: [{name: author}],
    colorScheme: "dark",
	openGraph: {
        title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`, 
        images: [
			{
				url: "",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};