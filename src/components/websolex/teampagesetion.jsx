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
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenAddModel, setIsOpenAddModel] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [leads, setLeads] = useState([]);
    const [selectedLead, setSelectedLead] = useState(null);


    const [errors, setErrors] = useState({});
    const [isOpenLastAll, setIsOpenLastAll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpenLastAll(false);
        }, 3000);
    }, [isOpenLastAll]);

    const validateForm = (data) => {
        const newErrors = {};
        if (!data.name || data.name.trim() === '') newErrors.name = 'Name is required';
        if (!data.post || data.post.trim() === '') newErrors.post = 'post is required';

        if (!imageFile) newErrors.image = 'Image is required';
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
        const facebook = e.target.facebook.value


        const newLead = { id, name, post, image: imagePreview, file: imageFile, linkednin, insta, facebook, addedDate: new Date().toLocaleString() };

        if (!validateForm(newLead)) return;

        setLeads([...leads, newLead]);
        resetFormFields();
        setIsOpenAddModel(false);
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        const updatedLead = { ...selectedLead, image: imagePreview };
        if (!validateForm(updatedLead)) return;

        setLeads(leads.map(lead => (lead.id === selectedLead.id ? updatedLead : lead)));
        resetFormFields();
        setIsOpenModel(false);
    };

    const resetFormFields = () => {
        setImageFile(null);
        setImagePreview(null);

        setErrors({});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const recentLead = leads[leads.length - 1];

    const handleEditClick = (lead) => {
        setSelectedLead(lead);
        setImagePreview(lead.image);


        setIsOpenModel(true);
    };

    const handleDelete = (id) => {
        setLeads(leads.filter((lead) => lead.id !== id));
    };

    const onClickLastOpenAll = () => {
        setIsOpenLastAll(!isOpenLastAll);
    };


    return (
        <div className="w-full bg-gray-100 ">
            <div className="flex items-center justify-between mb-4">
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
                    <div className="p-2.5 xl:p-5 flex-1">Image</div>
                    <div className="p-2.5 xl:p-5 flex-1">Name</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">post</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">linkednin</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">insta</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">facebook</div>

                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {recentLead ? (
                        <div className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                            <div className="flex-1">{recentLead.id}</div>
                            <div className="flex-1">
                                <img src={recentLead.image} alt={recentLead.name} className="object-cover w-16 h-16 aspect-square" />
                            </div>
                            <div className="flex-1">{recentLead.name}</div>
                            <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.post || 'N/A'}</div>
                            <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.linkednin || 'N/A'}</div>
                            <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.insta || 'N/A'}</div>
                            <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">{recentLead.facebook || 'N/A'}</div>

                            {/* Render Star Rating for Recent Lead */}


                            <div className="flex items-center flex-1 gap-2">
                                <button className="text-gray-600 hover:text-black" onClick={() => handleEditClick(recentLead)}>
                                    <FaRegEdit />
                                </button>
                                <button className="text-red-500 hover:text-black" onClick={() => handleDelete(recentLead.id)}>
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
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">post</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">linkednin</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">insta</div>
                    <div className="p-2.5 xl:p-5 flex-1 hidden lg:block">facebook</div>

                    <div className="p-2.5 xl:p-5 flex-1">Action</div>
                </div>
                <div className="flex flex-col w-full">
                    {leads.length > 0 ? (
                        leads.map((lead) => (
                            <div key={lead.id} className="flex items-center w-full p-2.5 xl:p-3 border-b border-gray-200">
                                <div className="flex-1">{lead.id}</div>
                                <div className="flex-1">
                                    <img src={lead.image} alt={lead.name || 'Lead Image'} className="object-cover w-16 h-16 aspect-w-1 aspect-h-1" />
                                </div>
                                <div className="flex-1">{lead.name}</div>
                                <div className="flex-1 hidden md:block">{lead.post || 'N/A'}</div>
                                <div className="flex-1 hidden md:block">{lead.linkednin || 'N/A'}</div>
                                <div className="flex-1 hidden md:block">{lead.insta || 'N/A'}</div> <div className="flex-1 hidden md:block">{lead.facebook || 'N/A'}</div>


                                <div className="flex items-center flex-1 gap-2">
                                    <button className="text-gray-600 hover:text-black" onClick={() => handleEditClick(lead)}>
                                        <FaRegEdit />
                                    </button>
                                    <button className="text-red-500 hover:text-black" onClick={() => handleDelete(lead.id)}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center">
                            <p>No leads found.</p>
                        </div>
                    )}
                </div>
            </div>

            {(isOpenAddModel || isOpenModel) && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full capitalize bg-black bg-opacity-50">
                    <div className="w-1/3 p-10 bg-white rounded-md shadow-md">
                        <h1 className="capitalize text-[26px] font-semibold mb-4 ">{isOpenAddModel ? 'Add New Lead' : 'Edit Lead'}</h1>
                        <form className="flex flex-col gap-4" onSubmit={isOpenAddModel ? handleAddSave : handleEditSave}>
                            <div className="flex flex-col items-center gap-1 lg:gap-4 lg:flex-row ">
                                {/* Name */}
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">Name:</label>
                                    <Input
                                        type="text"
                                        name="name"
                                        defaultValue={isOpenModel ? selectedLead.name : ''}

                                        placeholder="Enter name"
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>



                                {/* insta */}
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">post:</label>
                                    <Input
                                        type="text"
                                        name="post"
                                        defaultValue={isOpenModel ? selectedLead.post : ''}

                                        placeholder="Enter post"
                                    />
                                    {errors.insta && <p className="text-sm text-red-500">{errors.insta}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 lg:gap-4 lg:flex-row ">
                                {/* linkednin */}
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">linkednin:</label>
                                    <Input
                                        name="linkednin"
                                        className="p-2.5 xl:p-3 border border-gray-200 rounded-md"

                                        defaultValue={isOpenModel ? selectedLead.linkednin : ''}

                                        placeholder="Enter linkednin"
                                    />
                                    {errors.linkednin && <p className="text-sm text-red-500">{errors.linkednin}</p>}
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-gray-600">insta:</label>
                                    <Input
                                        type="text"
                                        name="insta"
                                        defaultValue={isOpenModel ? selectedLead.insta : ''}

                                        placeholder="Enter insta"
                                    />
                                    {errors.insta && <p className="text-sm text-red-500">{errors.insta}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-gray-600">facebook:</label>
                                <Input
                                    type="text"
                                    name="facebook"
                                    defaultValue={isOpenModel ? selectedLead.facebook : ''}

                                    placeholder="Enter facebook"
                                />
                                {errors.facebook && <p className="text-sm text-red-500">{errors.facebook}</p>}
                            </div>

                            {/* Image Upload */}
                            <div className="flex flex-row w-full mb-3">
                                <div className="flex flex-col w-8/12">
                                    <label className="text-gray-600">Image:</label>
                                    <Input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
                                </div>
                                {imagePreview && (
                                    <div className="flex justify-center mt-2">
                                        <img src={imagePreview} alt="Preview" className="w-16 h-16" />
                                    </div>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between mt-4">
                                <Primary type="submit" className="btn btn-primary">
                                    {isOpenAddModel ? 'Save' : 'Update'}
                                </Primary>
                                <Seconduray
                                    type="button"
                                    label={"Cancel"}
                                    onClick={() => (isOpenAddModel ? setIsOpenAddModel(false) : setIsOpenModel(false))}
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

export default Servicepagesection;

