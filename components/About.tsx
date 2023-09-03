import { motion } from "framer-motion";

type Props = {};

export default function About({ }: Props) {
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
                About Me
            </h3>
            <div className="space-y-3 text-black dark:text-white text-lg text-justify">
                <p className="[text-align-last:center]">
                    I am a graduate student studying Software engineering at Stevens Institute of Technology with a focus on web development and data science. I&apos;m now seeking for internship and full-time positions to broaden my professional experience.
                </p>
                <p className="[text-align-last:center]">
                    I have about 1 year of software development industry experience. I am skilled in C++, Python, and Java. I have worked on web-based applications using the latest web technologies. I am a specialist in UI & UX Design and in developing customer service-oriented applications with solid test automation strategies. In the past, I have worked on projects using MERN stack, Flask, and DevOps tools.
                </p>
                <p className="[text-align-last:center]">
                    I have a lot of expertise with JavaScript, HTML, CSS, and several open-source frameworks, including Node.js, Express.js, React.js, Angular and MongoDB. I am proficient in using these frameworks to create web apps with Single Page Applications (SPA) architectures. I can create sophisticated SQL queries utilizing well-known database servers like MySQL. In addition to my development work, I have strong problem-solving and bug-fixing abilities.
                </p>
                <p className="[text-align-last:center]">
                    In addition to my skills in coding, I am highly passionate about leveraging technology for societal and enterprise solutions, I have led research teams in developing real-time systems for public health and data security. My work in social distancing and face mask detection, as well as in enhancing Storage Area Network security, has been published in reputed international journals, showcasing my commitment to innovation and applied research
                </p>
            </div>
        </motion.div>
    )
}
