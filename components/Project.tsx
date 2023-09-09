import moment from "moment";
import { FaGithub } from 'react-icons/fa';

type Props = {
    project: {
        name: string;
        description: string;
        topics: [string];
        html_url: string;
        
    };
};

function capitalize(strings: string[]) {
    return strings.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
}

export default function Project({ project }: Props) {
    return (
        <div className="rounded overflow-hidden shadow-2xl hover:scale-105">
            <div className="px-6 py-4">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-xl mb-1 text-gray-800 dark:text-gray-100">{capitalize(project.name.split("-")).join(" ")}</p>
                    <a href={project.html_url} target="_blank" rel="noreferrer">
                        <FaGithub className="block w-8 h-8 text-black dark:text-white ml-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-100" />
                    </a>
                </div>
                
                <p className="text-gray-900 dark:text-gray-50 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.topics.map((topic, index) => (
                    <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">{topic}</span>
                ))}
            </div>
        </div>
    )
}