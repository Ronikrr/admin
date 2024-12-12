// import { Flag } from 'lucide-react';
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri';

const Valuedclientadd = () => {
    const [isopen, setisopen] = useState(false);
    const [isopenlast, setisopenlast] = useState(false)
    const [isopenall, setisopenall] = useState(false)
    const [isopenlastall, setisopenlastall] = useState(false)

    const onclicklastopenall = () => {
        setisopen(false);
        setisopenlast(false)
        setisopenall(false)
        setisopenlastall(!isopenlastall)
    }
    const onclicklastopen = () => {
        setisopen(false);
        setisopenlast(!isopenlast)
        setisopenall(false)
    }
    const onclickallopen = () => {
        setisopen(false);
        setisopenlast(false)
        setisopenall(!isopenall)
    }
    const handleonclick = () => {
        setisopen(!isopen);
        setisopenlast(false)
        setisopenall(false)
    }
    const leads = [
        {
            name: "Google",
            visiter: "it education",
            revenues: "5825",
            duration: "4.8%",
            sales: "590",
            status: "Lost Lead",
            statusColor: "bg-red-100 text-red-500",
            image: "https://www.websolexinfotech.com/static/media/logoimg1.0b2daff0c3c41f1e5039.png",
        },
        // {
        //     name: "Twitter",
        //     visiter: "500",
        //     revenues: "-222",
        //     duration: "4.8%",
        //     sales: "467",
        //     status: "Active",
        //     statusColor: "bg-green-100 text-green-500",
        //     image: "https://react-demo.tailadmin.com/assets/brand-02-31d534b8.svg",
        // },
        // {
        //     name: "Youtube",
        //     visiter: "5000",
        //     revenues: "6565",
        //     duration: "4.8%",
        //     sales: "420",
        //     status: "Active",
        //     statusColor: "bg-green-100 text-green-500",
        //     image: "https://react-demo.tailadmin.com/assets/brand-06-205212ad.svg",
        // },
        // {
        //     name: "Vimeo",
        //     visiter: "6000",
        //     revenues: "9898",
        //     duration: "4.8%",
        //     sales: "389",
        //     status: "Active",
        //     statusColor: "bg-green-100 text-green-500",
        //     image: "https://react-demo.tailadmin.com/assets/brand-04-1c41292a.svg",
        // },
        // {
        //     name: "Facebook",
        //     visiter: "3500",
        //     revenues: "-555",
        //     duration: "4.8%",
        //     sales: "390",
        //     status: "Lost Lead",
        //     statusColor: "bg-red-100 text-red-500",
        //     image: "https://react-demo.tailadmin.com/assets/brand-05-b51c44b2.svg",
        // },
    ];

    return (
        <div className="w-full bg-gray-100 2xl:p-10 2xl:pb-0 md:p-6">
            <div className="">

                <h1 className='capitalize text-[26px] font-semibold ' >trusted bond</h1>
            </div>
            <div className="w-full p-5 bg-white rounded-md shadow-md mb-7 ">
                <div className="flex items-center w-full md:justify-between">
                    <div className="py-6">

                        <h1 className='capitalize text-[26px] font-semibold ' >last add</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer ">
                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={onclicklastopenall} />
                            {isopenlastall && (
                                <div className="absolute right-0 z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                        <FaRegEdit /> edit
                                    </button>
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                        <RiDeleteBin6Line />  delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {/* Header */}
                    <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                        <div className="p-2.5 xl:p-5 flex-1">id</div>
                        <div className="p-2.5 xl:p-5 flex-1">image</div>
                        <div className="p-2.5 xl:p-5 flex-1">name</div>
                        <div className="p-2.5 xl:p-5 flex-1">action</div>
                    </div>

                    {/* Body */}
                    <div className="divide-y divide-gray-200">
                        {leads.map((lead, index) => {

                            const revenues = (lead.sales / lead.visiter) * 100
                            const rev = Math.floor(revenues * 100) / 100
                            console.log(rev, "kjfkjbfkkbbfekfbs")
                            return (
                                <div
                                    key={index}
                                    className="flex items-center w-full py-1 transition duration-150 border-t hover:bg-gray-50"
                                >

                                    <div className="p-2.5 xl:p-4 flex items-center flex-1"> {index + 1} </div>
                                    <div className="p-2.5 xl:p-4 flex items-center flex-1">
                                        <img
                                            src={lead.image}
                                            alt={lead.name}
                                            className="object-cover w-32 h-16 mr-3 aspect-video"
                                        />

                                    </div>

                                    <div className="p-2.5  xl:p-4 text-gray-700 flex-1">
                                        {lead.visiter}
                                    </div>
                                    <div className="p-2.5  xl:p-4 text-gray-700 flex-1">
                                        <div className="relative cursor-pointer ">
                                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={onclicklastopen} />
                                            {isopenlast && (
                                                <div className="absolute right-[100%] z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                        <FaRegEdit /> edit
                                                    </button>
                                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                        <RiDeleteBin6Line />  delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div><div className="w-full p-5 bg-white rounded-md shadow-md ">
                <div className="flex items-center w-full md:justify-between">
                    <div className="py-6">

                        <h1 className='capitalize text-[26px] font-semibold ' >all added</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer ">
                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={handleonclick} />
                            {isopen && (
                                <div className="absolute right-0 z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                        <FaRegEdit /> edit
                                    </button>
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                        <RiDeleteBin6Line />  delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {/* Header */}
                    <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                        <div className="p-2.5 xl:p-5 flex-1">id</div>
                        <div className="p-2.5 xl:p-5 flex-1">image</div>
                        <div className="p-2.5 xl:p-5 flex-1">name</div>
                    </div>

                    {/* Body */}
                    <div className="divide-y divide-gray-200">
                        {leads.map((lead, index) => {

                            const revenues = (lead.sales / lead.visiter) * 100
                            const rev = Math.floor(revenues * 100) / 100
                            console.log(rev, "kjfkjbfkkbbfekfbs")
                            return (
                                <div
                                    key={index}
                                    className="flex items-center w-full py-1 transition duration-150 border-t hover:bg-gray-50"
                                >

                                    <div className="p-2.5 xl:p-4 flex items-center flex-1"> {index + 1} </div>
                                    <div className="p-2.5 xl:p-4 flex items-center flex-1">
                                        <img
                                            src={lead.image}
                                            alt={lead.name}
                                            className="object-cover w-32 h-16 mr-3 aspect-video"
                                        />

                                    </div>

                                    <div className="p-2.5  xl:p-4 text-gray-700 flex-1">
                                        {lead.visiter}
                                    </div>
                                    <div className="p-2.5  xl:p-4 text-gray-700 flex-1">
                                        <div className="relative cursor-pointer ">
                                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={onclickallopen} />
                                            {isopenall && (
                                                <div className="absolute right-[100%] z-40 w-40  p-1 space-y-1 bg-white border rounded-sm shadow-sm bottom-full border-stroke">
                                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                        <FaRegEdit /> edit
                                                    </button>
                                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' >
                                                        <RiDeleteBin6Line />  delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Valuedclientadd