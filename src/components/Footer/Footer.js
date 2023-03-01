import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi'
import { BsEnvelopeOpen } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import logo from "./../../assets/images/logo/logo-no-background.png";
import { IconContext } from "react-icons";
import { RiSendPlaneLine } from "react-icons/ri";


const Footer = () => {
    return <div className="bg-[#1a1a1a]">
        <footer className="py-20 mx-auto max-w-6xl text-gray-400">
            <div className="border mx-5 md:mx-0 flex flex-col md:flex-row justify-between border-gray-300 p-6 px-10">
                <div className="flex gap-6 items-center mb-5 md:mb-0 border-b md:border-b-0 pb-5 md:pb-0">
                    <div>
                        <FiPhoneCall className="text-4xl"></FiPhoneCall>
                    </div>
                    <div>
                        <h5 className="poppins font-bold text-xl">Call us</h5>
                        <p>+880 172-475-3466</p>
                    </div>
                </div>
                <div className="footer-contact-links-divider"></div>
                <div className="flex gap-6 items-center mb-5 md:mb-0 border-b md:border-b-0 pb-5 md:pb-0">
                    <div>
                        <BsEnvelopeOpen className="text-4xl"></BsEnvelopeOpen>
                    </div>
                    <div>
                        <h5 className="poppins font-bold text-xl">Write to us</h5>
                        <p>info@travolagency.com</p>
                    </div>
                </div>
                <div className="footer-contact-links-divider"></div>
                <div className="flex gap-6 items-center">
                    <div>
                        <CiLocationOn className="text-4xl"></CiLocationOn>
                    </div>
                    <div>
                        <h5 className="poppins font-bold text-xl">Address</h5>
                        <p>24 King St, SC 29401 USA</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row px-5 md:px-0 justify-between gap-20">
                <div>
                    <img className="w-72" src={logo} alt="" />
                    <p className="mt-3">Quisque imperdiet sapien porttito the bibendum <br /> sellentesque the commodo erat acar accumsa lobortis, <br /> enim diam the nesuen.</p>
                </div>
                <div>
                    <h5 className="poppins text-lg font-bold">Important Links</h5>
                    <p>Home</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>More Information</p>
                </div>
                <div>
                    <h5 className="poppins text-lg font-bold">Subscribe</h5>
                    <p>Sign up for our monthly blogletter to stay informed <br /> about travel and tours</p>
                    <IconContext.Provider value={{ className: "text-gray-400 top-3 left-5" }}>
                        <div className="mt-7 relative text-gray-500">
                            <RiSendPlaneLine className="text-2xl absolute"></RiSendPlaneLine>
                            <input type="text" className="input w-full rounded-full pl-16" placeholder="Your Email Address" />
                            <button className="btn btn-primary md:absolute w-full mt-5 md:mt-0 md:w-auto top-0 right-0 rounded-full text-xs px-10">Subscribe</button>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </footer>
    </div>;
};

export default Footer;
