import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Breadcrumb from '../ui/breadcrumb'

const Contactformsection = () => {
    return (
        <div className='w-full' >
            <div className="flex items-center justify-between mb-4">
                <h1 className='capitalize text-[26px] font-semibold  '>our work</h1>
                <Breadcrumb />
            </div>
            <div className="flex items-center gap-7 ">
                <div className="w-full md:w-8/12">
                    {/* Most Recent Lead */}
                    <div className="w-full p-5 bg-white rounded-md shadow-md mb-7">


                        <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                            <div className="p-2.5 xl:p-4 flex-1">ID</div>
                            <div className="p-2.5 xl:p-4 flex-1">name</div>
                            <div className="p-2.5 xl:p-4 flex-1">email</div>
                            <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">phone</div>
                            <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">subject</div>
                            <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">message</div>
                        </div>
                        <div className="flex flex-col w-full">

                            <div className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                                <div className="flex-1 p-2.5 xl:p-4">1</div>
                                <div className="flex-1 p-2.5 xl:p-4">ronik</div>
                                <div className="flex-1 p-2.5 xl:p-4">ronikgorasiya@gmail.com</div>
                                <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">9727168583</div>
                                <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">web</div>
                                <div className="p-2.5 xl:p-4 flex-1 hidden lg:block">hello</div>

                                {/* Render Star Rating for Recent Lead */}



                            </div>

                        </div>
                    </div>

                    {/* All Leads */}

                </div>
                <div className="w-full md:w-4/12">
                    {/* Most Recent Lead */}
                    <div className="w-full p-5 bg-white rounded-md shadow-md mb-7">


                        <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                            <div className="p-2.5 xl:p-4 flex-1">ID</div>

                            <div className="p-2.5 xl:p-4 flex-1">email</div>

                        </div>
                        <div className="flex flex-col w-full">

                            <div className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                                <div className="flex-1 p-2.5 xl:p-4">1</div>

                                <div className="flex-1 p-2.5 xl:p-4">ronikgorasiya@gmail.com</div>


                                {/* Render Star Rating for Recent Lead */}



                            </div>

                        </div>
                    </div>

                    {/* All Leads */}

                </div>

            </div>
        </div>
    )
}

export default Contactformsection