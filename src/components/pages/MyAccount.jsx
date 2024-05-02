import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile_data from '../../mockapi/myProfileApi'
import img_left from "../../assets/icons/black-arrow-left.svg"
import axios from 'axios'
import cross from '../../assets/icons/cross.svg'
import useProfileApiData from '../../hooks/useGetUserAccountData'
import useDeleteAddressData from '../../hooks/useDeleteAddressData'
import useProfileEdit from '../../hooks/useEditUserProfile'

const MyAccount = () => {

    const navigate = useNavigate();

    const [popUpToggle, setPopUpToggle] = useState(false);

    const [gender, setGender] = useState('')

    const genderRef = useRef();
    const nameRef = useRef();
    const countryCodeRef = useRef();
    const numberRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();

    const { profileApiData, profileApiDataLoader, setProfileApiData, refetchProfileApiData: fetchProfileApiData } = useProfileApiData();

    const { deleteAddressData } = useDeleteAddressData();

    const { editProfile, loading } = useProfileEdit();

    const handleEditProfile = (e) => {
        e.preventDefault();
        editProfile(localStorage?.getItem('token'), gender, emailRef, nameRef, countryCodeRef, numberRef, dobRef).then(() => {
            fetchProfileApiData();
            setPopUpToggle(false);
        });
    };


    return (
        <div className='bg-white pb-24 relative'>
            <span className='inline-block ml-4 md:ml-[250px] mt-4 cursor-pointer'>
                <img src={img_left} className="w-[32px]" onClick={() => navigate(-1)} />
            </span>
            <div className="w-full text-center pt-5 pb-10">
                <h1 className="lora italic text-[18px] md:text-[28px] font-[500]">My Account</h1>
            </div>

            {/* main flex */}

            {
                profileApiDataLoader ? (
                    <div className='w-[90%] md:w-[70%] mx-auto bg-gray-200 animate-pulse h-[50vh]'>

                    </div>
                ) : (
                    <div className='w-[90%] md:w-[70%] mx-auto md:flex md:gap-x-12 md:flex-row-reverse'>
                        {/* first sub-main flex item */}

                        <div className='md:w-[45%] md:flex flex-col justify-between' >
                            {/* my Orders */}
                            <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 md:max-h-[250px] overflow-y-scroll pt-[1rem] min-h-[100px] md:min-h-[300px]'>
                                <div className="w-[90%] mx-auto flex justify-between py-2 lora text-[15px]">
                                    <h1 className="font-[500] md:text-[17px]">{profile_data?.my_orders?.header?.heading}</h1>
                                    <Link to='/orders' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
                                </div>
                                {
                                    profileApiData?.my_orders?.length ? (
                                        <>
                                            {
                                                profileApiData?.my_orders?.content?.map((data, i) => (
                                                    <div className="w-[95%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px]" key={i}>
                                                        <img src={data?.image} className="w-[40px]" />
                                                        <h1>{data?.title}</h1>
                                                        <h1>{data?.price}</h1>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <div className='w-full h-[70%] flex justify-center items-center'>
                                            <h1>No orders found!</h1>
                                        </div>
                                    )
                                }
                            </div>

                            {/* wishlist */}
                            <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 md:max-h-[250px] overflow-y-scroll pt-[1rem] min-h-[200px]'>
                                <div className="w-[90%] mx-auto flex justify-between py-2 lora text-[15px]">
                                    <h1 className="font-[500] md:text-[17px]">{profile_data?.wishlist?.header?.heading}</h1>
                                    <Link to='/wishlist' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
                                </div>
                                {
                                    profileApiData?.wishlist?.map((data, i) => (
                                        <div className="w-[90%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px]" key={i}>
                                            <div className='p-1 bg-white'>
                                                <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[40px]" />
                                            </div>
                                            <h1>{data?.name}</h1>
                                            <h1>{data?.category}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* second sub-main flex item */}

                        <div className='md:w-[55%] md:flex flex-col justify-between' >
                            {/* my profile */}
                            <div className='w-full bg-[#E3E3E3] my-4 py-2 px-4 pt-4 md:min-h-[350px] overflow-y-scroll md:overflow-auto'>
                                <div className="w-[95%] mx-auto flex justify-between py-2 lora text-[15px]">
                                    <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.my_profile?.header?.heading}</h1>
                                    <button onClick={() => setPopUpToggle(true)} className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</button>
                                </div>
                                <div className='md:grid grid-cols-2'>
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Name</label>
                                            <div type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.name}</div>
                                        </div>
                                    </div>
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Gender</label>
                                            <div type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.gender}</div>
                                        </div>
                                    </div>
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Date Of Birth</label>
                                            <div type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.dob}</div>
                                        </div>
                                    </div>
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Email ID</label>
                                            <div type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.email}</div>
                                        </div>
                                    </div>
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Phone No</label>
                                            <div type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.phone_code}{' '}{profileApiData?.user?.phone_no}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* address */}
                            <div className='w-full bg-[#E3E3E3] my-4 py-2 px-4 md:px-0 md:max-h-[155px] overflow-y-scroll pt-4'>
                                <div className="w-[95%] mx-auto flex justify-between md:px-3 py-2 lora text-[14px] mb-4">
                                    <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.address?.header?.heading}</h1>
                                    <Link to='/add-address' className="tracking-[2px]">{profile_data?.address?.header?.sub_heading}</Link>
                                </div>
                                {
                                    profileApiData?.address?.length ?
                                        (
                                            <>
                                                {
                                                    profileApiData?.address?.map((data, i) => (
                                                        <div className='w-[90%] mx-auto flex justify-between items-center my-2 border-b border-b-[#6969696b]' key={i}>
                                                            <div className="w-full flex flex-col justify-start py-2 md:px-3 lora text-[11px] tracking-[1.5px]">
                                                                <div className='w-full flex gap-2'>
                                                                    <h1>{data?.add_line_1},</h1>
                                                                    <h1>{data?.add_line_2}</h1>
                                                                </div>
                                                                <h1>{data?.landmark}</h1>
                                                                <h1>{data?.city}</h1>
                                                                <h1>{data?.country}</h1>
                                                                <h1>{data?.state}</h1>
                                                                <h1>{data?.pincode}</h1>
                                                            </div>
                                                            <Link to={'/edit-address' + '/' + data?.id}>
                                                                <div className='lora text-[12px] pr-1 tracking-[2px]'>
                                                                    <p>edit</p>
                                                                </div>
                                                            </Link>
                                                            <div className='lora text-[12px] pl-1 tracking-[2px] '>
                                                                <p className='border-b border-[#696969] cursor-pointer' onClick={(e) => deleteAddressData(data?.id)}>delete</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <div className='w-full py-6 flex justify-center items-center'>
                                                <h1>No address found!</h1>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                )
            }


            {/* pop up modal */}

            <div className={`z-[150] h-fit pb-4 w-[40vw] mx-auto fixed top-[60%] left-[50%] translate-x-[-60%] translate-y-[-50%] inset-0 bg-[#dddddd] transition-all duration-300 ${popUpToggle ? 'block ease-in' : 'hidden ease-out'}`}>
                <div className='w-full flex justify-end '>
                    {/* <img src="" alt="" /> */}
                    {/* <p className='cursor-pointer mt-5 mr-5' onClick={() => setPopUpToggle(false)}>X</p> */}
                    <img src={cross} className='cursor-pointer mt-5 mr-5 w-[18px] md:w-[20px]' alt="" onClick={() => {
                        let formdata = new FormData();
                        formdata.append("token", localStorage.getItem("token"));
                        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata).then((response) => {
                            // console.log(response?.data)
                            setProfileApiData(response?.data)
                        })
                        setPopUpToggle(false)
                    }} />
                </div>
                <div className='w-full flex justify-center items-center '>
                    <form onSubmit={handleEditProfile} className='w-[80%] mx-auto px-2 '>
                        <div className='flex justify-between items-center'>
                            <div className='' onClick={() => setGender('M')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Male</label>
                                <input ref={genderRef} checked={gender === 'M'} onChange={() => setProfileApiData({
                                    ...profileApiData,
                                    gender: 'M'
                                })} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='male' type="radio" name='gender' />
                            </div>
                            <div className='' onClick={() => setGender('F')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Female</label>
                                <input ref={genderRef} checked={gender === 'F'} onChange={() => setProfileApiData({
                                    ...profileApiData,
                                    gender: 'F'
                                })} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='female' type="radio" name='gender' />
                            </div>
                            <div className='' onClick={() => setGender('O')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Others</label>
                                <input ref={genderRef} checked={gender === 'O'} onChange={() => setProfileApiData({
                                    ...profileApiData,
                                    gender: 'O'
                                })} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='others' type="radio" name='gender' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Name</label>
                            <input ref={nameRef} className='text-[13px] outline-none py-2 pl-2' type="text" defaultValue={profileApiData?.user?.name} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Date of Birth</label>
                            <input ref={dobRef} className='text-[13px] outline-none py-2 pl-2' type="date" defaultValue={profileApiData?.user?.dob} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Email</label>
                            <input ref={emailRef} className='text-[13px] outline-none py-2 pl-2' type="email" defaultValue={profileApiData?.user?.email} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Region Code</label>
                            <input ref={countryCodeRef} className='text-[13px] outline-none py-2 pl-2' type="text" defaultValue={profileApiData?.user?.phone_code} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Phone Number</label>
                            <input ref={numberRef} className='text-[13px] outline-none py-2 pl-2' type="number" min={0} defaultValue={profileApiData?.user?.phone_no} />
                        </div>
                        <div className='w-full pb-4'>
                            <button className='bg-[black] text-white px-4 py-3 w-[50%] tracking-[2px] mx-auto flex justify-center items-center'>
                                {loading ? <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-4 border-t-gray-700" /> : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`fixed inset-0 h-screen w-full bg-black opacity-40 z-[100] ${popUpToggle ? 'block' : 'hidden'}`} onClick={() => setPopUpToggle(false)}></div>
        </div >
    )
}

export default MyAccount