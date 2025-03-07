import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ text = "Loading, please wait..." }) => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-white">
            <div className="flex flex-col items-center gap-3">
                <CircularProgress size={50} thickness={4} color="inherit" />
                <p className="text-gray-700 text-lg font-medium">{text}</p>
            </div>
        </div>
    );
};

export default Loader;
