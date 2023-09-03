type Props = {
    achievement: {
        "Title": string,
        "Company name": string,
        "Description": string[],
        "Date": string,
    }
};

export default function Achievement({ achievement }: Props) {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -left-2 border border-gray-50 dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{achievement["Title"]}</h3>
            <h4 className="flex items-center mb-2 text-lg text-gray-800 dark:text-gray-100">{achievement["Company name"]}</h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{achievement["Date"]}</time>
            <ul className="mb-4 text-base font-normal text-gray-900 dark:text-gray-50 list-disc ml-4">
                {achievement["Description"].map((point, index) => <li key={index}>{point}</li>)}
            </ul>
        </li>
    )
}