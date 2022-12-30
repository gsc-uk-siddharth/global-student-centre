import React from "react";
import Link from "next/link";
import Form from "./Form";

function Footer() {
    return (
        <>
            <footer className=' hidden xl:block w-100 h-full bg-[#0C2535] '>


                <div className='flex flex-row xl:ml-24'>
                    <div className='w-56 h-40 text-white xl:m-16 xl:ml-36'>
                        <div className='pb-6 text-xl font-semibold '>Introduction</div>
                        <p className='py-2 text-sm text-justify '>
                            Global Student Centre is a data-led business and the leading provider of white labelled enrolment and engagement services to higher education institutions around the globe.
                        </p>
                    </div>
                    <div className='w-64 h-40 text-xl text-white xl:m-16 xl:ml-36'>

                        <div className='pb-6 text-xl'>Reach out to us</div>


                        <div className='flex w-64 py-2 text-sm flex-cols'>
                            <img className='w-4 h-6 mx-1' src='/v-icons/v-loc.png'></img>
                            <div className="mx-2"> H-1070, Solitare Business Hub, Viman Nagar, Pune, India  </div>
                        </div>

                        <div className='py-2 text-sm '>
                            <img className='inline mx-1' src='/v-icons/v-phone.png' />
                            +91 89 85 89 00 00
                        </div>
                        <div className='flex w-64 py-2 text-sm flex-cols'>
                            <img className='w-4 h-6 mx-1' src='/v-icons/v-loc.png'></img>
                            <div className="mx-2"> 71 - 75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom  </div>
                        </div>

                        <div className='py-2 text-sm'>
                            <img className='inline mx-1' src='/v-icons/v-phone.png' />
                            +44 12 23 92 6368
                        </div>

                    </div>
                    <div className='w-64 h-40 xl:m-16 xl:ml-36'>
                        <div className='py-2 pb-6 ml-2 text-xl font-semibold text-white '>Social Network</div>
                        <div className='flex flex-row '>
                            <Link href={"https://www.facebook.com/profile.php?id=100083046441443"}> <img src='/v-icons/v-fb.svg' className='w-10 h-10 m-2'></img></Link>
                            <Link href={""}> {/* <img src='/v-icons/v-in.png' className='w-10 h-8 m-2'></img> */}</Link>
                            <Link href={""}> {/* <img src='/v-icons/v-tw.png' className='w-10 h-8 m-2'></img> */}</Link>
                            <Link href={"https://www.youtube.com/channel/UCM5ZTrvH_7fReLbTCLQTIYw"}> <img src='/v-icons/v-yt.svg' className='m-2 '></img></Link>
                            <Link href={"https://www.linkedin.com/company/77661200/admin/"}> <img src='/v-icons/v-li.svg' className='w-10 h-10 m-2'></img></Link>
                        </div>
                    </div>

                </div>

                <div className='mx-48 shadow md:flex md:items-center md:justify-between md:p-6 xl:ml-52 '>
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Global Student Centre</Link> -  All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">


                        <li>
                            <Link href="/files/GDPR-Policy- Global Student Centre.pdf" className="mr-4 hover:underline md:mr-6">GDPR Policy</Link>
                        </li>
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About  </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact </Link>
                        </li>
                        <li>
                            <Link href="/articles" className="hover:underline xl:ml-4"> Articles </Link>
                        </li>
                    </ul>
                </div>
            </footer>


        </>
    );
}

export default Footer;
