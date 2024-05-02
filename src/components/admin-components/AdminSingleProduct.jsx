import React, { useEffect, useState } from 'react'
import down from '../../assets/icons/down-arrow-admin.svg'
import useGetAdminSingleProduct from '../../hooks/userGetAdminSingleProduct';
import useUpdateAdminSingleProduct from '../../hooks/useUpdateAdminSingleProduct';
import { useParams } from 'react-router-dom';

const AdminSingleProduct = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const [defaultData, setDefaultData] = useState();

    const params = useParams()

    const { apiData, productLoading, productError } = useGetAdminSingleProduct();

    const { editProduct, loading } = useUpdateAdminSingleProduct();

    const [activeIndex, setActiveIndex] = useState();

    const handleVariantChange = () => {
        setDefaultData({
            ...apiData,
            size_weight: apiData?.size_weight?.map((variant_data, variant_index) => {
                if (variant_index === index) {
                    return {
                        ...variant_data,
                        [field]: value,
                    };
                } else {
                    return variant_data;
                }
            }),
        });
    };

    const addNewVariant = () => {

        const newIndex = defaultData?.size_weight?.length > 0
            ? defaultData.size_weight.length
            : 0;

        // Create a new blank variant object with empty values
        const newVariant = {
            size: '',
            weight: '',
            actual_price: '',
            selling_price: '', // Adjust the field name as needed
            id: defaultData?.size_weight?.length || 0, // Assign a unique ID, adjust as needed
        };

        // Update the state to add the new variant
        setDefaultData((prevState) => ({
            ...prevState,
            size_weight: [...(prevState?.size_weight || []), newVariant],
        }));

        // Set the active index to the new variant's index
        setActiveIndex(newIndex);
    };

    const submitForm = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("product_id", params?.product_id);
        formdata.append("name", defaultData?.name);
        formdata.append("gender", defaultData?.gender);
        formdata.append("image_1", defaultData?.image_1);
        formdata.append("image_2", defaultData?.image_2);
        formdata.append("image_3", defaultData?.image_3);
        formdata.append("image_4", defaultData?.image_4);
        formdata.append("category", defaultData?.category);
        formdata.append("diamond_quality", defaultData?.diamond_quality);
        formdata.append("diamond_size", defaultData?.diamond_size);
        formdata.append("size_weight", [{
            "size": "8",
            "weight": "13.92",
            "actual_price": "82962",
            "sellingprice": "74666",
            "id": 2
        }]);

        editProduct(formdata)
            .then((response) => {
                // Handle the response as needed
                setDefaultData(response);
            });
    };

    useEffect(() => {
        // Set initial values using apiData
        if (apiData) {
            setDefaultData(apiData);
            setSelectedDiamondQuality(apiData.diamond_quality);
        }
    }, [apiData]);

    return (
        <div className='w-full px-5 xl:px-[120px] py-5'>
            <div className='w-full flex flex-col sm:flex-row justify-between sm:items-center mb-10 sm:mb-0'>
                <h1 className='roboto text-[40px] font-[900] my-2 md:my-10'>Edit Product Details</h1>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-[60%] px-4 pt-3'>
                    <div className='w-full flex justify-start items-center gap-10'>
                        <span className='flex items-center gap-1'>
                            <input type="radio" name="" className='scale-90 rounded-full' id="" />
                            <h1 className='text-[14px] font-[500]'>Male</h1>
                        </span>
                        <span className='flex items-center gap-1'>
                            <input type="radio" name="" className='scale-90 rounded-full' id="" />
                            <h1 className='text-[14px] font-[500]'>Female</h1>
                        </span>
                        <span className='flex items-center gap-1'>
                            <input type="radio" name="" className='scale-90 rounded-full' id="" />
                            <h1 className='text-[14px] font-[500]'>Unisex</h1>
                        </span>
                    </div>
                    <div className='w-full flex flex-col pt-3 gap-3'>
                        <input type="text" value={``} className='w-full bg-gray-100 outline-none px-3 py-2 rounded-[10px] shadow-md text-[14px]' placeholder='Product Name' />
                        <input type="text" value={``} className='w-full bg-gray-100 outline-none px-3 py-2 rounded-[10px] shadow-md text-[14px]' placeholder='Product Category' />
                    </div>
                    <h1 className='my-1 pt-14 font-[500]'>Diamond Quality</h1>
                    <div className='w-full relative'>
                        <div className='w-[70%] flex justify-between items-center bg-gray-100 outline-none pl-3 pr-2 py-2 rounded-[10px] shadow-md text-[14px]'>
                            <h1>select a diamond quality</h1>
                            <span className='cursor-pointer w-[20px] aspect-square flex justify-center items-center' onClick={() => setDropDownOpen(!dropDownOpen)}>
                                <img src={down} className='w-[12px]' alt="" />
                            </span>
                        </div>
                        <div className={`w-full max-w-[70%] absolute z-[100] left-0 top-[110%] bg-white shadow-md overflow-hidden ${dropDownOpen ? 'h-[170px]' : 'h-0'} transition-all duration-200 ease-in-out rounded-[10px]`}>
                            <div className='flex flex-col w-full'>
                                {
                                    apiData?.diamond_quality_all?.map((data, i) => {
                                        return (
                                            <li key={i} className='text-[16px] list-none roboto w-full hover:bg-[#dddddd] my-1 px-3 py-1 cursor-pointer rounded-md' onClick={() => { '' }}>{data}</li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={`w-full fixed inset-0 bg-black opacity-5 ${dropDownOpen ? 'block' : 'hidden'}`} onClick={() => setDropDownOpen(false)}></div>
                        <input type="text" value={``} className='w-full mt-3 bg-gray-100 outline-none px-3 py-2 rounded-[10px] shadow-md text-[14px]' placeholder='Diamond Quanlity' />
                    </div>
                </div>
                <div className='w-full lg:w-[40%] flex flex-col items-end gap-4'>
                    <div className='w-full flex gap-3'>
                        <div className='w-full bg-gray-300 aspect-square'>

                        </div>
                        <div className='w-[30%] flex flex-col gap-3'>
                            <div className='w-full bg-gray-300 aspect-square'>

                            </div>
                            <div className='w-full bg-gray-300 aspect-square'>

                            </div>
                            <div className='w-full bg-gray-300 aspect-square'>

                            </div>
                        </div>
                    </div>
                    <button className='bg-[#d6d6d6] active:bg-[#3EDCFF] active:scale-[0.91] active:text-[#000] px-6 py-[5px] shadow-md rounded-[10px]'>Add images</button>
                </div>
            </div>
            <div className='w-full'>
                <h1 className=' font-[500] pt-6'>Variants</h1>
                <div className='grid grid-cols-4 py-4'>
                    <div className='text-[14px] pl-2'>Size</div>
                    <div className='text-[14px] pl-2'>Weight</div>
                    <div className='text-[14px] pl-2'>Actual Price</div>
                    <div className='text-[14px] pl-2'>Selling Price</div>
                </div>
                <div className='w-full'>
                    {
                        defaultData?.size_weight?.map((data, i) => (
                            <div key={data?.id} className='w-full grid grid-cols-4 gap-4 mb-2'>
                                <input type="text" onChange={(e) => handleVariantChange(i, 'size', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.size} className='outline-none bg-gray-200 w-full py-1 px-2 rounded-[8px]' />
                                <input type="text" onChange={(e) => handleVariantChange(i, 'weight', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.weight} className='outline-none bg-gray-200 w-full py-1 px-2 rounded-[8px]' />
                                <input type="text" onChange={(e) => handleVariantChange(i, 'actual_price', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.actual_price} className='outline-none bg-gray-200 w-full py-1 px-2 rounded-[8px]' />
                                <input type="text" onChange={(e) => handleVariantChange(i, 'selling_price', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.sellingprice} className='outline-none bg-gray-200 w-full py-1 px-2 rounded-[8px]' />
                            </div>
                        ))
                    }
                    <div className='w-full flex justify-end pt-5'>
                        <button onClick={addNewVariant} className='bg-[#cfcfcf] active:bg-[#d6d6d6] active:scale-[0.91] active:text-[#696363] px-6 py-[5px] shadow-md rounded-[10px] text-gray-700'>Add New Variant</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end items-center gap-4 mt-16'>
                <button onClick={submitForm} className='bg-[#3EDCFF] text-white active:bg-[#d6d6d6] active:scale-[0.91] active:text-[#696363] px-6 py-[5px] shadow-md rounded-[10px]'>Submit</button>
            </div>
        </div>
    )
}

export default AdminSingleProduct