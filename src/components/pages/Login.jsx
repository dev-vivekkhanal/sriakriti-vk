import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import home from '../../assets/icons/home-temp.svg'
import see from '../../assets/icons/eye.svg'
import hide from '../../assets/icons/hide.svg'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { errorText, emailRef, passwordRef, loading, loginUser } = useLogin(navigate);

  return (
    <div className=' flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-evenly px-5 mt-16 mb-16 md:mt-[220px] md:mb-[250px] w-[98%] md:w-[90%] mx-auto'>

      <div className='bg-[E3E3E3] md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] border-2 bg-[#E3E3E3] lg:py-10'>
        <h1 className='lora md:py-4 text-[24px] md:text-[30px] font-[500] tracking-[1px] italic mt-4' >New Customer</h1>
        <p className='mx-4 py-2 pt-4 text-center poppins font-[300] text-[#696969] text-[12px] md:text-[14px]'>Join our community of elegance seekers and unlock a world of exquisite jewelry. Your journey to timeless beauty begins here. Embrace the allure, and let your style shine. Sign up today and start your enchanting exploration.</p>
        <Link to='/signup'><button className='my-5 bg-black text-white p-3 px-12 text-[14px] poppins tracking-[4px] font-[300]'>SIGN UP</button></Link>
      </div>
      <div className='hidden md:inline-block w-[1px] bg-[black]'></div>

      <form onSubmit={loginUser} className='md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] py-2 bg-[#E3E3E3] lg:py-10'>
        <h1 className='lora py-2 text-[30px] font-[500] tracking-[1px] italic' >Login</h1>
        <div className='flex flex-col justify-evenly gap-4 w-[70%]'>
          <input type="email" ref={emailRef} name="" placeholder='Email' className='text-[13px] border-2 pl-2 p-2 outline-none' />
          <div className='flex justify-center'>
            <input type={showPassword ? 'text' : 'password'} ref={passwordRef} name="" placeholder='Password' className='w-full text-[13px] border-2 pl-2 p-2 outline-none' />
            <div className='w-fit bg-slate-100 flex justify-center px-2 items-center' onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword ? hide : see} className={`w-full max-w-[20px] ${showPassword ? 'rotate-180' : ''} transition-all duration-200 ease-in-out`} alt="" />
            </div>
          </div>
          <p className='text-[12px] text-red-500'>{errorText}</p>
          <button className='bg-black text-white p-3 mb-2 px-12 text-[14px] poppins tracking-[4px] font-[300] flex justify-center items-center' type='submit'>
            {
              loading ? (
                <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-4 border-t-gray-700" />
              ) : 'LOGIN'
            }
          </button>
        </div>
      </form>
      <div className='fixed bottom-8 left-8 w-fit aspect-square flex justify-center items-center rounded-full shadow-md bg-gray-200 p-3'>
        <Link to={`/`}><img src={home} className='w-full max-w-[40px]' alt="" /></Link>
      </div>
    </div>
  )
}

export default Login