import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import Script from 'next/script';

import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
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
        <Carousel
          showThumbs={false}
          interval={3000}
          autoPlay={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showArrows={false}

        >
          <div>
            <img
              src="/images/carousel-1.png"
              alt="image1"
              width={80}
              height={40}
              className=""
            />
          </div>
          <div>
            <img
              src="/images/carousel-2.png"


              alt="image2"
              width={80}
              height={40}
            />
          </div>
          <div>
            <img
              src="/images/carousel-3.png"

              alt="image3"
              width={80}
              height={40}
            />
          </div>
          <div>
            <img
              src="/images/carousel-5.png"

              alt="image4"
              width={80}
              height={40}
            />
          </div>
          {/* <div>
            <img
              src="/images/carousel-5.png"

              alt="image5"
              width={80}
              height={40}
            />
            </div>*/}
        </Carousel>
      </div>
      {/* Carousel Ends */}

      <div className='text-5xl  text-center text-[#0C2535] xl:mx-48 xl:py-8  font-semibold'


      >
        The #1 Provider of student recruitment & enrolment services in South Asia.
      </div>

      <div className='xl:mx-48 xl:py-8 xl:font-thin text-2xl text-justify'>
        With offices in India and the UK, Global Student Centre Enrolment Solutions is a global market leader for research and understanding of international and domestic students. Each year we deal with hundreds of thousands of students globally, giving us a unique insight into the student recruitment market. Our research, strategy, enquiry, admissions and enrolment services mean we have hands-on experience of the obstacles and opportunities within specific countries and regions, helping clients mitigate risk, benefit from our existing relationships, and build sustainable recruitment strategies in an increasingly complex marketplace.
      </div>

      <hr className=' text-cyan-600' />

      <div className='flex flex-wrap xl:mx-48 xl:mt-12 xl:ml-72' id='services'>
        <Link href="/services/admission-support">
          <div className='bg-white rounded-md border-2 border-black xl:h-96 xl:w-96 xl:m-6 xl:py-12'>
            <div className='xl:h-32 xl:w-80 bg-transparent xl:ml-8'>
              <img src='/v-icons/technical-support.png' className='w-28 h-28' />
            </div>

            <div className='  xl:h-24 xl:m-4 xl:w-80 xl:ml-8'>
              <div className='text-2xl font-semibold text-[#0C2535]'>Admissions Support</div>
              <p className='text-xl text-justify'>Our core expertise in reviewing applications and issuing offers based on the policies
                of the University and Government regulations.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/international-student-call-centre">

          <div className='bg-white rounded-md border-2 border-black xl:h-96 xl:w-96 xl:m-6 xl:py-12 xl:ml-12'>
            <div className='xl:h-32 xl:w-48 bg-transparent xl:ml-8'>
              <img src='/v-icons/start-call.png' className='w-28 h-28' />
            </div>

            <div className='  xl:h-24 xl:m-4 xl:w-80 xl:ml-8'>
              <div className='text-2xl font-semibold text-[#0C2535]'>International Student
                Call Centre</div>
              <p className='text-xl text-justify'>Assuring real time response and resolutions to student and participants queries
                about every aspect of university.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/due-diligence">

          <div className='bg-white rounded-md border-2 border-black xl:h-96 xl:w-96 xl:m-6 xl:py-12'>

            <div className='xl:h-32 xl:w-80 bg-transparent xl:ml-8'>
              <img src='/v-icons/end-call.png' className='w-28 h-28' />
            </div>
            <div className='  xl:h-24 xl:m-4 xl:w-80 xl:ml-8'>
              <div className='text-2xl font-semibold text-[#0C2535]'>Due Diligence</div>
              <p className='text-xl text-justify'>Ensuring each applicant is diligently reviewed and classified to be the next potential
                student , with commitment of 48 hours SLA</p>
            </div>
          </div>
        </Link>
        <Link href="/services/student-recruitment">

          <div className='bg-white rounded-md border-2 border-black xl:h-96 xl:w-96 xl:m-6 xl:py-12 xl:ml-12'>

            <div className='xl:h-32 xl:w-80 bg-transparent xl:ml-8'>
              <img src='/v-icons/recruitment4.png' className='w-28 h-28' />
            </div>
            <div className='  xl:h-24 xl:m-4 xl:w-80 xl:ml-8'>
              <div className='text-2xl font-semibold text-[#0C2535]'>Recruitment</div>
              <p className='text-xl text-justify'>Assisting Universities to optimize their potential in student recruitment, Agent
                engagements and sustainable brand positioning in the Region.</p>
            </div>
          </div>
        </Link>
        <Link href="/services/marketing">

          <div className='bg-white rounded-md border-2 border-black xl:h-96 xl:w-96 xl:m-6 xl:ml-64 xl:py-12'>
            <div className='xl:h-32 xl:w-80 bg-transparent xl:ml-8'>
              <img src='/v-icons/market.png' className='w-28 h-28' />
            </div>
            <div className='  xl:h-24 xl:m-4 xl:w-80 xl:ml-8'>
              <div className='text-2xl font-semibold text-[#0C2535]'>Marketing and PR</div>
              <p className='text-xl text-justify'>Providing research, potential targeting and supporting with branding and events in
                the region to establish brand presence and grow enrolment.</p>
            </div>

          </div>
        </Link>
      </div>

      <hr className=' border-cyan-800 xl:mt-12 ' />

      <div className={`text-6xl  font-[Imprint MT shadow] xl:mx-48 xl:py-4 xl:pt-12 text-center  bg-clip-text bg-gradient-to-r from-purple-600 to-red-600  text-transparent font-extrabold`}


      >
        Shared Goals,
        Shared Gains
      </div>


      <div className='xl:mx-48 xl:py-4 xl:pb-12 text-2xl text-center '>
        As your partner, GSC acts as an extension of your university, with the same goals
        and successes – and all our advisors & officers become brand ambassadors of your
        university.
      </div>

      <hr className=' border-cyan-800 xl:py-6 xl:pb-16' />
      {/* <hr className=' border-cyan-200 xl:py-6' /> */}

      <div>
        <img
          src="/images/carousel-1.png"
          alt="image1"
          width="1280px"
          height="500px"
          className="xl:mx-32 "
        />
        <img
          src="/images/hero-content-2.png"
          alt="image1"
          width="1280px"
          height="500px"
          className="xl:mx-32 xl:pb-16 xl:mt-12"
        />
      </div>

      {/* <hr className=' text-cyan-600' /> */}

      <div className='bg-gray-200'>


      </div>

      <hr className=' border-cyan-800 ' />

      <div >
        <img
          src="/images/How-can-outsourcing-web.png"
          alt="image1"
          width="1280"
          height="500px"
          className="xl:mx-32 xl:py-12"
        />
      </div>


      <Footer />

    </>
  )
}






