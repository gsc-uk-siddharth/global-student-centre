import React from "react";
import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    // console.log(isDropdownVisible);
    return (
        <>
            {/* Navbar Starts */}
            <div className='container flex flex-wrap items-end justify-end   text-white xl:pt-2 bg-[#0C2535]'>
                <ul className='flex flex-row space-x-28 xl:ml-48 xl:pr-48 font-semibold'>

                    <li className='xl:ml-32'>
                        <li><img src="/v-icons/v-loc.png " className='inline px-2 text-white ' /> India </li>
                        <img src="/v-icons/v-phone.png" className='inline px-2' /> +91 89 85 89 0000

                    </li>
                    <li className=''>
                        <li><img src="/v-icons/v-loc.png " className='inline px-2' /> UK </li>
                        <img src="/v-icons/v-phone.png" className='inline px-2' /> +44 12 23 92 6368
                    </li>
                    <li className='pt-2'><img src="/v-icons/v-time.png" className='inline px-2 ' /> 9am - 9pm</li>
                </ul>
            </div>
            {/* <nav className="bg-[#04f4e926]  px-2 sm:px-4  xl:px-48 xl:h-28  dark:bg-gray-900 border-b-4 border-cyan-900"> */}
            <nav className="bg-[#0C2535]  px-2 sm:px-4  xl:px-48 xl:h-28  dark:bg-gray-900 border-b-4  border-cyan-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto ">

                    <Link href="/" className="flex items-center">
                        <div className='w-40 h-24'>
                            <img
                                src="/logo-white.png"
                                className="w-20 h-6 mr-3 sm:h-9 xl:h-full xl:w-full"
                                alt="GSC Logo"
                            />
                        </div>
                    </Link>
                    <div className="flex md:order-2">
                        {/* <button
            type="button"
            className="text-white bg-cyan-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download Brochures
          </button> */}
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col p-4    rounded-lg bg-[#04f4e926] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#04f4e802] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>


                                <button
                                    id="dropdownDefault"
                                    data-dropdown-toggle="dropdown"
                                    className="block py-2 ml-24 pr-4 text-white font-semibold rounded xl:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    type="button"
                                >
                                    Services{" "}
                                    <svg
                                        className="ml-2 w-4 h-4 inline"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdown"
                                    className="hidden z-10 w-64 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                                >
                                    <ul
                                        className="py-1 text-sm w-56 ml-3 text-white dark:text-gray-200"
                                        aria-labelledby="dropdownDefault"
                                    >
                                        <li>
                                            <Link
                                                href="/services/admission-support"
                                                className="block text-lg  py-2 px-4 text-black hover:text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                                            >
                                                Admissions Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/international-student-call-centre"
                                                className="block text-lg  py-2 px-4 text-black hover:text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                                            >
                                                International Student Call Centre
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/due-diligence"
                                                className="block text-lg  py-2 px-4 text-black hover:text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                                            >
                                                Marketing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/student-recruitment"
                                                className="block text-lg  py-2 px-4 text-black hover:text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                                            >
                                                Student Recruitment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/services/due-diligence"
                                                className="block text-lg  py-2 px-4 text-black hover:text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                                            >
                                                Due Diligence
                                            </Link>
                                        </li>

                                    </ul>
                                </div>




                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 ml-3 pr-4 text-white font-semibold rounded xl:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 pl-3 pr-4 text-white font-semibold rounded xl:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/articles"
                                    className="block py-2 pl-3 pr-4 text-white font-semibold rounded xl:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Articles
                                </Link>
                            </li>
                            {/* <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-500 font-semibold rounded xl:text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Apply
              </Link>
            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar Ends */}
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
        </>

    );
};

export default Navbar;
