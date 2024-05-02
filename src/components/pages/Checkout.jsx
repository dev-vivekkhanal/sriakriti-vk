import React, { useEffect, useState } from 'react'
import checkout from '../../mockapi/checkoutPageApi'
import axios from 'axios';

const Checkout = () => {

    const [checkoutData, setCheckoutData] = useState();
    const [checkoutDataLoader, setCheckoutDataLoader] = useState(false);

    useEffect(() => {
        setCheckoutDataLoader(true);
        let formdata = new FormData();
        formdata.append('token', localStorage.getItem('token'));
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'checkout', formdata).then((res) => {
            setCheckoutData(res.data);
            setCheckoutDataLoader(false);
        })
    }, []);

    return (
        <div className='w-full pt-8 pb-16 bg-[#eeeeee]'>

            <div className='w-[90%] mx-auto text-center poppins flex gap-2 text-[11px] md:text-[12px] md:pb-10'>
                <h1 className='tracking-[2px] font-[500]'>{checkout?.path?.first}</h1>
                <h1 className='tracking-[2px] font-[300]'>{checkout?.path?.second}</h1>
                <h1 className='tracking-[2px] font-[300]'>{checkout?.path?.third}</h1>
            </div>

            <div className='w-[90%] mx-auto'>
                <h1 className='text-[40px]'>Checkout details</h1>
            </div>

            {
                checkoutDataLoader ? (
                    <div className='w-[90%] h-[60vh] mx-auto md:flex md:gap-4 my-10'>
                        <div className='w-full flex flex-col h-full gap-3'>
                            {
                                Array(5).fill()?.map((skeleton) => (
                                    <div key={skeleton} className={`w-full h-full bg-gray-300 animate-pulse`}></div>
                                ))
                            }
                        </div>
                        <div className='w-full flex flex-col h-full md:max-w-[40%]'>
                            <div className={`w-full md:h-full bg-gray-300 animate-pulse`}></div>
                        </div>
                    </div>
                ) : (
                    <div className='w-[90%] mx-auto md:flex md:gap-2 my-10'>

                        {/* flex child 1 */}
                        <div className='my-2 w-full md:w-[65%] md:border-r md:border-r-black md:pr-20'>

                            {/* flex child 1.1 */}
                            <div className=' my-2 flex flex-col items-center max-w-[700px] mx-auto'>

                                {/* address form */}
                                <div className='w-full py-3 mb-6'>
                                    <div className='w-full flex justify-between my-2'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkoutData?.form?.header?.heading}</h1>
                                        {/* <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkoutData?.form?.header?.sub_heading}</p> */}
                                    </div>
                                    <form className='w-full md:grid grid-cols-2 gap-4'>
                                        {
                                            checkoutData?.form?.content?.map((data, i) => (
                                                <div className='w-full flex flex-col justify-start' key={i}>
                                                    <label className='poppins text-[12px]' >{data?.label}</label>
                                                    <input type={`text`} value={data?.value} className='p-1 px-2' />
                                                </div>
                                            ))
                                        }
                                    </form>
                                </div>

                                {/* address card */}
                                <div className='w-full py-3 mb-6'>
                                    <div className='w-full flex justify-between my-2'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkoutData?.address?.header?.heading}</h1>
                                        {/* <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkoutData?.address?.header?.sub_heading}</p> */}
                                    </div>
                                    {
                                        checkoutData?.address?.content?.map((data, i) => (
                                            <div className='flex flex-col justify-start text-[12px]' key={i}>
                                                <p className='poppins text-[11px] tracking-[2px]' >{data?.locality}</p>
                                                <p className='poppins text-[11px] tracking-[2px]' >{data?.city}</p>
                                                <p className='poppins text-[11px] tracking-[2px]' >{data?.pincode}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* flex child 1.2 */}
                            <div className=' my-2 flex justify-center items-center max-w-[700px] mx-auto'>

                                {/* item details */}
                                <div className='w-full py-3 mb-6 '>
                                    <div className='w-full flex justify-between my-2'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkoutData?.item?.header?.heading}</h1>
                                        <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkoutData?.item?.header?.sub_heading}</p>
                                    </div>
                                    <div className='max-h-[150px] overflow-y-scroll'>
                                        {
                                            checkoutData?.item?.content?.map((data, i) => (
                                                <div className='w-[98%] mx-auto flex justify-between text-[12px] py-2 gap-3 border-b border-b-[#69696927]' key={i}>
                                                    <div className='w-[90px]'>
                                                        <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-full" />
                                                    </div>
                                                    <div className='w-full flex flex-col justify-start'>
                                                        <h1 className='lora text-[14px] font-[500]'>{data?.title}</h1>
                                                        <p className='poppins text-[11px] tracking-[2px]'>ID: {data?.id}</p>
                                                        <div className='w-full flex justify-end'>
                                                            <p className='poppins text-[11px] tracking-[2px]'>Rs {data?.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* flex child 2 */}
                        <div className='my-2 w-full md:w-[50%] border-t border-t-black md:border-t-0'>

                            {/* checkout data */}
                            <div className='md:mt-16 w-full md:w-[80%] md:ml-auto mr-10'>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkoutData?.checkout_data?.making_charges?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >Rs {checkoutData?.checkout_data?.making_charges?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.sub_total?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >Rs {checkoutData?.checkout_data?.sub_total?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.shipping?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >Rs {checkoutData?.checkout_data?.shipping?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.tax?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >Rs {checkoutData?.checkout_data?.tax?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkoutData?.checkout_data?.total?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >Rs {checkoutData?.checkout_data?.total?.amount}</p>
                                </div>
                                <div className='w-full flex justify-center items-center my-3 md:my-5'>
                                    <button className='bg-black text-white p-4 px-14 text-[13px] font-[300] tracking-[3px] md:w-full'>{checkout?.checkout_data?.checkout_button}</button>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Checkout