import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

export default function Projects({ }: Props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/VishweshMS/repos")
            .then((res) => res.json())
            .then((data) => {
                setProjects(
                    data
                        .filter((project: { name: string; }) => ["Book-Search-Engine", "Social-Distancing-and-Face-Mask-Detection-From-CCTV-Camera", "Stevens-Share-Project", "Weather-Detection"].includes(project.name))
                );
            });
    }, []);

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
            className="min-h-screen flex flex-col max-w-7xl justify-start items-center mx-auto pt-10 pb-40 px-9"
        >
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project: { name: string; description: string; topics: [string]; html_url: string; created_at: string; }, index: React.Key | null | undefined) => (
                        <Project project={project} key={index} />
                    ))
                }
            </div>
        </motion.div>
    )
}