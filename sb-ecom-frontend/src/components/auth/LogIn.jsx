import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../shared/InputField";
import { useDispatch } from "react-redux";
import { authenticateSignInUser } from "../../store/actions";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners";
import React from "react";

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="bg-white shadow-lg py-8 sm:px-8 px-6 rounded-lg w-full max-w-md border border-gray-200">
                <div className="flex flex-col items-center space-y-4">
                    <AiOutlineLogin className="text-gray-700 text-5xl" />
                    <h1 className="text-gray-800 text-center font-montserrat text-2xl font-bold">
                        Login Here
                    </h1>
                </div>
                <hr className="mt-4 mb-6 border-gray-300" />
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    className="bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold w-full py-3 rounded-md mt-5 transition-all duration-300 hover:from-purple-500 hover:to-red-400 disabled:opacity-50 flex justify-center items-center gap-2">
                    {loader ? (
                        <>
                            <Spinners /> Loading...
                        </>
                    ) : (
                        <>Login</>
                    )}
                </button>

                <p className="text-center text-sm text-gray-700 mt-5">
                    Don't have an account?
                    <Link
                        className="font-semibold text-purple-600 hover:underline ml-1"
                        to="/register">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LogIn;