import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import Breadcrumb from '../ui/breadcrumb'
import Input from '../ui/input';
import Primary from '../ui/primary';
import Seconduray from '../ui/seconduray';

const Valuedclientsection = () => {
    const [isopenaddmodel, setisopenaddmodel] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [leads, setLeads] = useState([]);
    const [selectedLeadid, setselectedLeadid] = useState(null);
    const [isopenmodel, setisopenmodel] = useState(false);
    const [isopenlastall, setisopenlastall] = useState(false)
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.name || data.name.trim() === '') newErrors.name = 'Name is required';
        if (!data.image || data.image.trim() === '') newErrors.image = 'image is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleAddSave = (e) => {
        e.preventDefault();
        const id = leads.length === 0 ? 1 : leads[leads.length - 1].id + 1;
        const name = e.target.name.value;

        const newLead = {
            id,
            name,
            image: imagePreview,
            file: imageFile,
            addedDate: new Date().toLocaleString(),
        };
        if (!validateForm(newLead)) return;

        setLeads([...leads, newLead]);
        setImageFile(null);
        setImagePreview(null);
        setisopenaddmodel(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleEditclick = (lead) => {
        setselectedLeadid(lead);
        setImagePreview(lead.image);
        setImageFile(null); // Clear file if any
        setisopenmodel(true);
    };

    const handleDelete = (id) => {
        setLeads(leads.filter(lead => lead.id !== id)); // Remove the lead with the given ID
    };

    // Get the most recent lead (last added)
    const recentLead = leads[leads.length - 1];
    const onclicklastopenall = () => {
        setisopenlastall(!isopenlastall)
    }
    useEffect(() => {
        setTimeout(() => {
            setisopenlastall(false)
        }, 3000);
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setselectedLeadid((prevLead) => ({
            ...prevLead,
            [name]: value,
        }));
    };
    const handleUpdate = (e) => {
        e.preventDefault();

        if (!selectedLeadid) return; // Ensure a lead is selected

        const updatedLead = {
            ...selectedLeadid, // Retain existing lead data
            name: e.target.name.value,
            image: imagePreview || selectedLeadid.image,
            file: imageFile || selectedLeadid.file,
        };

        if (!validateForm(updatedLead)) return;

        // Update the leads array
        setLeads(leads.map((lead) => (lead.id === selectedLeadid.id ? updatedLead : lead)));

        // Reset states and close the modal
        setselectedLeadid(null);
        setisopenmodel(false);
        setErrors({});
    };
    return (
        <div className="w-full bg-gray-100 2xl:p-10 2xl:pb-0 md:p-6">
            <div className="flex items-center justify-between mb-4 ">
                <h1 className='capitalize text-[26px] font-semibold'>trusted bond</h1>
                <Breadcrumb />
            </div>

            {/* Most Recent Lead */}
            <div className="w-full p-5 bg-white rounded-md shadow-md mb-7">

                <div className="flex items-center justify-between w-full">
                    <div className="py-6">
                        <h1 className='capitalize text-[26px] font-semibold '>Most Recent Lead</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer ">
                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={onclicklastopenall} />
                            {isopenlastall && (
                                <div className="absolute right-0 z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' onClick={() => setisopenaddmodel(true)} >
                                        <IoMdAdd /> add
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                    <div className="p-2.5 xl:p-5 flex-1">ID</div>
                    <div className="p-2.5 xl:p-5 flex-1">Image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1">Added Date/Time</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {
                        recentLead ? (
                            <div className="flex items-center w-full p-2.5 xl:p-5 border-b border-gray-200" >
                                <div className="flex-1">{recentLead.id}</div>
                                <div className="flex-1">
                                    <img src={recentLead.image} alt={recentLead.name} className="w-10 h-10 rounded-full" />
                                </div>
                                <div className="flex-1">{recentLead.name}</div>
                                <div className="flex-1 hidden md:block">{recentLead.addedDate}</div>
                                <div className="flex items-center flex-1 gap-2">
                                    <button className="text-gray-600 hover:text-black" onClick={() => handleEditclick(recentLead)}>
                                        <FaRegEdit />
                                    </button>
                                    <button className="text-gray-600 hover:text-black" onClick={() => handleDelete(recentLead.id)}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 text-center">

                                <p>No recent lead added yet.</p>
                            </div>
                        )}
                </div>

            </div>

            {/* All Leads */}
            <div className="w-full p-5 bg-white rounded-md shadow-md">
                <h1 className='capitalize text-[26px] font-semibold'>All Leads</h1>
                <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                    <div className="p-2.5 xl:p-5 flex-1">ID</div>
                    <div className="p-2.5 xl:p-5 flex-1">Image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1">Added Date/Time</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {leads.map((lead, index) => (
                        <div key={index} className="flex items-center w-full p-2.5 xl:p-5 border-b border-gray-200">
                            <div className="flex-1">{lead.id}</div>
                            <div className="flex-1">
                                <img src={lead.image} alt={lead.name} className="w-10 h-10 rounded-full" />
                            </div>
                            <div className="flex-1">{lead.name}</div>
                            <div className="flex-1 hidden md:block ">{lead.addedDate}</div>
                            <div className="flex items-center flex-1 gap-2">
                                <button className="text-gray-600 hover:text-black" onClick={() => handleEditclick(lead)}>
                                    <FaRegEdit />
                                </button>
                                <button className="text-gray-600 hover:text-black" onClick={() => handleDelete(lead.id)}>
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isopenmodel && selectedLeadid && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="w-full p-5 bg-white rounded-md shadow-md md:w-1/2">
                        <form className='flex flex-col md:flex-row' onSubmit={handleUpdate}>
                            <div className="w-full md:w-6/12">
                                <h1 className="capitalize text-[26px] font-semibold py-5 ">Edit Lead</h1>
                                <div className="flex flex-col w-full mb-3 ">
                                    <label className="text-gray-600">Name:</label>
                                    <Input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={selectedLeadid.name}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">Image:</label>
                                    <Input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}

                                    />

                                    <div className="items-center hidden w-full gap-2 my-3 md:flex">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                            onClick={() => setisopenmodel(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full gap-2 my-3 md:w-6/12">
                                {imagePreview && (
                                    <div className="flex justify-center mt-2">
                                        <img src={imagePreview} alt="Preview" className="w-48 h-48 md:w-8/12 md:h-8/12 " />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center w-full gap-2 my-3 md:hidden">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                    onClick={() => setisopenmodel(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Add Modal */}
            {isopenaddmodel && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="w-1/3 p-5 bg-white rounded-md shadow-md">
                        <h1 className="capitalize text-[26px] font-semibold">Add New Lead</h1>
                        <form onSubmit={handleAddSave}>
                            <div className="flex flex-col w-full mb-4 ">
                                <label className="text-gray-600">ID:</label>
                                <Input
                                    type="text"
                                    name="id"
                                    disabled
                                    value={leads.length === 0 ? 1 : leads[leads.length - 1].id + 1} // Auto increment ID
                                />
                            </div>
                            <div className="flex flex-col w-full mb-4 ">
                                <label className="text-gray-600">Name:</label>
                                <Input
                                    type="text"
                                    name="name"

                                />
                                {errors.name && (<p className='text-red-500' >
                                    {errors.name}
                                </p>)}
                            </div>
                            <div className="flex flex-col w-full mb-4 ">
                                <div className="flex flex-col w-6/12 ">
                                    <label className="text-gray-600">Image:</label>
                                    <Input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}

                                    />
                                </div>
                                {imagePreview && (
                                    <div className="mt-2">
                                        <img src={imagePreview} alt="Preview" className="w-20 h-20 rounded-full" />
                                    </div>
                                )}
                                {errors.image && (<p className='text-red-500' >
                                    {errors.image}
                                </p>)}
                            </div>
                            <div className="flex items-center gap-2">
                                <Primary
                                    type="submit"
                                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    Save
                                </Primary>
                                <Seconduray
                                    type="button"
                                    label={"Cancel"}
                                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                    onClick={() => setisopenaddmodel(false)}
                                >
                                    Cancel
                                </Seconduray>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Valuedclientsection;

