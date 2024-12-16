import React, { useState } from 'react'
import BreadcrumbNav from '../../components/ui/breadcrumb'
import Input from '../../components/ui/input'
import Seconduray from '../../components/ui/seconduray'
import Primary from '../../components/ui/primary'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BiCurrentLocation } from 'react-icons/bi'
const Contactdetailsection = () => {
    const initialFormData = {
        address: '',
        phone: '',
        avaliablity: '',
        email: ''
    }
    const initialFormData_2 = {
        facebook: '',
        whatsapp: '',
        instagram: '',
        linkedin: ''
    }
    const [formData, setFormData] = useState(initialFormData);
    const [formData_2, setFormData_2] = useState(initialFormData_2);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Process the submitted data
        console.log("Form Data Submitted:", formData);

        // Reset form to initial values
        setFormData(initialFormData);
    };
    const handleSubmit_2 = (e) => {
        e.preventDefault();

        // Process the submitted data
        console.log("Form Data Submitted:", formData_2);

        // Reset form to initial values
        setFormData_2(initialFormData);
    };
    return (
        <div className='' >
            <div className="w-full ">
                <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-black text-[26px] ">Contact details</h2>
                    <BreadcrumbNav />
                </div>
                <div className="flex flex-col gap-8 lg:flex-row ">
                    <div className="w-full xl:w-6/12">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default ">
                            <div className="py-4 border-b border-[rgb(226,232,240)] capitalize  px-7 ">
                                contact details
                            </div>
                            <div className="p-7">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-5 mb-5 sm:flex-row">
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >address</label>
                                            <div className="relative">
                                                <Input
                                                    name={'address'}
                                                    placeholder={"contact address"}
                                                    onChange={handleChange}
                                                    defaultValue={formData.address}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <BiCurrentLocation className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >phone number</label>
                                            <div className="relative">
                                                <Input
                                                    name={'phone'}
                                                    placeholder={"enter phone number"}
                                                    onChange={handleChange}
                                                    defaultValue={formData.phone}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaPhoneAlt className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >avaliablity</label>
                                            <div className="relative">
                                                <Input
                                                    name={'avaliablity'}
                                                    placeholder={"enter avaliablity"}
                                                    onChange={handleChange}
                                                    defaultValue={formData.avaliablity}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >emails</label>
                                            <div className="relative">
                                                <Input
                                                    name={'email'}
                                                    placeholder={"enter email"}
                                                    onChange={handleChange}
                                                    defaultValue={formData.email}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <MdOutlineMailOutline className='text-[20px] text-[#64748b] ' />

                                                </div>
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
                    <div className="w-full xl:w-6/12">
                        <div className="bg-white border rounded-sm border-[rgb(226,232,240)] shadow-default ">
                            <div className="py-4 border-b capitalize border-[rgb(226,232,240)]  px-7 ">
                                social media
                            </div>
                            <div className="p-7">
                                <form action="" onSubmit={handleSubmit_2} >
                                    <div className="flex flex-col gap-5 mb-5 sm:flex-row">
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >facebook</label>
                                            <div className="relative">
                                                <Input
                                                    name={'facebook'}
                                                    placeholder={"enter facebook link"}
                                                    onChange={handleChange}
                                                    defaultValue={formData_2.facebook}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaFacebook className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 ">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >whatsapp</label>
                                            <div className="relative">
                                                <Input
                                                    name={'whatsapp'}
                                                    placeholder={"enter whatsapp link"}
                                                    onChange={handleChange}
                                                    defaultValue={formData_2.whatsapp}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaWhatsapp className='text-[20px] text-[#64748b] ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >instagram</label>
                                            <div className="relative">
                                                <Input
                                                    name={'instagram'}
                                                    placeholder={"enter instagram link"}
                                                    onChange={handleChange}
                                                    defaultValue={formData_2.instagram}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaInstagram className='text-[20px] text-[#64748b] ' />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="w-full">
                                            <label htmlFor="" className='block mb-3 text-sm font-medium text-black capitalize' >linkedin</label>
                                            <div className="relative">
                                                <Input
                                                    name={'linkedin'}
                                                    placeholder={"enter linkedin link"}
                                                    onChange={handleChange}
                                                    defaultValue={formData_2.linkedin}
                                                />
                                                <div className="absolute top-4 right-4 ">
                                                    <FaLinkedin className='text-[20px] text-[#64748b] ' />

                                                </div>
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
                </div>
            </div>
        </div>
    )
}

export default Contactdetailsection