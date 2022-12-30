import React from 'react'

const Form = () => {
    return (
        <>
            <div className='py-12 border-2 border-[#00ccd3] xl:mx-32 xl:m-8 xl:ml-40'>
                <div className="xl:pb-4  text-4xl  font-bold text-[#00ccd3] xl:pr-20 text-center">
                    Write to us </div>



                <form className="w-9/12 py-4 text-xl xl:ml-48   ">
                    <div className='flex flex-row border-[#00ccd3]'>
                        <div>
                            <div className="flex flex-wrap mx-3">
                                <div className="w-full px-3 mb-3 md:w-1/2 md:mb-0">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
                                        Name
                                    </label>
                                    <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-cyan-200  appearance-none focus:outline-none focus:bg-white focus:border-[#00ccd3]" id="grid-first-name" name='name' type="text" placeholder="Jane Doe" />
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name" >
                                        Email
                                    </label>
                                    <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-cyan-200  appearance-none focus:outline-none focus:bg-white focus:border-[#00ccd3]" id="grid-last-name" type="email" placeholder="jane.doe@gmail.com" />
                                </div>
                            </div>

                            <div className="flex flex-wrap mx-3 mb-6">

                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
                                        Contact
                                    </label>
                                    <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-cyan-200 appearance-none focus:outline-none focus:bg-white focus:border-[#00ccd3]" id="grid-first-name" type="number" placeholder="+44 1234 567 890" />
                                </div>

                                <div className="w-full px-3 md:w-1/2">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name" >
                                        Organization
                                    </label>
                                    <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-cyan-200  appearance-none focus:outline-none focus:bg-white focus:border-[#00ccd3]" id="grid-last-name" type="text" placeholder="Organization name" />
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full ml-2">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name" >
                                    Message
                                </label>
                                <textarea
                                    class="
                                            form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-cyan-300
                                            resize-none
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-[#00ccd3] focus:outline-none
                                     "
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    cols="35"
                                    placeholder="Your message"
                                ></textarea>

                            </div>
                        </div>

                    </div>
                    <div className=" xl:ml-6">
                        <div className="">
                            <button className="block px-4 py-2 font-bold text-white rounded-lg bg-cyan-500 focus:shadow-outline focus:outline-none" type="button">
                                Submit
                            </button>
                        </div>
                    </div>
                    {/* <img src='/images/communicate.png' className='inline h-96 w-96'></img> */}
                </form>
            </div>
        </>
    )
}

export default Form