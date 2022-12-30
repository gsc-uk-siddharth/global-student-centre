import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import Script from 'next/script';

import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import Carousel from '../components/CarouselComponent';
import Form from '../components/Form';

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < >


      <Navbar />




      {/* Carousel Starts */}
      <div className="">
        <Carousel />
      </div>
      {/* Carousel Ends */}

      <div className='text-2xl py-4 xl:text-5xl xl:border-3 xl:border-emerald-400  text-center bg-gradient-to-b from-sky-400 via-green-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg shadow-black xl:mx-48 xl:py-10 xl:mt-4  font-semibold'


      >
        The <span className=''>#1</span>  Provider of student recruitment & enrolment services in South Asia.
      </div>

      <div className='py-4 mx-8 text-sm text-justify xl:mx-48 xl:py-8 xl:font-light xl:text-xl'>
        With offices in India and the UK, Global Student Centre Enrolment Solutions is a global market leader for research and understanding of international and domestic students. Each year we deal with hundreds of thousands of students globally, giving us a unique insight into the student recruitment market. Our research, strategy, enquiry, admissions and enrolment services mean we have hands-on experience of the obstacles and opportunities within specific countries and regions, helping clients mitigate risk, benefit from our existing relationships, and build sustainable recruitment strategies in an increasingly complex marketplace.
      </div>

      <hr className=' border-cyan-300' />

      <div className='flex flex-wrap pt-4 mx-8 xl:mx-36 xl:mt-8 xl:ml-64' id='services'>
        <Link href="/services/admission-support">

          <div className='w-64 h-72 bg-white border-2 rounded-md border-cyan-300 xl:h-72 xl:w-72 xl:m-6 xl:py-6'>


            <img src='/v-icons/technical-support.png' className=' xl:mx-20 xl:w-24 xl:h-24' />


            <div className=' xl:h-28 xl:m-2 xl:w-64 xl:ml-4'>
              <div className='text-sm xl:text-lg xl:ml-0  text-center font-semibold text-[#0C2535]'>Admissions Support</div>
              <p className='mx-4 text-sm  text-justify xl:text-sm  xl:mt-2 xl:ml-2 '>Our core expertise in reviewing applications and issuing offers based on the policies
                of the University and Government regulations.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/international-student-call-centre">

          <div className='bg-white border-2 rounded-md border-cyan-300  xl:h-72 xl:w-72 xl:m-6 xl:py-6'>

            <img src='/v-icons/start-call.png' className=' xl:mx-20 xl:w-24 xl:h-24' />

            <div className=' xl:h-24 m-2 xl:w-64 xl:ml-4'>
              <div className='text-sm xl:text-lg xl:ml-0  text-center font-semibold text-[#0C2535]'>International Student
                Call Centre</div>
              <p className='mx-4 text-sm  text-justify xl:text-sm xl:mt-2 xl:ml-2 xl:mx-4 tracking-tight'>Assuring real-time response and resolutions to student and participants queries
                about each aspect of university.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/due-diligence">

          <div className='bg-white border-2 rounded-md border-cyan-300  xl:h-72 xl:w-72 xl:m-6 xl:py-6'>


            <img src='/v-icons/end-call.png' className=' xl:mx-20 xl:w-24 xl:h-24' />

            <div className=' xl:h-24 xl:m-2 xl:w-64 xl:ml-4'>
              <div className='text-sm xl:text-lg xl:ml-0  text-center font-semibold text-[#0C2535]'>Due Diligence</div>
              <p className='mx-4 text-sm  text-justify xl:text-sm tracking-tight  xl:mt-2 xl:mx-4 xl:ml-2'>Ensuring each applicant is diligently reviewed and classified to be the next potential
                student , with commitment of 48 hours SLA</p>
            </div>
          </div>
        </Link>
        <Link href="/services/student-recruitment">

          <div className='bg-white border-2 rounded-md border-cyan-300  xl:h-72 xl:w-72 xl:m-6 xl:py-6 xl:ml-40'>

            <img src='/v-icons/recruitment4.png' className=' xl:mx-20 xl:w-24 xl:h-24' />

            <div className=' xl:h-24 xl:m-2 xl:w-64 xl:ml-4'>
              <div className='text-sm xl:text-lg xl:ml-0  text-center font-semibold text-[#0C2535]'>Recruitment</div>
              <p className='mx-4 text-sm  text-justify xl:text-sm xl:mt-2 xl:mx-4 xl:ml-2'>Assisting Universities to optimize their potential in student recruitment, Agent
                engagements and sustainable brand positioning in the Region.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/marketing">

          <div className='bg-white border-2 rounded-md border-cyan-300  xl:h-72 xl:w-72 xl:m-6 xl:py-6'>

            <img src='/v-icons/market.png' className=' xl:mx-20 xl:w-24 xl:h-24' />

            <div className=' xl:h-24 xl:m-2 xl:w-64 xl:ml-4'>
              <div className='text-sm xl:text-lg xl:ml-0  text-center font-semibold text-[#0C2535]'>Marketing and PR</div>
              <p className='mx-4 text-sm  text-justify xl:text-sm xl:mt-2 xl:mx-4 xl:ml-2 tracking-tight'>Providing research, potential targeting and supporting with branding and events in
                the region to establish brand presence and grow enrolment.</p>
            </div>

          </div>
        </Link>
      </div>

      <hr className=' border-cyan-300 xl:mt-12' />

      <div className={`text-6xl  font-[Imprint MT shadow] xl:mx-48 xl:py-4 xl:pt-12 text-center bg-gradient-to-bl from-sky-400 via-green-400 to-blue-600 bg-clip-text text-transparent font-extrabold`}


      >
        Shared Goals,
        Shared Gains
      </div>


      <div className='text-2xl text-center xl:mx-48 xl:py-4 xl:pb-12 '>
        As your partner, GSC acts as an extension of your university, with the same goals
        and successes – and all our advisors & officers become brand ambassadors of your
        university.
      </div>

      <hr className=' border-cyan-300' />
      {/* <hr className=' border-cyan-200 xl:py-6' /> */}

      <div className='xl:pt-10'>

        <div className='xl:ml-80'>
          <img
            src="/images/c-1.webp"
            alt="image1"

            className="w-9/12 h-9/12"
          />
        </div>






      </div>

      <hr className=' border-cyan-300 xl:mt-10' />

      <div className='text-2xl xl:mx-36  py-8 xl:text-3xl  text-center text-[#00ccd3] drop-shadow-lg shadow-black font-semibold'
      >
        How can outsourcing resource–intensive areas of student
        recruitment to Global Student Centre help your institution
        control costs and effectively enroll more international
        students
      </div>
      <div >
        <div className='xl:ml-80 xl:pt-4 xl:mb-12'>
          <img
            src="/images/infographics/home-submenu.webp"
            alt="image1"

            className="w-9/12 h-9/12 "
          />
        </div>
      </div>


      <Footer />

    </>
  )
}






