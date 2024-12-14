import React from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbNav from '../../components/ui/breadcrumb'
import Input from '../../components/ui/input'
import Seconduray from '../../components/ui/seconduray'
import Primary from '../../components/ui/primary'
import { FaRegUser } from 'react-icons/fa'
import { RiContactsBook3Line } from 'react-icons/ri'
import { MdOutlineFileUpload, MdOutlineMailOutline } from 'react-icons/md'
import Submit from '../../components/ui/submit'
const Profile = () => {
    return (
        <div className='p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10' >
            <div className="mx-auto max-w-[67.5rem] ">
                <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-black text-[26px] ">Settings</h2>
                    <BreadcrumbNav />
                </div>
                <div className="flex flex-wrap gap-8 ">
                    <div className="w-full xl:w-7/12">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default ">
                            <div className="py-4 border-b border-[rgb(226,232,240)] capitalize  px-7 ">
                                porsonal information
                            </div>
                            <div className="p-7">
                                <form action="">
                                    <div className="flex flex-col gap-5 mb-5 sm:flex-row">
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >full name</label>
                                            <div className="relative">
                                                <Input
                                                    placeholder={"enter full name"}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaRegUser className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >phone number</label>
                                            <div className="relative">
                                                <Input
                                                    placeholder={"enter phone number"}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <RiContactsBook3Line className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >Email address</label>
                                            <div className="relative">
                                                <Input
                                                    placeholder={"enter email address"}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <MdOutlineMailOutline className='text-[20px] text-[#64748b] ' />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >username</label>
                                            <div className="relative">
                                                <Input
                                                    placeholder={"enter username"}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <Seconduray label={"Cancel"} />
                                        <Primary label={"Save"} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-4/12">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default ">
                            <div className="py-4 border-b capitalize border-[rgb(226,232,240)]  px-7 ">
                                your photo
                            </div>
                            <div className="p-7">
                                <form action="">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="rounded-full h-14 w-14">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="">
                                            <span className="mb-1.5 text-black">
                                                Edit your photo
                                            </span>
                                            <span className="flex gap-2.5">
                                                <button className="text-sm hover:text-[#3c50e0] capitalize ">update</button>
                                                <button className="text-sm hover:text-[#3c50e0] capitalize ">delete</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#3c50e0] bg-[#eff4fb] py-4 px-4  sm:py-7.5">
                                        <input type="text" className='absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer' />
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <span className='flex items-center rounded-full justify-center w-10 h-10 bg-white border-[#e2e8f0]' >
                                                <MdOutlineFileUpload className='text-[22px] text-[#3c50e0] ' />
                                            </span>
                                            <p>
                                                <span className="text-[#3c50e0]">Click to upload</span>  or drag and drop
                                            </p>
                                            <p className="mb-1 5">SVG, PNG, JPG or GIF</p>
                                            <p>(max, 800 X 800px)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <Seconduray label={"Cancel"} />
                                        <Primary label={"Save"} />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile