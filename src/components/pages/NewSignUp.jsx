import React, { useState } from 'react'
import see from '../../assets/icons/eye.svg'
import hide from '../../assets/icons/hide.svg'
import home from '../../assets/icons/home-temp.svg'
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

const NewSignUp = () => {

    const [signUpData, setSignUpData] = useState({
        gender: '',
        name: '',
        email: '',
        phone_code: '',
        phone_number: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const [errorText, setErrorText] = useState('');

    const [agreeTerms, setAgreeTerms] = useState(false);

    const validateSignUpData = (data) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.gender === '') {
            setErrorText('Gender should not be empty.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (data.phone_number.length !== 10) {
            setErrorText('Phone number should have exactly 10 digits.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (data.name.length < 4) {
            setErrorText('Name should have at least 4 characters.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (!emailRegex.test(data.email)) {
            setErrorText('Please enter a valid email address.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (data.password.length < 4) {
            setErrorText('Password should have at least 4 characters.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        }
        else {
            return true
        }
    };

    const { signUp, loading } = useSignUp();

    const handleSubmitForm = () => {
        const validationError = validateSignUpData(signUpData);
        const areAllFieldsFilled = Object.values(signUpData).every(value => value !== '')
        if (!areAllFieldsFilled) {
            setErrorText('Please fill in all the required fields.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (!agreeTerms) {
            setErrorText('Please agree to terms & conditions.');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else if (signUpData?.password?.length < 4) {
            setErrorText('Password too short!');
            setTimeout(() => {
                setErrorText('');
            }, 3000);
        } else {
            if (validationError) {
                signUp(signUpData);
            }
        }
    };

    return (
        <div className='w-full h-[85vh] flex justify-center items-center relative'>
            <div className='w-full max-w-[500px] bg-[#E3E3E3] pb-10 pt-3 px-14 rounded-[3px] shadow-md'>
                <div className='w-full pt-2 text-center'>
                    <p className='text-red-600'>{errorText}</p>
                </div>
                <h1 className='lora italic text-[24px] font-[400] py-10 text-center'>New Customer</h1>
                <div className='w-full'>
                    <div className='w-full flex flex-col gap-3'>
                        <div className='w-full flex justify-center gap-10 text-[14px]'>
                            <div className='flex gap-3 items-center'>
                                <label htmlFor="gender">Male</label>
                                <div className='w-[10px] h-[10px] border border-black rounded-full' onClick={() => setSignUpData({
                                    ...signUpData,
                                    gender: 'M',
                                })} style={{ backgroundColor: signUpData?.gender === 'M' ? 'grey' : '' }}></div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <label htmlFor="gender">Female</label>
                                <div className='w-[10px] h-[10px] border border-black rounded-full' onClick={() => setSignUpData({
                                    ...signUpData,
                                    gender: 'F',
                                })} style={{ backgroundColor: signUpData?.gender === 'F' ? 'grey' : '' }}></div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <label htmlFor="gender">Others</label>
                                <div className='w-[10px] h-[10px] border border-black rounded-full' onClick={() => setSignUpData({
                                    ...signUpData,
                                    gender: 'O',
                                })} style={{ backgroundColor: signUpData?.gender === 'O' ? 'grey' : '' }}></div>
                            </div>
                        </div>
                        <div className=''>
                            <input type="text" className='w-full px-3 py-2 text-[14px] outline-none' placeholder='Name' value={signUpData?.name} onChange={(e) => setSignUpData({
                                ...signUpData,
                                name: e.target.value
                            })} />
                        </div>
                        <div className=''>
                            <input type="text" className='w-full px-3 py-2 text-[14px] outline-none' placeholder='Email' value={signUpData?.email} onChange={(e) => setSignUpData({
                                ...signUpData,
                                email: e.target.value
                            })} />
                        </div>
                        <div className='w-full flex gap-2'>
                            <div className=''>
                                <input type="text" className='w-[50px] px-3 py-2 text-[14px] outline-none' placeholder='code' value={signUpData?.phone_code} onChange={(e) => setSignUpData({
                                    ...signUpData,
                                    phone_code: e.target.value
                                })} />
                            </div>
                            <div className='w-full'>
                                <input type="number" min={0} className='w-full px-3 py-2 text-[14px] outline-none' placeholder='Phone Number' value={signUpData?.number} onChange={(e) => setSignUpData({
                                    ...signUpData,
                                    phone_number: e.target.value
                                })} />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <input type={showPassword ? 'text' : 'password'} className='w-full px-3 py-2 text-[14px] outline-none' placeholder='Password' value={signUpData?.password} onChange={(e) => setSignUpData({
                                ...signUpData,
                                password: e.target.value
                            })} />
                            <div className='w-fit bg-slate-100 flex justify-center px-1.5 items-center' onClick={() => setShowPassword(!showPassword)}>
                                <img src={showPassword ? hide : see} className={`w-full max-w-[20px] ${showPassword ? 'rotate-180' : ''} transition-all duration-200 ease-in-out`} alt="" />
                            </div>
                        </div>
                        {/* <div className='w-full flex'>
                            <input type={showConfirmPassword ? 'text' : 'password'} className='w-full px-3 py-2 text-[14px] outline-none' placeholder='Confirm password' value={password?.newPw} onChange={async (e) => {
                                await setPassword({
                                    ...password,
                                    newPww: e.target.value,
                                })
                                if (signUpData?.pw === signUpData?.newPw) {
                                    setSignUpData({
                                        ...signUpData,
                                        password: e.target.value
                                    })
                                } else {
                                    setErrorText('Passwords dont match!!')
                                }
                            }} />
                            <div className='w-fit bg-slate-100 flex justify-center px-1.5 items-center' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <img src={showConfirmPassword ? hide : see} className={`w-full max-w-[20px] ${showConfirmPassword ? 'rotate-180' : ''} transition-all duration-200 ease-in-out`} alt="" />
                            </div>
                        </div> */}
                    </div>
                    <div className='w-full flex justify-center items-center pb-8 pt-4'>
                        <input type="checkbox" name="terms&conditions" value={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} id="" className='mb-[14px]' />
                        <span className='text-[10px] text-center w-full max-w-[300px]'>
                            <p>By Signing up to create an account I accept SriAakriti's Terms & Conditions & Privacy Policy</p>
                        </span>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <button onClick={handleSubmitForm} className='bg-black text-white poppins text-[13px] md:text-[16px] py-4 px-16 font-[300] tracking-[3px] sm:w-auto'>
                            {loading ? <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-4 border-t-gray-700" /> : 'SIGN UP'}
                        </button>
                    </div>
                    <div className='w-full pt-5 pb-2 text-[13px] text-center'>
                        <h1>Already a user ? <Link to={`/login`}><span className='underline'>Login</span></Link></h1>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-1 left-8 w-fit aspect-square flex justify-center items-center rounded-full shadow-md bg-gray-200 p-3'>
                <Link to={`/`}><img src={home} className='w-full max-w-[40px]' alt="" /></Link>
            </div>
        </div>
    )
}

export default NewSignUp