import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
import Skill from "./Skill";

type Props = {};

const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "MySQL",
    "Oracle",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap CSS",
    "Material Design",
    "JavaScript",
    "jQuery",
    "TypeScript",
    "PHP",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Angular",
    "Flask",
    "Django",
    "Laravel",
    "Spring Framework",
    "Flutter",
    "Scikit-learn",
    "Microsoft Office Suite",
    "Git",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "AWS",
];

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="min-h-screen flex flex-col max-w-5xl justify-start items-center mx-auto pt-10 pb-40 px-9"
        >
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </div>
            <a href="#achievements" className="mt-10 flex flex-row justify-center items-center text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                Check out my Research &nbsp; <FaArrowRight className="inline-block" />
            </a>
        </motion.div>
    )
}