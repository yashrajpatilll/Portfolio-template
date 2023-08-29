import { AiFillHtml5, AiFillGithub} from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaFigma } from "react-icons/fa";
import {RiFlutterFill} from "react-icons/ri";
import {SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiMysql} from "react-icons/si";
import { DiPython } from "react-icons/di";
import {BsGit} from "react-icons/bs";


export const TECHNOLOGIES = [
	{
		category: "Web",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next.js", icon: <SiNextdotjs size={32} /> },
			{ name: "Typescript", icon: <SiTypescript size={32} /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
			{ name: "Python", icon: <DiPython size={32} /> }
		]
	},
	{
		category: "Design",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Git", icon: <BsGit size={32} />},
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Vercel", icon: <SiVercel size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "MySQL", icon: <SiMysql size={32} />},


		]
	},
	// {
	// 	category: "Mobile",
	// 	items: [{ name: "Flutter", icon: <RiFlutterFill size={32} /> }]
	// }
	
];
