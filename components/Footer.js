import React from "react";
import Link from "next/link";
import Form from "./Form";

function Footer() {
    return (
        <>
            <footer className='w-100 h-full bg-[#0C2535] '>
                <div className="h-16"></div>
                <Form />
                <div className='xl:ml-24 flex flex-row'>
                    <div className='text-white w-56 h-40 xl:m-16 xl:ml-36'>
                        <div className=' text-xl font-semibold pb-6'>Introduction</div>
                        <p className='font-light py-2 text-sm text-justify'>Global Student Centre is a data-led business and the leading provider of white labelled enrolment and engagement services to higher education institutions around the globe.</p>
                    </div>
                    <div className='text-white font-semibold text-xl w-56 h-40 xl:m-16 xl:ml-36'>

                        <div className=' text-xl font-semibold pb-6'>Reach out to us</div>
                        <div className='py-2'> <span> <span className=''><img className='inline mx-1' src='/v-icons/v-loc.png'></img></span> India</span></div>
                        <div className='py-2'> <span> <span className=''><img className='inline mx-1' src='/v-icons/v-phone.png'></img></span> +91 89 85 89 00 00</span></div>
                        <div className='py-2'> <span> <span className=''><img className='inline mx-1' src='/v-icons/v-loc.png'></img></span> UK</span></div>
                        <div className='py-2'> <span> <span className=''><img className='inline mx-1' src='/v-icons/v-phone.png'></img></span> +44 12 23 92 6368</span></div>
                        {/* <div className='py-2'> <span> <span className=''><img className='inline mx-1' src='/v-icons/v-time.png'></img></span>  9 am - 9 pm</span></div> */}
                    </div>
                    <div className='w-64 h-40 xl:m-16 xl:ml-36'>
                        <div className=' text-xl py-2 pb-6 text-white ml-2 font-semibold'>Social Network</div>
                        <div className='flex flex-row'>
                            <Link href={"https://www.facebook.com/profile.php?id=100083046441443"}> <img src='/v-icons/v-fb.png' className='m-2 h-10 w-10'></img></Link>
                            <Link href={""}> {/* <img src='/v-icons/v-in.png' className='m-2 h-8 w-10'></img> */}</Link>
                            <Link href={""}> {/* <img src='/v-icons/v-tw.png' className='m-2 h-8 w-10'></img> */}</Link>
                            <Link href={"https://www.youtube.com/channel/UCM5ZTrvH_7fReLbTCLQTIYw"}> <img src='/v-icons/v-yt.png' className='m-2  '></img></Link>
                            <Link href={"https://www.linkedin.com/company/77661200/admin/"}> <img src='/v-icons/v-li.png' className='m-2 h-10 w-10'></img></Link>
                        </div>
                    </div>

                </div>

                <div className='mx-48 shadow md:flex md:items-center md:justify-between md:p-6 xl:ml-52 '>
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Global Student Centre</Link> -  All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">


                        <li>
                            <Link href="/GDPR-Policy- Global Student Centre.pdf" className="mr-4 hover:underline md:mr-6">GDPR Policy</Link>
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
