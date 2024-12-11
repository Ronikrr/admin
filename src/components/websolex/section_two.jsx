import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as lad } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, lad);

const data = [
    { name: 'Sep', Received: 10, Due: 15 },
    { name: 'Oct', Received: 20, Due: 25 },
    { name: 'Nov', Received: 40, Due: 30 },
    { name: 'Dec', Received: 50, Due: 40 },
    { name: 'Jan', Received: 70, Due: 60 },
    { name: 'Feb', Received: 80, Due: 65 },
    { name: 'Mar', Received: 90, Due: 80 },
    { name: 'Apr', Received: 85, Due: 75 },
    { name: 'May', Received: 95, Due: 85 },
    { name: 'Jun', Received: 100, Due: 90 },
    { name: 'Jul', Received: 95, Due: 85 },
    { name: 'Aug', Received: 100, Due: 90 },
];

const deviceData = {
    labels: ['Mobile', 'Tablet', 'Desktop'],
    datasets: [
        {
            data: [10, 20, 70],
            backgroundColor: ['#4F46E5', '#60A5FA', '#0EA5E9'],
            borderWidth: 0,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    const value = tooltipItem.raw;
                    return `${tooltipItem.label}: ${value}%`;
                },
            },
        },
    },
    cutout: '70%',
};
const ChartComponent = () => {
    // Dummy data for illustration
    const data = {
        Day: [
            { name: '00:00', TotalRevenue: 10, TotalSales: 5 },
            { name: '06:00', TotalRevenue: 20, TotalSales: 10 },
            { name: '12:00', TotalRevenue: 30, TotalSales: 15 },
            { name: '18:00', TotalRevenue: 25, TotalSales: 20 },
        ],
        Week: [
            { name: 'Mon', TotalRevenue: 50, TotalSales: 30 },
            { name: 'Tue', TotalRevenue: 70, TotalSales: 40 },
            { name: 'Wed', TotalRevenue: 60, TotalSales: 35 },
            { name: 'Thu', TotalRevenue: 90, TotalSales: 50 },
            { name: 'Fri', TotalRevenue: 80, TotalSales: 45 },
        ],
        Month: [
            { name: 'Week 1', TotalRevenue: 200, TotalSales: 150 },
            { name: 'Week 2', TotalRevenue: 300, TotalSales: 200 },
            { name: 'Week 3', TotalRevenue: 400, TotalSales: 250 },
            { name: 'Week 4', TotalRevenue: 350, TotalSales: 220 },
        ],
    };

    // State to handle the current view
    const [currentView, setCurrentView] = useState('Month');

    return (
        <div className="flex flex-wrap items-center w-full gap-7 mb-7 ">
            <div className="w-full 2xl:w-[62.33%] ">
                <div className='w-full px-6 bg-white shadow-md  py-7 border border-[rgb(226,232,240)] ' >
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        {/* Toggle Buttons */}
                        {['Day', 'Week', 'Month'].map((view) => (
                            <button
                                key={view}
                                onClick={() => setCurrentView(view)}
                                style={{
                                    margin: '0 5px',
                                    padding: '10px 15px',
                                    backgroundColor: currentView === view ? '#007bff' : '#f0f0f0',
                                    color: currentView === view ? '#fff' : '#000',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                {view}
                            </button>
                        ))}
                    </div>

                    {/* Responsive Line Chart */}
                    <ResponsiveContainer className={`width_class`} >
                        <LineChart
                            data={data[currentView]}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="TotalRevenue" stroke="#8884d8" strokeWidth={2} />
                            <Line type="monotone" dataKey="TotalSales" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="w-full 2xl:w-4/12">
                <div className="w-full">
                    <div className="w-full px-5 pb-5 bg-white border rounded-sm shadow-sm sm:px-7 border-stroke pt-7">
                        <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h4 className="font-bold text-black text-[22px]">Used Devices</h4>
                            </div>
                            <div className="flex items-center">
                                <p className="font-medium text-black uppercase">Short by:</p>
                                <div className="relative z-20 inline-block">
                                    <select
                                        name=""
                                        className="relative z-20 inline-flex py-1 pl-3 pr-8 font-medium bg-transparent outline-none appearance-none"
                                        id=""
                                    >
                                        <option value="">Monthly</option>
                                        <option value="">Weekly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            {/* Donut Chart */}
                            <div className="w-64 h-64">
                                <Doughnut data={deviceData} options={options} />
                            </div>

                            {/* Legend */}
                            <div className="flex flex-col items-start mt-4">
                                {deviceData.labels.map((label, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span
                                            className="block w-4 h-4 rounded-full"
                                            style={{ backgroundColor: deviceData.datasets[0].backgroundColor[index] }}
                                        ></span>
                                        <span className="font-medium text-gray-700">{label}</span>
                                        <span className="ml-auto text-gray-500">{deviceData.datasets[0].data[index]}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
