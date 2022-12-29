import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const admissionSupport = () => {
    return (
        <>
            <Navbar />

            <img src='/images/carousel-1.png'></img>



            <div className='text-4xl text-center  text-gray-600 xl:mx-48 xl:py-8  font-semibold'>
                Admissions Support   </div>

            <div className='xl:mx-48 xl:py-4 xl:font-thin text-2xl text-justify'>
                <p className='py-2'>
                    Global Student Centre’s Admissions support is at the heart of putting the University’s mission into practice by admitting those applicants who will
                    be best able to benefit from an education in the respective institution.
                </p>
                <p className='py-2'>
                    The Admissions support manages a fair, transparent and consistent
                    admissions process to undergraduate and postgraduate programmes,
                    providing advice and support to prospective students and academic
                    departments.
                </p>
                <p className='py-2'>

                    Working with the wider University community and schools on a wide
                    range of admissions-related issues, the Admissions support ensures
                    compliance with University regulations and relevant government
                    legislation.
                </p>
            </div>

            <div className='text-4xl text-center  text-gray-600 xl:mx-48 xl:py-8  font-semibold'>
                Admissions Support   </div>

            <div className='xl:mx-48 xl:py-4 xl:font-thin text-2xl text-justify'>
                <ul className='list-disc xl:ml-6 '>
                    <li className='py-2' >  Evaluate transcripts based on requirements of respective schools</li>
                    <li className='py-2' >  Identify potential threat</li>
                    <li className='py-2' >  Review Government papers (Passport, English Language proficiency)</li>

                    <li className='py-2' >  Process offers based on University and Government guidelines</li>
                    <li className='py-2' >  Report threats to recruitment team</li>
                </ul>
            </div>

            <div className='xl:mx-48 py-8'>
                <img src='/images/Admissions support info.png' className='h-full w-full'></img>
            </div>

            <div className='text-4xl text-center  text-gray-600 xl:mx-48 xl:py-8  font-semibold'>
                Our Admissions Support Officers
            </div>

            <div className='xl:mx-48 xl:py-4 xl:font-thin text-2xl text-justify'>
                <ul className='list-disc xl:ml-6 '>
                    <li className='py-2'> Evaluate applications from prospective students</li>
                    <li className='py-2'> Handle intake requirements</li>
                    <li className='py-2'> Support screening of submitted documents</li>
                    <li className='py-2'> Evaluate transcripts and identify prospects for respective    schools</li>
                    <li className='py-2'> Evaluate and distinguish government papers</li>
                    <li className='py-2'> Identify qualification criteria</li>
                    <li className='py-2'> Determine qualification of applicant</li>
                    <li className='py-2'> Process offers based on University and Government laid policies</li>
                </ul>
            </div>

            <Footer />
        </>
    )
}

export default admissionSupport