import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Form from '../../components/Form'

const dueDiligence = () => {
    return (
        <>
            <Navbar />


            <img src='/images/c-4.webp'></img>


            <div className='text-4xl font-semibold text-center text-[#00ccd3]  xl:mx-48 xl:mt-8'>
                Due Diligence
            </div>

            <div className='xl:mx-48 xl:font-thin text-2xl text-justify'>
                <div className=' xl:py-8 xl:font-thin text-xl text-justify'>
                    Due Diligence of Applications are an important part of the Enrolment process. They provide a sense of security for universities and can help
                    to weed out any potentially dangerous applicants. But Due Diligence is a
                    time-consuming, important tasks that take up valuable internal
                    resources. Outsourcing your Due Diligence to Global Student Centre
                    can help you save the valuable resources and the associated time.
                </div>




            </div>
            <div className='xl:mx-48 xl:py-2 xl:font-light text-2xl text-justify'>
                <div className=' xl:py-4 xl:font-light text-xl text-justify'>
                    Due Diligence of Applications makes the enrolment process a lot faster
                    and more efficient, as background checking companies have the
                    necessary tools and resources in performing various checks faster.
                    Outsourcing your Due Diligence will also have a positive effect on the
                    diversity of students you need, and would also provide a positive remark
                    with your respective country’s immigration, and have a greater sense of
                    security, as they know that Due Diligence checks are being carried out
                    by a reputed organization that is an expert in this field.
                </div>




            </div>
            <hr className=' border-cyan-300' />

            <div className='text-4xl text-center  text-[#00ccd3] xl:mx-48 xl:py-8  font-semibold'>
                Global Student Centre’s Due Diligence division drives on the following KPIs </div>

            <div className='xl:mx-48 xl:py-4 xl:font-thin text-xl text-justify'>
                <ol className=''>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>48 hours Due Diligence results for SLAs


                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>Accuracy



                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>Identification of critical parameters based on University and
                            Government legislations


                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>Detailed reporting


                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Supporting Admissions team

                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>Evaluation to provide security to Institutions Sponsorship license

                        </div>
                    </li>


                </ol>

            </div>

            <hr className=' border-cyan-300' />

            <div className='text-4xl font-semibold text-center text-[#00ccd3]  xl:mx-48 xl:py-8'>
                Admission Support Officers
            </div>


            <div className='xl:ml-96'>
                <img src='/images/infographics/Admissions support info.png' className='w-6/12 h-6/12 xl:ml-24'></img>
            </div>

            <hr className=' border-cyan-300' />

            <div className='xl:mx-2 py-8'>
                <img src='/images/infographics/due-diligence-process.png' className='w-3/5 h-3/5 xl:ml-72'></img>
            </div>

            <hr className=' border-cyan-300' />

            <Form />
            <Footer />



        </>
    )
}

export default dueDiligence