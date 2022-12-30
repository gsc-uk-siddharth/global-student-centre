import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Form from '../../components/Form'

const studentRecruitment = () => {
    return (
        <>
            <Navbar />

            <img src='/images/c-2.webp'></img>


            <div className='text-4xl text-center xl:py-8  text-[#00ccd3] xl:mx-48  font-semibold'>
                Student Recruitment  </div>

            <div className='text-2xl text-justify xl:mx-48 xl:font-thin'>
                <div className='text-xl text-justify xl:mb-8 xl:font-thin'>
                    Indian Outbound Student Mobility has been on a constant rise and this is
                    expected to continue over the foreseeable future. Diverse background
                    and huge population of the country makes it important for foreign
                    universities/institutions to have an in-market presence. In country offices
                    enable the Institution/University to make decisions such as choosing
                    potential partners, represent University at various education events and
                    be an on-ground support for various activities held in the country.
                </div>




            </div>

            <hr className=' border-cyan-300' />
            <div className='text-4xl text-center   text-[#00ccd3] xl:mx-48 xl:py-8  font-semibold'>
                Key Facts  </div>

            <div className='text-xl text-justify xl:mx-48 xl:py-4 xl:font-thin'>
                <ul className='list-none'>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''>  India is the second largest market after China with approx.
                            3,00,000 Indian students moving abroad for Higher Education
                            every year

                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''>Indian students spend approx. USD 6 to 7 billion on higher
                            education in foreign universities on an annual basis


                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''>  Choice of destination is highly influenced by visa policy and
                            availability of post study work opportunities

                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''> 70 percent of the Indian students studying abroad are enrolled for
                            post graduate programmes
                        </div>
                    </li>


                </ul>

            </div>
            <hr className=' border-cyan-300' />
            <div className='text-4xl text-center   text-[#00ccd3] xl:mx-48 xl:py-8   font-semibold'>
                Service Offerings
            </div>

            <div className='text-xl text-justify xl:mx-48 xl:py-4 xl:font-thin'>
                <ul className='list-none'>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''>Increasing student enrolment from India


                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''>Managing relationship with existing agents and appointing new
                            local recruitment agents in major cities


                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''> Organising Student counsellor group meetings



                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''> Conducting counsellor training sessions on regular intervals




                        </div>
                    </li>
                    <li className='flex flex-row py-2'>
                        <img src='/v-icons/check-mark.png' className='inline w-8 h-8 mx-2' />

                        <div className=''> Briefing agents on university credentials, positioning and incentive
                            programmes

                        </div>
                    </li>


                </ul>

            </div>




            <Form />
            <Footer />




        </>
    )
}

export default studentRecruitment