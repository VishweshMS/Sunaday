import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Achievement from "./Achievement";

type Props = {};

const achievements = [
    {
        "Title": "Social Distancing and Face Mask Detection from CCTV Camera",
        "Company name": "International Journal of Engineering Research & Technology (IJERT)",
        "Description": [
"Lead a 4 member team in developing a real - time detection system using OpenCV, Keras / TensorFlow, and MobileNetV2 architecture to identify face masks and monitor social distancing via CCTV.",
"Curated a custom dataset of 3,835 images, achieving a 93 % accuracy rate in distance calculations between individuals.",
"Proposed future enhancements for crowd prediction and heatmap plotting, addressing challenges like variable lighting and background disturbances."
        ],
        "Date": "August 2021",
    },
    {
        "Title": "Security Analysis and Improvisation in Storage Area Network",
        "Company name": "International Research Journal of Engineering and Technology (IRJET)",
        "Description": [
            "Lead a 3 member team in Developing and evaluating advanced security protocols for Storage Area Networks(SAN) using IBM specifications, ESXi 6.0, FreeNAS, Wireshark, Cain, and Nmap.Utilized blockchain to ensure data consistency throughout the SAN.",
            "Implemented SSL, IPSec, IQNs, and CHAP protocols to bolster Storage Area Network(SAN) security, identifying key vulnerabilities, improving data protection by 60 %. Enhanced storage efficiency, reducing potential data breaches by 40 %. ",
            ],
        "Date": "September 2021",
    }
];

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
                Research & Publications
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {achievements.map((achievement, index) => (
                    <Achievement achievement={achievement} key={index} />
                ))}
            </ol>
            <a href="#achievements" className="mt-10 flex flex-row justify-center items-center text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                Get it touch &nbsp; <FaArrowRight className="inline-block" />
            </a>
        </motion.div>
    )
}