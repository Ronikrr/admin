import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';

const Latestworkaddsection = () => {
    const [isopenaddmodel, setisopenaddmodel] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [leads, setLeads] = useState([]);
    const [selectedLeadid, setselectedLeadid] = useState(null);
    const [isopenmodel, setisopenmodel] = useState(false);
    const [isopenlastall, setisopenlastall] = useState(false);
    const [description, setDescription] = useState('');
    const [work, setWork] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.name || data.name.trim() === '') newErrors.name = 'Name is required';
        if (!data.description || data.description.trim() === '') newErrors.description = 'Description is required';
        if (!data.work || data.work.trim() === '') newErrors.work = 'Work details are required';
        if (!imageFile) newErrors.image = 'Image is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddSave = (e) => {
        e.preventDefault();

        const id = leads.length === 0 ? 1 : leads[leads.length - 1].id + 1;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const work = e.target.work.value;

        const newLead = {
            id,
            name,
            image: imagePreview,
            file: imageFile,
            description,
            work,
            addedDate: new Date().toLocaleString(),
        };

        if (!validateForm(newLead)) return;

        setLeads([...leads, newLead]);
        setImageFile(null);
        setImagePreview(null);
        setDescription('');
        setWork('');
        setisopenaddmodel(false);
        setErrors({});
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
        setImageFile(null);
        setDescription(lead.description);
        setWork(lead.work);
        setisopenmodel(true);
    };

    const handleDelete = (id) => {
        setLeads(leads.filter((lead) => lead.id !== id));
    };

    const recentLead = leads[leads.length - 1];
    const onclicklastopenall = () => {
        setisopenlastall(!isopenlastall);
    };

    return (
        <div className="w-full bg-gray-100 ">
            <div className="">
                <h1 className='capitalize text-[26px] font-semibold py-6 '>our work</h1>
            </div>

            {/* Most Recent Lead */}
            <div className="w-full p-5 bg-white rounded-md shadow-md mb-7">

                <div className="flex items-center justify-between w-full">
                    <div className="py-6">
                        <h1 className='capitalize text-[26px] font-semibold '>Most Recent added</h1>
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
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">discription</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">work</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {
                        recentLead ? (
                            <div className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200" >
                                <div className="flex-1">{recentLead.id}</div>
                                <div className="flex-1">
                                    <img src={recentLead.image} alt={recentLead.name} className="object-cover w-36 h-36 aspect-square" />
                                </div>
                                <div className="flex-1">{recentLead.name}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.description || 'N/A'}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.work || 'N/A'}</div>

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
                <h1 className='capitalize text-[26px] py-6 font-semibold'>All added</h1>
                <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                    <div className="p-2.5 xl:p-5 flex-1">ID</div>
                    <div className="p-2.5 xl:p-5 flex-1">Image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">discription</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">work</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {leads.map((lead, index) => (
                        <div key={index} className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                            <div className="flex-1">{lead.id}</div>
                            <div className="flex-1">
                                <img src={lead.image} alt={lead.name} className="object-cover w-36 h-36 aspect-square" />
                            </div>
                            <div className="flex-1">{lead.name}</div>
                            <div className="flex-1 hidden md:block">{lead.description || 'N/A'}</div>
                            <div className="flex-1 hidden md:block">{lead.work || 'N/A'}</div>


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
                        <form className='flex flex-col md:flex-row' onSubmit={handleAddSave}>
                            <div className="w-full md:w-6/12">
                                <h1 className="capitalize text-[26px] font-semibold py-5 ">Edit Lead</h1>
                                <div className="flex flex-col w-full mb-3 ">
                                    <label className="text-gray-600">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        defaultValue={selectedLeadid.name}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">Work:</label>
                                    <input
                                        name="work"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        defaultValue={work}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">Description:</label>
                                    <textarea
                                        name="description"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        defaultValue={description}
                                    />
                                </div>

                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">Image:</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
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
                    <div className="w-1/2 p-5 bg-white rounded-md shadow-md">
                        <h1 className="capitalize text-[26px] font-semibold">Add New Lead</h1>
                        <form className='flex flex-col md:flex-row' onSubmit={handleAddSave}>
                            <div className="w-full md:w-6/12">
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">ID:</label>
                                    <input
                                        type="text"
                                        name="id"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        disabled
                                        value={leads.length === 0 ? 1 : leads[leads.length - 1].id + 1} // Auto increment ID
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Description:</label>
                                    <textarea
                                        name="description"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        placeholder="Enter lead description"
                                    />
                                    {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Work:</label>
                                    <input
                                        name="work"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        placeholder="Enter work details"
                                    />
                                    {errors.work && <p className="text-sm text-red-500">{errors.work}</p>}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Image:</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                    />
                                    {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}

                                </div>
                                <div className="items-center hidden w-full gap-2 my-3 md:flex">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                        onClick={() => setisopenaddmodel(false)}
                                    >
                                        Cancel
                                    </button>
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
        </div>
    );
};

export default Latestworkaddsection;
