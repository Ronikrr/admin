
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Section_three = () => {
    const [isopen, setisopen] = useState(false);

    const handleonclick = () => {
        setisopen(!isopen);
    }
    const data = {
        labels: ["M", "T", "W", "T", "F", "S", "S"], // Days of the week
        datasets: [
            {
                label: "Visitors",
                data: [150, 400, 200, 300, 180, 200, 320], // Visitor count
                backgroundColor: "#4F46E5", // Blue color
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    };


    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            title: {
                display: false, // Hide title
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide vertical grid lines
                },
            },
            y: {
                grid: {
                    color: "#E5E7EB", // Light gray horizontal grid lines
                },
                beginAtZero: true, // Start y-axis at 0
            },
        },
    };

    const leads = [
        {
            name: "Google",
            visiter: "9500",
            revenues: "5825",
            duration: "4.8%",
            sales: "590",
            status: "Lost Lead",
            statusColor: "bg-red-100 text-red-500",
            image: "https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg",
        },
        {
            name: "Twitter",
            visiter: "500",
            revenues: "-222",
            duration: "4.8%",
            sales: "467",
            status: "Active",
            statusColor: "bg-green-100 text-green-500",
            image: "https://react-demo.tailadmin.com/assets/brand-02-31d534b8.svg",
        },
        {
            name: "Youtube",
            visiter: "5000",
            revenues: "6565",
            duration: "4.8%",
            sales: "420",
            status: "Active",
            statusColor: "bg-green-100 text-green-500",
            image: "https://react-demo.tailadmin.com/assets/brand-06-205212ad.svg",
        },
        {
            name: "Vimeo",
            visiter: "6000",
            revenues: "9898",
            duration: "4.8%",
            sales: "389",
            status: "Active",
            statusColor: "bg-green-100 text-green-500",
            image: "https://react-demo.tailadmin.com/assets/brand-04-1c41292a.svg",
        },
        {
            name: "Facebook",
            visiter: "3500",
            revenues: "-555",
            duration: "4.8%",
            sales: "390",
            status: "Lost Lead",
            statusColor: "bg-red-100 text-red-500",
            image: "https://react-demo.tailadmin.com/assets/brand-05-b51c44b2.svg",
        },
    ];

    return (
        <div className="mb-7 flex flex-col xl:flex-row items-center gap-4 md:gap-6 2xl:gap-7.5">



            <div className="w-full xl:w-4/12 mb-7 xl:mb-0 ">
                <div className="bg-white border rounded-md border border-[rgb(226,232,240)] shadow-md">
                    <div className="flex flex-col gap-2 px-6 py-6 sm:flex-row border-b border-[rgb(226,232,240)] sm:items-center sm:justify-between">
                        {/* <div className="px-6 py-6 flex justify-between items-center  border-b border-[rgb(226,232,240)]  "> */}
                        <div className="">
                            <h2 className="text-[22px] font-semibold capitalize text-[rgb(28,36,52)]">
                                Campaign Visitors
                            </h2>
                            <p className="text-sm font-medium" >Last Campaign Performance</p>
                        </div>
                        <div className="">
                            <h3 className="text-[22px] font-semibold capitalize text-[rgb(28,36,52)]" >784k</h3>
                            <p className="text-sm font-medium text-red-600" >-1.5%</p>
                        </div>
                        {/* </div> */}

                    </div>
                    <div className="w-full px-6 py-4 md:h-[320px] 2xl:h-[420px] ">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>



            <div className="w-full bg-white rounded-md shadow-md xl:w-[62.5%] ">
                <div className="px-5 pt-6 overflow-hidden pb-2.5 sm:px-7 xl:pb-1 ">
                    <div className="flex flex-col gap-2 mb-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="">
                            <h2 className="text-[22px] mb-1.5 capitalize  font-bold text-[rgb(28,36,52)]">
                                Top channels
                            </h2>

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
                            <div className="p-2.5 xl:p-4 flex-1">Source</div>
                            <div className="p-2.5 xl:p-4 flex-1">Visitors</div>
                            <div className="p-2.5 xl:p-4 flex-1">Revenues</div>
                            <div className="p-2.5 xl:p-4 flex-1 hidden md:flex justify-center">Sales</div>
                            <div className="p-2.5 xl:p-4 flex-1 hidden md:flex justify-center">Conversion</div>
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
                                        className="flex items-center w-full transition duration-150 border-t hover:bg-gray-50"
                                    >
                                        {/* Source */}
                                        <div className="p-2.5 xl:p-4 flex items-center flex-1">
                                            <img
                                                src={lead.image}
                                                alt={lead.name}
                                                className="w-10 h-10 mr-3 rounded-full"
                                            />
                                            <span className="hidden md:block">{lead.name}</span>
                                        </div>

                                        {/* Visitors */}
                                        <div className="p-2.5 text-center xl:p-2 text-gray-700 flex-1">
                                            {lead.visiter}
                                        </div>

                                        {/* Revenues */}
                                        <div
                                            className={`p-2.5 text-center xl:p-2 flex-1 ${lead.revenues.startsWith('-') ? 'text-red-500' : 'text-green-500'
                                                }`}
                                        >
                                            Rs{lead.revenues}
                                        </div>

                                        {/* Sales */}
                                        <div className="p-2.5 text-center xl:p-2 hidden md:flex justify-center flex-1">
                                            {lead.sales}
                                        </div>

                                        {/* Conversion */}
                                        <div className="p-2.5 text-center xl:p-2 text-blue-400 hidden md:flex justify-center flex-1">
                                            {rev}%
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section_three;
