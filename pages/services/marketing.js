import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const marketing = () => {
    return (
        <>
            <Navbar />



            <img src='/images/about-rec.png'></img>


            <div className='text-4xl text-center  text-gray-600 xl:mx-96 xl:py-8  font-semibold'>
                Marketing  </div>

            <div className='xl:mx-96 xl:py-4 xl:font-thin text-2xl text-justify'>
                <ul className='list-none'>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Focused business development activities to raise brand image of the University in India</div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Marketing activities to cover big cities and other emerging
                            geographical hot spots</div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>Optimize visibility on search engines
                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Develop and implement digital marketing strategy including social
                            media optimization (LinkedIn, Facebook, Instagram, Twitter,
                            YouTube etc.)
                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Article submissions and social bookmarking
                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> Print media marketing through regular press releases</div>
                    </li>

                </ul>



            </div>


            <div className='text-4xl text-center  text-gray-600 xl:mx-96 xl:py-8  font-semibold'>
                Academia Linkages   </div>

            <div className='xl:mx-96 xl:py-4 xl:font-thin text-2xl text-justify'>
                <ul className='list-none'>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''> To develop an exhaustive database of all the key universities,
                            colleges and deemed universities in India
                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>To explore collaboration with individual universities/      colleges
                            based on their existing model &amp; gaps (holding regular on ground
                            interaction and dialogue with them)
                        </div>
                    </li>


                </ul>

            </div>

            <div className='text-4xl text-center  text-gray-600 xl:mx-96 xl:py-8  font-semibold'>
                Industry Linkages   </div>

            <div className='xl:mx-96 xl:py-4 xl:font-thin text-2xl text-justify'>
                <ul className='list-none'>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>To manage a master database of industry stakeholders and
                            beneficiaries in India

                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>To develop and maintain links with industry with a view towards
                            student work placements

                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>To Collaborate with foreign companies opening research & innovation centres through partnerships


                        </div>
                    </li>
                    <li className='py-2 flex flex-row'>
                        <img src='/v-icons/check-mark.png' className='h-8 w-8 inline mx-2' />

                        <div className=''>We do monthly and Quarterly project update meetings to review
                            milestones against pre-agreed deliverables.  Things are executed in
                            accordance with preferences and suggestions of the Client (Overseas
                            University).


                        </div>
                    </li>


                </ul>

            </div>


            <div className='text-6xl text-center  text-gray-600 xl:mx-96 xl:py-8  font-semibold'>
                Achievements for 2022
            </div>



            <div className='flex flex-wrap xl:mx-96 xl:mt-8 mb-32' id='services'>

                <div className='bg-gray-100 xl:h-48 xl:w-56  xl:py-4 mx-2 xl:ml-8 '>

                    <div className='  xl:h-16  xl:w-56 xl:ml-4'>
                        <div className='text-8xl font-semibold'>26</div>
                        <div className='text-4xl font-semibold'>Million</div>
                        <div className='text-2xl font-semibold'>impressions</div>

                    </div>
                </div>
                <div className='bg-gray-100 xl:h-48 xl:w-56  xl:py-4 mx-2'>

                    <div className='  xl:h-16  xl:w-56 xl:ml-4'>
                        <div className='text-8xl font-semibold'>16</div>
                        <div className='text-4xl font-semibold'>Million</div>
                        <div className='text-2xl font-semibold'>unique visitors</div>

                    </div>
                </div>
                <div className='bg-gray-100 xl:h-48 xl:w-56  xl:py-4 mx-2 '>

                    <div className='  xl:h-16  xl:w-56 xl:ml-4'>
                        <div className='text-8xl font-semibold'>25</div>
                        <div className='text-4xl font-semibold'>Thousand</div>
                        <div className='text-2xl font-semibold'>leads generated</div>

                    </div>
                </div>


            </div>

            <Footer />




        </>
    )
}

export default marketing