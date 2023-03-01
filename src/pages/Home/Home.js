import React from "react";
import { IconContext } from "react-icons";
import { AiFillCheckCircle, AiOutlineSearch } from 'react-icons/ai'
import { RiHotelLine, RiSendPlaneLine, RiShip2Line } from "react-icons/ri";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { SlPlane } from "react-icons/sl";
import { HiOutlineTicket } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "react-countup/build/index";
import { Link } from "react-router-dom";
import video from "./../../assets/travel-video.mp4";

const Home = () => {
    return <div className="overflow-hidden">
        <div className="relative py-20 -mt-28">
            <div className="bg-[#f8f8f8] absolute top-0 bottom-0 right-0 left-0 z-[-20]"></div>
            <div>
                <div className="max-w-6xl mx-auto md:flex mt-16 md:mt-28">
                    <div className="md:basis-3/4 px-7 md:px-0">
                        <p className="custom-shadow-1 text-primary bg-white py-2 px-5 rounded-full inline-block mb-10">
                            Book With Us!
                        </p>
                        <h1 className="arvo text-4xl md:text-7xl md:leading-tight font-bold">Find Next Place <br /> To <span className="text-primary">Visit</span></h1>
                        <p className="text-lg text-gray-500 font-sans mt-4">
                            Discover amzaing places at exclusive deals. <br />
                            Eat, Shop, Visit interesting places around the world.
                        </p>
                        <div className="bg-white rounded-2xl md:flex overflow-hidden mt-10 md:mt-20">
                            <div className="md:flex grow p-6 gap-4">
                                <div className="flex flex-col basis-1/3 mb-4 md:mb-0">
                                    <label htmlFor="keywords">Keywords</label>
                                    <input type="text" placeholder="Type Your Keywords" className="input w-full px-0 focus:outline-0" />
                                </div>
                                <div className="flex flex-col basis-1/3 mb-4 md:mb-0">
                                    <label htmlFor="destination">Destination</label>
                                    <select type="text" className="input w-full px-0 focus:outline-0" >
                                        <option>Any</option>
                                        <option>America</option>
                                        <option>Asia</option>
                                        <option>Egypt</option>
                                        <option>Europe</option>
                                    </select>
                                </div>
                                <div className="flex flex-col basis-1/3 mb-4 md:mb-0">
                                    <label htmlFor="duration">Duration</label>
                                    <select type="text" className="input w-full px-0 focus:outline-0" >
                                        <option>Any</option>
                                        <option>1 Day Tour</option>
                                        <option>2-4 Days Tour</option>
                                        <option>5-7 Days Tour</option>
                                        <option>7+ Days Tour</option>
                                    </select>
                                </div>
                            </div>
                            <button className="text-center bg-primary w-full md:w-auto py-5 text-white font-bold px-10">
                                <AiOutlineSearch className="mx-auto text-3xl"></AiOutlineSearch>
                                Search Now</button>
                        </div>
                    </div>
                    <div className="md:basis-1/4 md:grow ml-[-230px] z-[-1] hidden md:block">
                        <img className="w-full rounded-2xl" src="https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/07/hero-right.jpg" alt="" />
                    </div>
                </div>
                <svg className="absolute bottom-0 right-0 z-[-2]" viewBox="0 0 1540 314" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 314V134.5C0 134.5 107 332.811 376 296C645 259.189 709.5 161.5 709.5 161.5L1140 160H1540V314H0Z" fill="white"></path>
                    <path d="M1256 172.039C1444 206.039 1540 296.5 1540 296.5V138C1540 138 1464.5 75.0404 1303 31.0401C1240.5 14.8677 1042 -24.959 902.5 22.5401C825 48.9286 803.5 66.04 728.5 143.54C697.344 175.734 635.5 219.5 635.5 219.5C635.5 219.5 726 256.039 822 240.039C986 220.039 1083 149.539 1256 172.039Z" fill="#ECF2FC"></path>
                </svg>
            </div>
        </div>

        {/* TO Destination */}
        <div className="text-center my-10 md:mt-0 md:mb-32">
            <h1 className="arvo text-4xl md:text-5xl md:leading-tight font-bold">To <span className="text-primary">Destinations</span></h1>
            <p className="text-lg text-gray-500 font-sans mt-4">
                Explore our top destinations voted by more than 100,000+ <br /> customers around the world.
            </p>
            <div className="max-w-6xl md:mx-auto mt-7 mx-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link to={'/service/63ff11326d482617e8cfffef'} className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$900</span>
                        <img className="rounded-2xl" src="https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/07/cat-eu-1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Chile – Santiago</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Leave your guidebooks at home and dive into the local cultures that make each destination so special.
                            </p>
                        </div>
                    </Link>
                    <Link to='/service/63ff2521d47002e50ff6ad78' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$1600</span>
                        <img className="rounded-2xl" src="https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/07/cat-soft-africa.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Austria</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>
                    </Link>
                    <Link to={'/service/63ff2451d47002e50ff6ad77'} className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$600</span>
                        <img className="rounded-2xl" src="https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/07/cat-asia.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Thiland Tour</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>
                    </Link>


                </div>
            </div>
        </div>

        {/* About Secition */}
        <div className="max-w-6xl mx-auto">
            <div className="block md:flex">
                <div className="basis-1/2 m-10 mt-20 md:m-0">
                    <p className="text-sm text-primary tracking-widest">THE BEST TRAVEL AGENCY</p>
                    <h3 className="arvo mt-4 text-gray-600 mb-4 leading-normal text-4xl font-bold ">DISCOVER THE <span className="text-primary">WORLD</span> <br /> WITH OUR GUIDE</h3>
                    <p className="text-gray-500">
                        You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                        <br /><br />
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.
                    </p>
                    <ul className="mt-5">
                        <li className="flex gap-2 items-center"><AiFillCheckCircle className="text-primary text-3xl"></AiFillCheckCircle> 20 Years of Experience</li>
                        <li className="flex gap-2 mt-3 items-center"><AiFillCheckCircle className="text-primary text-3xl"></AiFillCheckCircle> 150+ Tour Destinations</li>
                    </ul>
                </div>
                <div className="basis-1/2 relative p-5 md:p-20 md:pt-0 ">
                    <div className="about-img">
                        <div className="img">
                            <img src="https://duruthemes.com/demo/html/travol/multipage-video/img/about.jpeg" alt="" />
                        </div>
                    </div>
                    <div id="circle">
                        <svg version="1.1" xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} x="0px" y="0px" width={"300px"} height={"300px"} viewBox={"0 0 300 300"} enableBackground="new 0 0 300 300" xmlSpace="preserve">
                            <defs>
                                <path id={"circlePath"} d={" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "}></path>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"></circle>
                            <g>
                                <use xlinkHref="#circlePath" fill="none"></use>
                                <text fill="#0f2454">
                                    <textPath xlinkHref="#circlePath"> . travel guide . travel agency </textPath>
                                </text>
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
        </div>

        {/* counter section */}
        <div className="counter-section relative py-20 md:py-40" style={{ background: 'url(https://duruthemes.com/demo/html/travol/multipage-video/img/slider/15.jpg) center fixed', backgroundSize: 'cover' }}>
            <div className="w-full text-white text-8xl md:flex justify-center">
                <div className="text-center mb-10 md:mb-0">
                    <div className="rounded-full inline-block bg-slate-50/50">
                        <SlPlane className=" px-7 py-7"></SlPlane>
                    </div>
                    <div className="text-4xl font-bold poppins mt-3 text-center">
                        <CountUp enableScrollSpy={true} end={600} />
                        <h4 className="text-xl">Flight Booking</h4>
                    </div>
                </div>

                <div className="flex justify-center items-center hidden md:block">
                    <img src="https://duruthemes.com/demo/html/travol/multipage-video/img/arrow1.png" className="rotate-180 w-48 hidden md:block" alt="" />
                </div>
                <div className="text-center mb-10 md:mb-0">
                    <div className="rounded-full inline-block bg-slate-50/50">
                        <RiHotelLine className=" px-7 py-7"></RiHotelLine>
                    </div>
                    <div className="text-4xl font-bold poppins mt-3 text-center">
                        <CountUp enableScrollSpy={true} end={250} />
                        <h4 className="text-xl">Amazing Tour</h4>
                    </div>
                </div>
                <div>
                    <img src="https://duruthemes.com/demo/html/travol/multipage-video/img/arrow1.png" className="mt-24 block w-48 hidden md:block" alt="" />
                </div>
                <div className="text-center mb-10 md:mb-0">
                    <div className="rounded-full inline-block bg-slate-50/50">
                        <RiShip2Line className=" px-7 py-7"></RiShip2Line>
                    </div>
                    <div className="text-4xl font-bold poppins mt-3 text-center">
                        <CountUp enableScrollSpy={true} end={180} />
                        <h4 className="text-xl">Cruises Booking</h4>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://duruthemes.com/demo/html/travol/multipage-video/img/arrow1.png" className="rotate-180 w-48 hidden md:block" alt="" />
                </div>
                <div className="text-center mb-10 md:mb-0">
                    <div className="rounded-full inline-block bg-slate-50/50">
                        <HiOutlineTicket className=" px-7 py-7"></HiOutlineTicket>
                    </div>
                    <div className="text-4xl font-bold poppins mt-3 text-center">
                        <CountUp enableScrollSpy={true} end={340} />
                        <h4 className="text-xl">Ticket Booking</h4>
                    </div>
                </div>

            </div>
        </div>

        {/* Populer Tours */}
        <div className="text-center my-32">
            <h1 className="arvo mb-10 text-4xl md:text-5xl md:leading-tight font-bold">Populer <span className="text-primary">Tours</span></h1>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-0">
                    <Link to='/service/63ff3dd99dd362968d72cdaf' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl md:col-span-2">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$3400</span>
                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/maldives1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Maldevs Guide</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>
                    </Link>
                    <Link to='service/63ff3fe79dd362968d72cdb0' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$1000</span>
                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/italy1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Italy</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>

                    </Link>
                    <Link to='/service/63ff41579dd362968d72cdb1' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$1200</span>
                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/france1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">France Tour</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>

                    </Link>
                    <Link to='/service/63ff42109dd362968d72cdb2' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$1800</span>

                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/greece1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Greece Tour</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>

                    </Link>
                    <Link to='/service/63ff42429dd362968d72cdb3' className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                        <span className="rounded p-2 text-xs bg-primary absolute top-5 right-5 text-white">$4000</span>
                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/canada1.jpg" alt="" />
                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                            <p className="poppins text-2xl font-bold text-white">Canada Tour</p>
                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                            <p className="mt-2 text-white text-xs hidden-text">
                                Get update to special deals and exclusive offers. <br />
                                Sign up to our newsletter!
                            </p>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
        {/* video section */}
        <div className='video-section'>
            <div>
                {/* <video className="video" width="100%" height="100%" autoplay muted="" preload="auto" loop="loop">
                    <source src="https://duruthemes.com/demo/html/travol/travel-video.mp4" type="video/mp4" />
                </video> */}
                <video src={video} autoPlay muted loop></video>
            </div>
            <div className="absolute z-10 top-[30%] md:top-[43%] laft-0 w-full">
                <div>
                    <h1 className="poppins text-4xl font-bold text-center text-white">Costa Victoria Cochin</h1>
                    <p className="text-center mt-3 text-white"><CiLocationOn className="text-lg inline-block"></CiLocationOn> Maldives  <CiTimer className="text-lg ml-1 inline-block"></CiTimer> 4 Days + 3 Nights</p>
                </div>

            </div>
        </div>

        {/* most-populer country */}
        <div className="max-w-6xl mx-auto my-32 px-10 md:px-0">
            <p className="text-sm text-primary mb-0 tracking-widest">MOST POPULAR</p>
            <h3 className="poppins mt-0 text-gray-600 mb-4 text-5xl font-extrabold ">TRAVEL <span className="text-primary">COUNTRIES</span> <br /></h3>
            <div className="md:flex gap-10 my-16">
                <div className="md:w-3/6" style={{ background: 'url(https://duruthemes.com/demo/html/travol/multipage-video/img/map1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                    <h3 className="poppins text-4xl font-bold mt-5">ITALY, EUROPE</h3>
                    <p className="mt-5">We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                    <ul className="grid grid-cols-3 text-gray-500 gap-5 mt-10">
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Rome</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Venice</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> San Mario</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Milan</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Florence</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Verona</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Perugia</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Aosta</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Parma</li>
                    </ul>
                </div>
                <div className="md:w-3/6 mt-10 md:mt-0">
                    <div className="w-full hidden md:block">
                        <Swiper
                            cssMode={false}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={false}
                            keyboard={true}
                            autoplay={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                                Autoplay,
                            ]}
                            slidesPerView={2}
                            spaceBetween={20}

                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/italy1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/canada1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/maldives1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                    <div className="w-full block md:hidden">
                        <Swiper
                            cssMode={false}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={false}
                            keyboard={true}
                            autoplay={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                                Autoplay,
                            ]}
                            slidesPerView={1}
                            spaceBetween={20}

                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/italy1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/canada1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/maldives1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-10 my-32">
                <div className="md:w-3/6">
                    <div className="w-full block md:hidden">
                        <Swiper
                            cssMode={false}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={false}
                            keyboard={true}
                            autoplay={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                                Autoplay,
                            ]}
                            slidesPerView={1}
                            spaceBetween={20}

                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/greece1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/france1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Paris Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/dubai1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Dubai</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/italy1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Italy Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-full hidden md:block">
                        <Swiper
                            cssMode={false}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={false}
                            keyboard={true}
                            autoplay={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                                Autoplay,
                            ]}
                            slidesPerView={2}
                            spaceBetween={20}

                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/greece1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Maldevs Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/france1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Paris Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/destination/dubai1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Dubai</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative service-card overflow-hidden bg-[#000000] rounded-2xl">
                                        <img className="rounded-2xl" src="https://duruthemes.com/demo/html/travol/multipage-video/img/tours/italy1.jpg" alt="" />
                                        <div className="p-5 absolute bottom-0 left-0 z-10 text-left w-full custom-text-box">
                                            <p className="poppins text-2xl font-bold text-white">Italy Tour</p>
                                            <hr className="w-20 mt-3 custom-hover-width border-[#ffffff]" />
                                            <p className="mt-2 text-white text-xs hidden-text">
                                                Get update to special deals and exclusive offers. <br />
                                                Sign up to our newsletter!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="md:w-3/6" style={{ background: 'url(https://duruthemes.com/demo/html/travol/multipage-video/img/map1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
                    <h3 className="poppins text-4xl font-bold mt-5">Canada, EUROPE</h3>
                    <p className="mt-5">We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                    <ul className="grid grid-cols-3 text-gray-500 gap-5 mt-10">
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Rome</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Venice</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> San Mario</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Milan</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Florence</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Verona</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Perugia</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Aosta</li>
                        <li className="flex gap-2 items-center"><CiLocationOn className="text-2xl text-primary"></CiLocationOn> Parma</li>
                    </ul>
                </div>

            </div>
        </div>

        {/* subscribe section */}
        <div className="my-28 max-w-6xl mx-auto">
            <div className="md:flex gap-10 px-5 md:px-0">
                <div className="basis-1/2 mb-10 md:mb-0 rounded-2xl p-10" style={{background: 'url(https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/06/beach-bg.jpg) top', backgroundSize: 'cover'}}>
                    
                    <div className="top-5 left-5 md:top-12 md:left-12">
                        <p className="arvo text-4xl font-bold text-white">Discover Special Deals!</p>
                        <p className="mt-7 text-white">
                            Get update to special deals and exclusive offers. <br />
                            Sign up to our newsletter!
                        </p>
                        <button className="btn btn-primary mt-7 text-xs">See Tours</button>
                    </div>
                </div>
                <div className="bg-gray-200 p-12 basis-1/2 rounded-2xl ">
                    <h3 className="text-4xl font-bold arvo">Don't miss a thing</h3>
                    <p className="mt-7">
                        Get update to special deals and exclusive offers. <br />
                        Sign up to our newsletter!
                    </p>
                    <IconContext.Provider value={{ className: "text-gray-400 top-3 left-5" }}>
                        <div className="mt-7 relative text-gray-500">
                            <RiSendPlaneLine className="text-2xl absolute"></RiSendPlaneLine>
                            <input type="text" className="input w-full rounded-full pl-16" placeholder="Your Email Address" />
                            <button className="btn btn-primary md:absolute w-full mt-5 md:mt-0 md:w-auto top-0 right-0 rounded-full text-xs px-10">Subscribe</button>
                        </div>
                    </IconContext.Provider>

                </div>
            </div>
        </div>
        {/* pre footer */}
        {/* <div>
            <div>
                <div>
                    <img src="https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/07/icon-earth.png" className="w-28" alt="" />
                    <div>
                        <h3 className="arvo text-4xl font-bold">700 Destinations</h3>
                    </div>
                </div>
            </div>
        </div> */}
    </div>;
};

export default Home;
