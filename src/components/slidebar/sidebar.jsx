
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown, FaChartBar, FaDatabase, FaLaptop, FaBox, FaChartLine, FaBullhorn, FaBars } from "react-icons/fa";
import { MdDashboard, MdBusiness } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
function Sidebar({ isopensidebar, closeslidebar }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
    const menuItems = [
        {
            id: "Dashboard",
            icon: <MdDashboard />,
            label: "Dashboard",
            subMenu: [
                {
                    id: "websolex",
                    icon: <MdBusiness />,
                    label: "Websolex",
                    subsubmenu: [
                        { id: "mainadmin", icon: <FaChartBar />, label: "Websolex Home", link: "/" },
                        { id: "data", icon: <FaDatabase />, label: "Data", link: "/dashboard/ecommerce/data" },
                        { id: "crm", icon: <FaLaptop />, label: "CRM", link: "/dashboard/ecommerce/crm" },
                        { id: "stocks", icon: <FaBox />, label: "Stocks", link: "/dashboard/ecommerce/stocks" },
                    ],
                },
                {
                    id: "crm", icon: <FaChartLine />, label: "CRM"
                    , subsubmenu: [
                        { id: "crmhome", icon: <FaChartBar />, label: "CRM Home", link: "/crm" },

                    ],
                },
                {
                    id: "Marketing", icon: <FaBullhorn />, label: "Marketing",
                    subsubmenu: [
                        { id: "marktinghome", icon: <FaChartBar />, label: "Marketing Home", link: "/marketing" },

                    ]
                },
            ],
        },
    ];

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId === activeMenu ? null : menuId);
    };

    const handleSubMenuClick = (subMenuId) => {
        setActiveSubMenu(subMenuId === activeSubMenu ? null : subMenuId);
    };

    const handleSubSubMenuClick = (subSubMenuId) => {
        setActiveSubSubMenu(subSubMenuId === activeSubSubMenu ? null : subSubMenuId);
    };

    return (
        <div className="relative">

            <div className={` flex-col hidden md:flex md:w-[289.9px] main_class h-full  text-white bg-[#1C2434] transition-all duration-500 ease-in-out `}>
                <div className="flex items-center p-6 space-x-2 text-2xl font-bold">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                        <span className="text-lg font-bold text-white">T</span>
                    </div>
                    <span>TailAdmin</span>
                </div>


                <nav className="flex-1 px-4 py-6 space-y-4">
                    {menuItems.map((menu) => (
                        <div key={menu.id}>
                            {/* Main Menu */}
                            <div
                                className={`flex items-center p-3 justify-between rounded cursor-pointer `}
                                onClick={() => handleMenuClick(menu.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <span>{menu.icon}</span>
                                    <span className="font-semibold">{menu.label}</span>
                                </div>

                            </div>

                            {/* Submenu and Subsubmenu Directly Under Main Menu */}
                            {/* {activeMenu === menu.id && menu.subMenu && ( */}
                            <ul className="mt-2 space-y-2 ">
                                    {menu.subMenu.map((subMenu) => (
                                        <li key={subMenu.id}>
                                            {/* Submenu */}
                                            <div
                                                className={`flex items-center p-2 justify-between rounded cursor-pointer ${activeSubMenu === subMenu.id ? "bg-gray-700" : "bg-gray-900"
                                                    }`}
                                                onClick={() => handleSubMenuClick(subMenu.id)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span>{subMenu.icon}</span>
                                                    <span>{subMenu.label}</span>
                                                </div>
                                                {subMenu.subsubmenu && (activeSubMenu === subMenu.id ? <FaAngleUp /> : <FaAngleDown />)}
                                            </div>
                                            {/* Subsubmenu Directly Below Submenu */}
                                            {activeSubMenu === subMenu.id && subMenu.subsubmenu && (
                                                <ul className="pl-8 mt-2 space-y-2">
                                                    {subMenu.subsubmenu.map((subsubmenu) => (
                                                        <li
                                                            key={subsubmenu.id}
                                                            className={`flex items-center p-2 space-x-3 rounded cursor-pointer ${activeSubSubMenu === subsubmenu.id
                                                                ? "bg-gray-700"
                                                                : "bg-gray-900"
                                                                }`}
                                                            onClick={() => handleSubSubMenuClick(subsubmenu.id)}
                                                        >
                                                            <Link to={subsubmenu.link || "#"} className="flex items-center space-x-3" >
                                                                <span>{subsubmenu.icon}</span>
                                                                <span>{subsubmenu.label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            {/* )} */}
                        </div>
                    ))}
                </nav>
            </div>
            <div className={`flex flex-col absolute z-20 h-full    md:w-[289.9px]  text-white bg-[#1C2434] transition-all duration-500 ease-in-out ${isopensidebar ? 'block' : 'hidden'} `}>
                <div className="flex items-center p-6 space-x-2 text-2xl font-bold">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                        <span className="text-lg font-bold text-white">T</span>
                    </div>
                    <span>TailAdmin</span>
                    <IoMdClose onClick={closeslidebar} />
                </div>


                <nav className="flex-1 px-4 py-6 space-y-4">
                    {menuItems.map((menu) => (
                        <div key={menu.id}>
                            {/* Main Menu */}
                            <div
                                className={`flex items-center p-3 justify-between rounded cursor-pointer ${activeMenu === menu.id ? "bg-gray-900" : "bg-gray-800"
                                    }`}
                                onClick={() => handleMenuClick(menu.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <span>{menu.icon}</span>
                                    <span className="font-semibold">{menu.label}</span>
                                </div>
                                {menu.subMenu && (activeMenu === menu.id ? <FaAngleUp /> : <FaAngleDown />)}
                            </div>

                            {/* Submenu and Subsubmenu Directly Under Main Menu */}
                            {activeMenu === menu.id && menu.subMenu && (
                                <ul className="pl-8 mt-2 space-y-2">
                                    {menu.subMenu.map((subMenu) => (
                                        <li key={subMenu.id}>
                                            {/* Submenu */}
                                            <div
                                                className={`flex items-center p-2 justify-between rounded cursor-pointer ${activeSubMenu === subMenu.id ? "bg-gray-700" : "bg-gray-900"
                                                    }`}
                                                onClick={() => handleSubMenuClick(subMenu.id)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span>{subMenu.icon}</span>
                                                    <span>{subMenu.label}</span>
                                                </div>
                                                {subMenu.subsubmenu && (activeSubMenu === subMenu.id ? <FaAngleUp /> : <FaAngleDown />)}
                                            </div>
                                            {/* Subsubmenu Directly Below Submenu */}
                                            {activeSubMenu === subMenu.id && subMenu.subsubmenu && (
                                                <ul className="pl-8 mt-2 space-y-2">
                                                    {subMenu.subsubmenu.map((subsubmenu) => (
                                                        <li
                                                            key={subsubmenu.id}
                                                            className={`flex items-center p-2 space-x-3 rounded cursor-pointer ${activeSubSubMenu === subsubmenu.id
                                                                ? "bg-gray-700"
                                                                : "bg-gray-900"
                                                                }`}
                                                            onClick={() => handleSubSubMenuClick(subsubmenu.id)}
                                                        >
                                                            <Link to={subsubmenu.link || "#"} className="flex items-center space-x-3" >
                                                                <span>{subsubmenu.icon}</span>
                                                                <span>{subsubmenu.label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
