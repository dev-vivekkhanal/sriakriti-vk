import React, { useState } from 'react'
import search from "../../assets/icons/search.svg";
import cross from "../../assets/icons/cross.svg";
import arrow_left from '../../assets/icons/arrow_circle.svg'
import useGetAllProducts from '../../hooks/getAllProducts';
import img from '../../assets/icons/no-data-found.svg'
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [searchItem, setSearchItem] = useState('');

    const { apiData, loading } = useGetAllProducts('collection');

    const filteredProducts = apiData?.filter((filterValue) => {
        return searchItem !== '' && filterValue?.name?.toLowerCase()?.includes(searchItem?.toLowerCase());
    });

    return (
        <div className='w-[80%] md:w-full relative -translate-x-[6px] sm:-translate-x-0 bg-white border border-gray-300 flex items-center px-2 py-2 rounded-[5px] max-w-[800px] mx-auto'>
            <span className='hidden sm:block w-full max-w-[20px] mr-2'>
                <img src={search} className='w-full' alt="" />
            </span>
            <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className='sm:border-l border-gray-300 w-full pl-2 pr-1 sm:pr-3 text-[14px] outline-none' placeholder='Search products' />
            {
                searchItem !== '' ?
                    (<span className='w-full max-w-[13px] mr-0.5 cursor-pointer' onClick={(e) => setSearchItem('')}>
                        <img src={cross} className='w-full' alt="" />
                    </span>)
                    : null
            }
            <div className={`w-[100%] min-w-[250px] bg-white shadow-lg absolute transition-all duration-200 ease-in-out ${searchItem !== '' ? 'h-[400px]' : 'h-0 overflow-hidden'} top-[105%] sm:top-[103%] -left-[35%] sm:left-0`}>
                <div className={`w-full overflow-y-scroll h-[400px] pb-2 ${searchItem !== '' ? 'h-[400px]' : 'h-0 overflow-hidden'}`}>
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full border-t-4 border-gray-500 border-solid h-12 w-12"></div>
                        </div>
                    ) : (
                        <>
                            {
                                filteredProducts?.length ? (
                                    <>
                                        {
                                            filteredProducts?.map((data) => (
                                                <Link to={`/product-details/${data?.id}`} className='w-full border-b flex pl-2 py-2 hover:bg-gray-200' key={data?.id} onClick={() => setSearchItem('')}>
                                                    <div className='w-full max-w-[60px] aspect-square bg-gray-200'>
                                                        <img src={data?.image} alt="" />
                                                    </div>
                                                    <div className='w-full flex justify-start items-center px-4'>
                                                        <h1 className='text-[14px] font-[500]'>{data?.name}</h1>
                                                    </div>
                                                    <div className='w-full max-w-[60px] flex justify-center items-center'>
                                                        <img src={arrow_left} className="w-full max-w-[30px]" alt="" />
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <div className='w-full h-[390px] flex justify-center items-center'>
                                        <div className='w-full max-w-[180px] flex flex-col justify-center items-center gap-3'>
                                            <img src={img} alt="" />
                                            <h1 className='font-[500] text-[16px]'>No results found!</h1>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar