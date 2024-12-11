import React from "react";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6"; // Added down arrow icon
import { FiEye } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import Sectiontwo from "../components/websolex/section_two"
const Websolexhome = () => {
    const first = [
        {
            id: 1,
            icon: <FiEye className="text-[#3c50e0] text-[25px]" />,
            balance: "$3.456K",
            totalview: "Total views",
            per: "0.43%",
            pericon: <FaArrowUpLong />,
        },
        {
            id: 2,
            icon: <AiOutlineShoppingCart className="text-[#3c50e0] text-[25px]" />,
            balance: "$2.12K",
            totalview: "Total profit",
            per: "-1.23%",
            pericon: <FaArrowDownLong />,
        }, {
            id: 3,
            icon: <MdOutlineShoppingBag className="text-[#3c50e0] text-[25px]" />,
            balance: "$3.456K",
            totalview: "Total views",
            per: "0.43%",
            pericon: <FaArrowUpLong />,
        },
        {
            id: 4,
            icon: <GoPeople className="text-[#3c50e0] text-[25px]" />,
            balance: "$2.123K",
            totalview: "Total clicks",
            per: "-1.23%",
            pericon: <FaArrowDownLong />,
        },
    ];

    return (
        <div className="w-full bg-gray-100 2xl:p-10 2xl:pb-0 md:p-6">
            <div className="flex flex-wrap w-full mb-7 ">
                {first.map((item) => {
                    // Determine if percentage is positive
                    const isPositive = parseFloat(item.per) > 0;

                    return (
                        <div
                            key={item.id}
                            className="flex w-full lg:w-6/12 xl:w-3/12 mb-7 2xl:mb-0 lg:odd:justify-start lg:even:justify-end 2xl:odd:justify-noraml 2xl:even:justify-normal "
                        >
                            <div className="w-full py-6 bg-white border rounded-sm shadow-md lg:w-11/12 border-[rgb(226,232,240)] px-7">
                                <div className="flex items-center justify-center bg-gray-100 rounded-full h-11 w-11">
                                    {item.icon}
                                </div>
                                <div className="flex items-end justify-between mt-4">
                                    <div>
                                        <h4 className="text-[24px] font-semibold">{item.balance}</h4>
                                        <span className="text-sm font-bold flex text-[#64748B]">
                                            {item.totalview}
                                        </span>
                                    </div>
                                    <span
                                        className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-[#10B981]" : "text-[#EF4444]"
                                            }`}
                                    >
                                        {item.per}
                                        {isPositive ? <FaArrowUpLong /> : <FaArrowDownLong />}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


            <Sectiontwo />

        </div>
    );
};

export default Websolexhome;
