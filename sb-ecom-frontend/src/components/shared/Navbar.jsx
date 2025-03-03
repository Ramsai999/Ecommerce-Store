import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    
    return (
        <div className="h-[70px] bg-custom-gradient text-black z-50 flex items-center sticky top-0">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>

            <ul className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient   text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/" ? "text-black font-bold" : "text-gray-600"
                   }`}
                    to="/">
                        Home
                   </Link> 
                </li>

                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/products" ? "text-black font-bold" : "text-gray-600"
                   }`}
                    to="/products">
                        Products
                   </Link> 
                </li>


                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/about" ? "text-black font-bold" : "text-gray-600"
                   }`}
                    to="/about">
                        About
                   </Link> 
                </li>

                <li className="font-[500] transition-all duration-150">
                   <Link className={`${
                    path === "/contact" ? "text-black font-bold" : "text-gray-600"
                   }`}
                    to="/contact">
                        Contact
                   </Link> 
                </li>

                

                
                
            </ul>

            <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="sm:hidden flex items-center sm:mt-0 mt-2">
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl" />
                    ) : (
                        <IoIosMenu className="text-white text-3xl" />
                    )}
            </button>
            </div>
        </div>
    )
}

export default Navbar;