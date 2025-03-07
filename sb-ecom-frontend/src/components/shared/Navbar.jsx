import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";
import React from "react";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white text-black py-4 shadow-md">
        <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold">
            <FaStore className="mr-2 text-3xl text-purple-600" />
            <span className="font-[Poppins]"> CB</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="sm:flex hidden gap-8 items-center text-gray-700 font-medium">
            {['Home', 'Products', 'About', 'Contact'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`${
                    path === `/${item.toLowerCase()}`
                      ? "text-black font-bold"
                      : "hover:text-gray-900"
                  } transition-all`}
                >
                  {item}
                </Link>
              </li>
            ))}
            {/* Cart Icon */}
            <li>
              <Link to="/cart">
                <Badge showZero badgeContent={cart?.length || 0} color="primary" overlap="circular">
                  <FaShoppingCart size={22} className="text-gray-800" />
                </Badge>
              </Link>
            </li>
            {/* User Authentication */}
            {user && user.id ? <UserMenu /> : (
              <li>
                <Link
                  className="flex items-center space-x-2 px-4 py-[6px] 
                              bg-gradient-to-r from-purple-600 to-red-500 
                              text-white font-semibold rounded-md shadow-lg 
                              hover:from-purple-500 hover:to-red-400 transition 
                              duration-300 ease-in-out"
                  to="/login"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="sm:hidden flex items-center">
            {navbarOpen ? <RxCross2 className="text-black text-3xl" /> : <IoIosMenu className="text-black text-3xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 sm:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              {['Home', 'Products', 'About', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className={`${
                      path === `/${item.toLowerCase()}`
                        ? "text-black font-bold"
                        : "hover:text-gray-900"
                    } transition-all`}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {/* Cart Icon */}
              <li>
                <Link to="/cart" onClick={() => setNavbarOpen(false)}>
                  <Badge showZero badgeContent={cart?.length || 0} color="primary" overlap="circular">
                    <FaShoppingCart size={22} className="text-gray-800" />
                  </Badge>
                </Link>
              </li>
              {/* User Authentication */}
              {user && user.id ? <UserMenu /> : (
                <li>
                  <Link
                    className="flex items-center space-x-2 px-4 py-[6px] 
                                bg-gradient-to-r from-purple-600 to-red-500 
                                text-white font-semibold rounded-md shadow-lg 
                                hover:from-purple-500 hover:to-red-400 transition 
                                duration-300 ease-in-out"
                    to="/login"
                    onClick={() => setNavbarOpen(false)}
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Push content down to prevent overlap */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
