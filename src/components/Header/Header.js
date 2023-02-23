import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo/logo-no-background.png";
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from "react-icons/fi";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-[#191e25] py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link>Item 1</Link>
                            </li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="p-2">
                                    <li>
                                        <Link>Submenu 1</Link>
                                    </li>
                                    <li>
                                        <Link>Submenu 2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link>Item 3</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-3">
                        <span className="border-[#616263]">
                            <FiFacebook className="text-[#989bad] border w-8 h-8 py-[6px] rounded-full text-xl"></FiFacebook>
                        </span>
                        <span className="border-[#616263]">
                            <FiTwitter className="text-[#989bad] border w-8 h-8 py-[6px] rounded-full text-xl"></FiTwitter>
                        </span>
                        <span className="border-[#616263]">
                            <FiLinkedin className="text-[#989bad] border w-8 h-8 py-[6px] rounded-full text-xl"></FiLinkedin>
                        </span>
                        <span className="border-[#616263]">
                            <FiYoutube className="text-[#989bad] border w-8 h-8 py-[6px] rounded-full text-xl"></FiYoutube>
                        </span>
                        <span className="border-[#616263]">
                            <FiInstagram className="text-[#989bad] border w-8 h-8 py-[6px] rounded-full text-xl"></FiInstagram>
                        </span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <Link className="btn btn-ghost h-16 normal-case text-xl">
                        <img className="h-full" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link className="bg-primary py-2 rounded font-semibold px-5">
                        Login
                    </Link>
                </div>
            </div>
            <div className="bg-[#191e25] text-white border-t border-gray-600 py-3">
                <ul className="menu menu-horizontal px-1 justify-center w-full">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">All Movies</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
