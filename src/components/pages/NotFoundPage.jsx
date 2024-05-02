import React, { useEffect, useState } from 'react'
import not_found from '../../assets/icons/404_not-found.svg'
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../global components/CountdownTimer';

const NotFoundPage = () => {

    const [redirect, setRedirect] = useState(4);

    const navigate = useNavigate();

    const handleTimerEnd = () => {
        navigate('/')
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-6 px-5'>
            <img src={not_found} className='w-full max-w-[600px]' alt="" />
            <button onClick={handleTimerEnd} className='mt-10 bg-black text-white active:scale-95 transition-all duration-200 ease-in-out py-4 poppins text-[15px] md:text-[18px px-10 tracking-tight shadow-md'>Go back to homepage</button>
            <p className=' text-md font-[400]  cursor-pointer'>or you will be automatically redirected to the homepage in,</p>
            <CountdownTimer minutes={0} seconds={10} onTimerEnd={handleTimerEnd} />
        </div>
    )
}

export default NotFoundPage