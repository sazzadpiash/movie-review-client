import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "./../../assets/images/logo/logo-no-background.png";

const Header = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-transparrent py-6">
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
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="flex gap-3">
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
                    </div> */}
                    <Link to='/' className="btn btn-ghost h-16 normal-case text-xl">
                        <img className="w-44 md:w-72" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center w-full">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">All service</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={logOut} className='bg-primary text-white py-2 rounded font-semibold px-5'>Logout</button> : <Link state={{ from: location }} replace className='bg-primary text-white py-2 rounded font-semibold px-5' to='/login'>Login</Link>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Header;
