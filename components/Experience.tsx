import { motion } from "framer-motion";
import Position from "./Position";

type Props = {};

const experiences = [
    {
        "Title": "Application Development Associate ",
        "Company name": "Accenture",
        "Start date": "September 2021",
        "End date": "May 2022",
        "Description": [
            "Spearheaded release and deployment of multiple application versions, overseeing all stages of the Software Development Life Cycle(SDLC) and achieved 20 % reduction in bug reports",
"Utilized Agile Methodology to enhance software development efficiency by 20%, driving daily Scrum meetings and Sprints, and coordinating with both onsite and offshore teams",
"Established design patterns to develop scalable software solutions improving system performance by 30%",
"Built robust server - side applications interacting with databases employing Spring Boot and Hibernate, decreasing data retrieval times by 15%",
"Mastered use of Spring Framework, integrating Controller, Service, Spring - WS, and DAO layers to create flexible application subsystems, resulting in a 25% improvement in code maintainability"
            ]
    },
    {
        "Title": "Intern Trainee",
        "Company name": "Gowri Software Solutions Pvt.Ltd",
        "Start date": "October 2020",
        "End date": "January 2021",
        "Description": [
            "Spearheaded development of a blog account feature with authentication, enabling users to build, modify, and update content conveniently",
            "Enhanced website functionality by 45%, enabling seamless display of posts updated by multiple users",
            "Applied OOD/OOP and algorithm analysis to optimize code and improve application performance, reducing diminishing by 30 %",
            "Delivered 15+ CI/CD pipelines operating Git, cutting down testing errors and increasing deployment frequency by 20 %",
    ]
    },
    {
        "Title": "Student Member",
        "Company name": "Computer Society of India",
        "Start date": "Sep 2018",
        "End date": "Jul 2021",
        "Description": [
            "Actively engaged in workshops, seminars, and conferences organized by the Computer Society of India(CSI), demonstrating a commitment to continual learning and leading by example in technical skill development.",
            "Took on a leadership role in providing logistical and organizational support to the teams responsible for events, workshops, or seminars, contributing to their overall success.",
            "Spearheaded outreach initiatives aimed at increasing membership, targeting both students and professionals to foster a more vibrant and inclusive community within CSI.",
            "Capitalized on the society's platform to create meaningful connections with professionals, academics, and peers in the computer science field, thereby fostering an environment of knowledge-sharing and mutual growth.",
        ]
    }
    
];

export default function Experience({ }: Props) {
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
                Experience
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {experiences.map((experience, index) => (
                    <Position experience={experience} key={index} />
                ))}
            </ol>
        </motion.div>
    )
}