// import React from 'react'

// const websolexadmin = () => {
//     return (
//         <div className='justify-end w-full h-full p-10 ' >websolexadmin</div>
//     )
// }

// export default websolexadmin
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";

const websolexhome = () => {
    return (
        <>
            <div className=" w-full 2xl:p-[50px] 2xl:pb-0  md:p-6 bg-gray-100">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    <div class="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md ">
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                class=" fill-[#3c50e0]"
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                            >
                                <path
                                    d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                    fill=""
                                ></path>
                                <path
                                    d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                    fill=""
                                ></path>
                            </svg>
                        </div>
                        <div class="mt-4 flex items-end justify-between">
                            <div>
                                <h4 class="text-[24px] font-semib">
                                    $3.456K
                                </h4>
                                <span class="text-sm font-semibold flex text-[#64748B]">Total views</span>
                            </div>
                            <span class="flex items-center gap-1 text-sm font-medium text-[#10B981  ] undefined ">
                                0.43%
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                    <div class="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md ">
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                class=" fill-[#3c50e0]"
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                            >
                                <path
                                    d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                    fill=""
                                ></path>
                                <path
                                    d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                    fill=""
                                ></path>
                            </svg>
                        </div>
                        <div class="mt-4 flex items-end justify-between">
                            <div>
                                <h4 class="text-[24px] font-semibold text-black ">
                                    $3.456K
                                </h4>
                                <span class="text-sm font-semibold flex text-[#64748B]">Total views</span>
                            </div>
                            <span class="flex items-center gap-1 text-sm font-medium text-[#10B981  ] undefined ">
                                0.43%
                                <BsCart3 />
                            </span>
                        </div>
                    </div>
                    <div class="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md ">
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                class=" fill-[#3c50e0]"
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                            >
                                <path
                                    d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                    fill=""
                                ></path>
                                <path
                                    d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                    fill=""
                                ></path>
                            </svg>
                        </div>
                        <div class="mt-4 flex items-end justify-between">
                            <div>
                                <h4 class="text-[24px] font-semibold text-black ">
                                    $3.456K
                                </h4>
                                <span class="text-sm font-semibold flex text-[#64748B]">Total views</span>
                            </div>
                            <span class="flex items-center gap-1 text-sm font-medium text-[#10B981  ] undefined ">
                                0.43%
                                <MdOutlineShoppingBag />
                            </span>
                        </div>
                    </div>
                    <div class="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md ">
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                            <svg
                                class=" fill-[#3c50e0]"
                                width="22"
                                height="16"
                                viewBox="0 0 22 16"
                                fill="none"
                            >
                                <path
                                    d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                    fill=""
                                ></path>
                                <path
                                    d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                    fill=""
                                ></path>
                            </svg>
                        </div>
                        <div class="mt-4 flex items-end justify-between">
                            <div>
                                <h4 class="text-[24px] font-semibold text-black ">
                                    $3.456K
                                </h4>
                                <span class="text-sm font-semibold flex text-[#64748B]">Total views</span>
                            </div>
                            <span class="flex items-center gap-1 text-sm font-medium text-[#10B981  ] undefined ">
                                0.43%
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default websolexhome;