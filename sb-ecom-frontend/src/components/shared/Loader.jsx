import { PuffLoader } from "react-spinners";

const Loader = ({ text = "Please wait...", size = 80, color = "#e11d48" }) => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-white dark:bg-gray-900 transition-all">
            <div className="flex flex-col items-center gap-3 animate-fadeIn">
                <PuffLoader color={color} size={size} aria-label="Loading..." />
                <p className="text-gray-800 dark:text-gray-300 text-lg font-medium">{text}</p>
            </div>
        </div>
    );
};



export default Loader;