import React, { useState } from 'react'
import addProductsAdminApi from '../../mockapi/addProductsAdminApi'
import down from '../../assets/icons/down-arrow-admin.svg'


const AdminAddNewProduct = () => {

    const [addNewProductData, setAddNewProductData] = useState({
        name: "",
        gender: "",
        category: "",
        category_all: ["rings", "earings", "necklace", "bracelets"],
        discount: "",
        image_1: false,
        image_2: false,
        image_3: false,
        image_4: false,
        diamond_quality: "",
        diamond_quality_all: ["GH-VS/SI", "EF-VVS", "GH-VS/SI & EF-VVS", "P"],
        diamond_size: [],
        diamond_size_all: '',
        size_weight: [],
    });

    const [diamondQualityDropDown, setDiamondQualityDropDown] = useState(false);


    const [searchData, setSearchData] = useState('');
    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center px-5 xl:px-[100px] pt-5 pb-2'>
            <div className='w-full pt-10 flex justify-center items-center'>

                {/* mani flex - 1 */}
                <div className='w-full'>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-full px-3'>
                            <div className='w-full mb-3'>
                                <h1 className='text-[40px] font-[500] roboto'>Add new product</h1>
                                <h1 className='text-[13px] font-[] roboto'>Enter the product details</h1>
                            </div>
                            <div className='w-full flex flex-col md:flex-row mt-10 md:gap-10'>
                                <div className='w-full md:max-w-[30vw]'>
                                    <div className='w-full max-w-[550px] aspect-square'><img src={addProductsAdminApi?.add_product?.main_img} className="w-full aspect-square" /></div>
                                    <div className='w-full flex gap-2 justify-center items-center md:mt-3'>
                                        {
                                            addProductsAdminApi?.add_product?.images?.map((data, i) => (
                                                <img src={data} className="w-[50px] sm:w-[80px] aspect-square" />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex-1 pt-8'>
                                    <div className='w-full rounded-[14px] mt-3 mb-6'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Products Name</label>
                                        <input value={addNewProductData?.name} onChange={(e) => setAddNewProductData({
                                            ...addNewProductData,
                                            name: e?.target?.value,
                                        })} type="text" className='w-full shadow-md rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                    </div>
                                    <div className='w-full rounded-[14px] mt-3 mb-6'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Products Code</label>
                                        <input type="text" className='w-full shadow-md rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                    </div>
                                    <div className='w-full rounded-[14px] mt-3 mb-6 relative'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Diamond Quality</label>
                                        <div className='w-full shadow-md rounded-[14px] flex items-center'>
                                            <input value={addNewProductData?.diamond_quality} onChange={(e) => setAddNewProductData({
                                                ...addNewProductData,
                                                diamond_quality: e?.target?.value,
                                            })} type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                            <span className='w-[30px] mr-2 py-2 cursor-pointer flex justify-center items-center' onClick={() => setDiamondQualityDropDown(!diamondQualityDropDown)}>
                                                <img src={down} alt="" />
                                            </span>
                                        </div>
                                        <div className={`w-full z-[100] rounded-[14px] shadow-md absolute top-[110%] bg-gray-200 ${diamondQualityDropDown ? 'h-[150px]' : 'h-0'} transition-all duration-200 ease-in-out overflow-hidden`}>
                                            {
                                                addNewProductData?.diamond_quality_all?.map((data, i) => (
                                                    <li key={i} className='text-[16px] list-none poppins w-full hover:bg-[#dddddd] my-1 px-3 py-1 cursor-pointer rounded-md' onClick={() => setDiamondQualityDropDown(false)}>{data}</li>
                                                ))
                                            }
                                        </div>
                                        <div className={`${diamondQualityDropDown ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-5`} onClick={() => setDiamondQualityDropDown(false)}></div>
                                    </div>
                                    <div className='w-full flex gap-4 rounded-[14px] mt-3 mb-6'>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input value={addNewProductData?.size_weight} onChange={(e) => setAddNewProductData({
                                                ...addNewProductData,
                                                size_weight: e?.target?.value,
                                            })} type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Weight</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                    </div>
                                    <div className='w-full flex gap-4 rounded-[14px] mt-3 mb-6'>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-full flex justify-end items-center mt-20'>
                        <button className='bg-[#3EDCFF] text-white active:bg-[#d6d6d6] active:scale-[0.91] active:text-[#696363] px-6 py-[5px] shadow-md rounded-[10px]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddNewProduct