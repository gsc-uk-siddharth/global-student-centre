import React from 'react'

const Form = () => {
    return (
        <>
            <div className='xl:mx-48  py-12 border-2 border-white'>
                <div className="xl:ml-12 text-3xl font-bold text-white  "> <span className='bg-clip-text bg-gradient-to-r from-purple-600 to-red-600' > Fill out the below form and get in touch </span> </div>
                <form className="w-full max-w-lg xl:ml-6 text-xl py-4">
                    <div className="flex flex-wrap mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name" >
                                Phone Number
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Jane@google.com" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name" >
                                Subject
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your Concern" />
                        </div>

                        <div className="md:flex md:items-center xl:ml-3 pt-2">

                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                                        Message
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder='Message' />

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" xl:ml-6 ">

                        <div className="">
                            <button className="shadow bg-gradient-to-r from-indigo-800  to-pink-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="button">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {/* <img src='/images/communicate.png' className='h-96 w-96 inline'></img> */}
                </form>
            </div>
        </>
    )
}

export default Form