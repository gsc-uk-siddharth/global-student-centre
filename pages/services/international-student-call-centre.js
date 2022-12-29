import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const internationalCallCentre = () => {
    return (
        <>
            <Navbar />


            <img src='/images/about-rec.png'></img>


            <div className='text-4xl text-center  text-gray-600 xl:mx-48 xl:py-8  font-semibold'>
                International Student Call Centre   </div>

            <div className='xl:mx-48 xl:py-4 xl:font-thin text-2xl text-justify'>
                <p className='py-2'>
                    International Student Call Centre has profound experience in providing call centre services to educational institutions. We leverage our
                    experience in serving institutions - from Colleges to Public Universities –
                    to provide you with quality contact centre services to handle the end-to-
                    end communication needs of your educational community – the faculty,
                    the staff, the students, their families, and prospects.
                </p>
                <p className='py-2'>
                    We support every need of an institution. From student help desks to staff
                    support; from book store support to emergency notification; from
                    emergency hotlines to fundraising, we are always ready to provide
                    prompt answers to suit your needs. Our support services have helped
                    our clients devote more time to education and work towards building a
                    reputation for themselves. It’s precisely because of our consistency in
                    ensuring all of these that our clients prefer to outsource education call
                    centre services to us.
                </p>
                <p className='py-2'>

                    Universities that outsource some of their operations to the customer
                    experience survey companies have benefitted from substantial growth in
                    their bottom line, along with reduced operating costs and improved work
                    efficiency. Outsourcing customer satisfaction can enhance your client
                    satisfaction by improving the quality of your customer interactions,
                    increasing your institutions availability to customers, and providing your
                    customers access to expert services at their convenience.
                </p>
                <p className='py-2'>

                    International Student Call Centre has years of experience helping clients
                    identify areas for improvement through offshore customer satisfaction
                    surveys. Our invaluable experience can help you get objective, accurate
                    and precise evidence of how satisfied your customers are with your
                    services.
                </p>
                <p className='py-2'>

                    Give us the purpose and leave the rest to us. We will determine your
                    target audience, develop the guidelines, identify the vehicles, design the
                    questions, and set the benchmarks for you so that you get what you
                    want on a platter. And there is more! We arm you with powerful insights
                    with our customer satisfaction survey for consulting services to help you
                    pick the right strategy.
                </p>
            </div>


            <div className='xl:mx-48 py-8'>
                <img src='/images/Admissions support info.png' className='h-full w-full'></img>
            </div>


            <div className='flex flex-wrap xl:mx-48 xl:mt-2'>

                <div className='bg-gray-100 xl:h-48 xl:w-80 xl:m-4 xl:py-4'>
                    <div className='xl:h-32 xl:w-48 bg-transparent xl:ml-10'>
                        <img src='/v-icons/voice-mail.png' className='w-28 h-28 xl:ml-16' />
                    </div>
                    <div className='xl:w-80 xl:pt-2 '>
                        <div className='text-xl font-semibold text-center'>Attending queries over call
                        </div>

                    </div>
                </div>
                <div className='bg-gray-100 xl:h-48 xl:w-80 xl:m-4 xl:py-4'>
                    <div className='xl:h-32 xl:w-48 bg-transparent xl:ml-10'>
                        <img src='/v-icons/chat.png' className='w-28 h-28 xl:ml-16' />
                    </div>
                    <div className='xl:w-80 xl:pt-2 '>
                        <div className='text-xl font-semibold text-center'>Attending queries over Chats
                        </div>

                    </div>
                </div>
                <div className='bg-gray-100 xl:h-48 xl:w-80 xl:m-4 xl:py-4'>
                    <div className='xl:h-32 xl:w-48 bg-transparent xl:ml-10'>
                        <img src='/v-icons/email.png' className='w-28 h-28 xl:ml-16' />
                    </div>
                    <div className='xl:w-80 xl:pt-2 '>
                        <div className='text-xl font-semibold text-center'>Attending queries over Emails
                        </div>

                    </div>
                </div>
                <div className='bg-gray-100 xl:h-48 xl:w-80 xl:m-4 xl:py-4'>
                    <div className='xl:h-32 xl:w-48 bg-transparent xl:ml-10'>
                        <img src='/v-icons/whatsapp.png' className='w-28 h-28 xl:ml-16' />
                    </div>
                    <div className='xl:w-80 xl:pt-2 '>
                        <div className='text-xl font-semibold text-center'>Attending queries over Whatsapp
                        </div>

                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default internationalCallCentre