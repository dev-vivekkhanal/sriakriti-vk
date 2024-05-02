import React from 'react'
import underDev from '../../assets/icons/dev.svg'
// import underDevImg from '../../assets/images/dev.jpg'
import { useNavigate } from 'react-router-dom'

const UnderDevelopmentPage = () => {

    const navigate = useNavigate();

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center gap-6 px-'>
            <img src={underDev} className='w-full max-w-[600px]' alt="" />
            <h1 className='text-2xl font-[700] text-gray-700 uppercase text-center'>Page under construction</h1>
            <p className='mt-14 text-lg font-[500] underline cursor-pointer' onClick={() => navigate('/')}>Go back to homepage</p>
        </div>
    )
}

export default UnderDevelopmentPage