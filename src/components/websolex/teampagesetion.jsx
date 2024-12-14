import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import Input from '../ui/input'
import Primary from '../ui/primary'
import Seconduray from '../ui/seconduray';
import Breadcrumb from '../ui/breadcrumb';
const Servicepagesection = () => {
    const [selectedLead, setSelectedLead] = useState(null);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenLastAll, setIsOpenLastAll] = useState(false);
    const [leads, setLeads] = useState([]);
    const [errors, setErrors] = useState({});
    const [isOpenAddModel, setIsOpenAddModel] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.name || data.name.trim() === '') newErrors.name = 'Name is required';
        if (!data.image || data.image.trim() === '') newErrors.image = 'image is required';
        if (!data.post || data.post.trim() === '') newErrors.post = 'post is required';
        if (!data.linkednin || data.linkednin.trim() === '') newErrors.dis1 = 'linkedin link required';
        if (!data.insta || data.insta.trim() === '') newErrors.insta = 'instagram link required';
        if (!data.facebook || data.facebook.trim() === '') newErrors.insta = 'facebook link required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddSave = (e) => {
        e.preventDefault();

        const id = leads.length === 0 ? 1 : leads[leads.length - 1].id + 1;
        const name = e.target.name.value;
        const post = e.target.post.value;
        const linkednin = e.target.linkednin.value;
        const insta = e.target.insta.value;
        const facebook = e.target.facebook.value;

        const newLead = {
            id,
            name,
            image: imagePreview,
            file: imageFile,
            post,
            linkednin,
            insta,
            facebook,
        };

        if (!validateForm(newLead)) return;

        setLeads([...leads, newLead]);

        // Reset form
        e.target.reset();
        setErrors({});
        setIsOpenAddModel(false);
    };
    const recentLead = leads[leads.length - 1];
    const handleDelete = (id) => {
        setLeads(leads.filter((lead) => lead.id !== id));
    };
    const onClickLastOpenAll = () => {
        setIsOpenLastAll(!isOpenLastAll);
    };
    const handleEditClick = (lead) => {
        setSelectedLead(lead);

        setIsOpenModel(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setIsOpenLastAll(false)
        }, 3000);
    })
    return (
        <div className="w-full bg-gray-100 ">
            <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
                <h1 className='capitalize text-[26px] font-semibold  '>team page</h1>
                <Breadcrumb />
            </div>

            {/* Most Recent Lead */}
            <div className="w-full p-5 bg-white rounded-md shadow-md mb-7">

                <div className="flex items-center justify-between w-full">
                    <div className="py-6">
                        <h1 className='capitalize text-[26px] font-semibold '>Most Recent added</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer ">
                            <PiDotsThreeOutlineFill className='text-[#98A6AD] hover:text-black ' onClick={onClickLastOpenAll} />
                            {isOpenLastAll && (
                                <div className="absolute right-0 z-40 w-40 p-1 space-y-1 bg-white border rounded-sm shadow-sm top-full border-stroke">
                                    <button className='flex w-full capitalize items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4' onClick={() => setIsOpenAddModel(true)} >
                                        <IoMdAdd /> add
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-gray-600 text-[10px] md:text-[16px] uppercase leading-[1.5] bg-gray-100 flex w-full">
                    <div className="p-2.5 xl:p-5 flex-1">ID</div>
                    <div className="p-2.5 xl:p-5 flex-1">image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1">post</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">linkednin link</div><div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">instgram link</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">facebook link</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {
                        recentLead ? (
                            <div className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200" >
                                <div className="flex-1 p-2.5 xl:p-5">{recentLead.id}</div>
                                <div className="flex-1 p-2.5 xl:p-5">
                                    <img src={recentLead.image} alt={recentLead.name} className="object-cover w-10 h-10 xl:w-16 xl:h-16 aspect-square" />
                                </div>
                                <div className="flex-1">{recentLead.name}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.post || 'N/A'}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.linkednin || 'N/A'}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.insta || 'N/A'}</div>
                                <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.facebook || 'N/A'}</div>

                                <div className="flex items-center flex-1 gap-2">
                                    <button className="text-gray-600 hover:text-black" onClick={() => handleEditClick(recentLead)}>
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
                    <div className="p-2.5 xl:p-5 flex-1">image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1">post</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">linkednin link</div><div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">instgram link</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block ">facebook link</div>
                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>

                <div className="flex flex-col w-full">
                    {leads.map((lead, index) => (
                        <div key={index} className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                            <div className="flex-1 p-2.5 xl:p-5">{lead.id}</div>
                            <div className="flex-1 p-2.5 xl:p-5">
                                <img src={lead.image} alt={lead.name} className="object-cover w-10 h-10 xl:w-16 xl:h-16 aspect-square" />
                            </div>
                            <div className="flex-1 p-2.5 xl:p-5">{lead.name}</div>
                            <div className="flex-1 p-2.5 xl:p-5 hidden md:block">{lead.post || 'N/A'}</div>
                            <div className="flex-1 p-2.5 xl:p-5 hidden md:block">{lead.linkednin || 'N/A'}</div>
                            <div className="flex-1 p-2.5 xl:p-5 hidden md:block">{lead.insta || 'N/A'}</div>
                            <div className="flex-1 p-2.5 xl:p-5 hidden md:block">{lead.facebook || 'N/A'}</div>


                            <div className="flex items-center flex-1 gap-2">
                                <button className="text-gray-600 hover:text-black" onClick={() => handleEditClick(lead)}>
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
            {isOpenModel && selectedLead && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="w-full p-10 bg-white rounded-md shadow-md md:w-1/3">
                        <form className='flex flex-col md:flex-row' onSubmit={handleAddSave}>
                            <div className="w-full ">
                                <h1 className="capitalize text-[26px] font-semibold py-5 ">Edit Lead</h1>
                                <div className="flex flex-col w-full mb-3 ">
                                    <label className="text-gray-600">Name:</label>
                                    <Input
                                        type="text"
                                        name="name"
                                        defaultValue={selectedLead.name}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">title:</label>
                                    <Input
                                        type="text"
                                        name="post"
                                        defaultValue={selectedLead.post}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">linkednin :</label>
                                    <textarea
                                        name="linkednin"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        defaultValue={selectedLead.linkednin}
                                    />
                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">instagram :</label>
                                    <Input
                                        name="insta"
                                        placeholder="Enter Rate details"
                                        defaultValue={selectedLead.insta}
                                    />

                                </div>
                                <div className="flex flex-col w-full mb-3">
                                    <label className="text-gray-600">facebook :</label>
                                    <Input
                                        name="facebook"
                                        placeholder="Enter Rate details"
                                        defaultValue={selectedLead.facebook}
                                    />

                                </div>

                                <div className="flex flex-row w-full mb-3">
                                    <div className="flex flex-col w-8/12">
                                        <label className="text-gray-600">Image:</label>
                                        <Input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleFileChange}

                                        />
                                    </div>
                                    <div className="flex items-center justify-center w-full gap-2 my-3 md:w-4/12">
                                        {imagePreview && (
                                            <div className="flex justify-center mt-2">
                                                <img src={imagePreview} alt="Preview" className="w-16 h-16 " />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full gap-2 my-3">
                                    <Primary
                                        type="submit"
                                    >
                                        Save
                                    </Primary>
                                    <Seconduray
                                        type="submit"
                                        label={`Cancel`}
                                        onClick={() => setIsOpenModel(false)}
                                    >
                                        Cancel
                                    </Seconduray>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>
            )}
            {/* Add Modal */}
            {isOpenAddModel && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="w-1/3 p-10 bg-white rounded-md shadow-md">
                        <h1 className="capitalize text-[26px] font-semibold">Add New Lead</h1>
                        <form className='flex flex-col ' onSubmit={handleAddSave}>
                            <div className="w-full">
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">ID:</label>

                                    <Input
                                        type="text"
                                        name="id"
                                        disabled
                                        value={leads.length === 0 ? 1 : leads[leads.length - 1].id + 1}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Name:</label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder={'enter a name'}
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">post:</label>
                                    <Input
                                        type="text"
                                        name="post"

                                        placeholder="Enter business details"
                                    />
                                    {errors.post && <p className="text-sm text-red-500">{errors.post}</p>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">linkednin :</label>
                                    <textarea
                                        name="linkednin"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        placeholder="Enter linkednin link"
                                    />
                                    {errors.linkednin && <p className="text-sm text-red-500">{errors.linkednin}</p>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">instagram :</label>
                                    <textarea
                                        name="insta"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        placeholder="Enter instagram link"
                                    />
                                    {errors.insta && <p className="text-sm text-red-500">{errors.insta}</p>}
                                </div>  <div className="flex flex-col w-full">
                                    <label className="text-gray-600">facebook :</label>
                                    <textarea
                                        name="facebook"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        placeholder="Enter instagram link"
                                    />
                                    {errors.facebook && <p className="text-sm text-red-500">{errors.facebook}</p>}
                                </div>

                                <div className="flex flex-row w-full mb-3">
                                    <div className="flex flex-col w-8/12">
                                        <label className="text-gray-600">Image:</label>
                                        <Input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="p-2.5 xl:p-3 border border-gray-200 rounded-md"
                                        />
                                        {errors.icon && <p className="text-sm text-red-500">{errors.icon}</p>}
                                    </div>
                                    <div className="flex items-center justify-center w-full gap-2 my-3 md:w-4/12">
                                        {imagePreview && (
                                            <div className="flex justify-center mt-2">
                                                <img src={imagePreview} alt="Preview" className="w-16 h-16 " />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full gap-2 my-3">
                                    <Primary
                                        type="submit"
                                    >
                                        Save
                                    </Primary>
                                    <Seconduray
                                        type="button"
                                        label={`Cancel`}
                                        onClick={() => setIsOpenAddModel(false)}
                                    >
                                        Cancel
                                    </Seconduray>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Servicepagesection;

