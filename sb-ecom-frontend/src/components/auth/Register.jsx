import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../shared/InputField";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../store/actions";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners";

const Register = () => {
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

  const registerHandler = async (data) => {
    console.log("Register Click");
    dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        <div className="flex flex-col items-center space-y-4">
          <FaUserPlus className="text-purple-600 text-5xl" />
          <h1 className="text-gray-800 text-center font-semibold text-3xl">
            Register Here
          </h1>
        </div>
        <hr className="mt-2 mb-5 border-gray-300" />
        <div className="flex flex-col gap-4">
          <InputField
            label="UserName"
            required
            id="username"
            type="text"
            message="*UserName is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />
          <InputField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />
          <InputField
            label="Password"
            required
            id="password"
            min={6}
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-red-400 transition duration-300 flex items-center justify-center gap-2"
          type="submit"
        >
          {loader ? (
            <>
              <Spinners /> Loading...
            </>
          ) : (
            <>Register</>
          )}
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link
            className="font-semibold text-purple-600 hover:underline ml-1"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;