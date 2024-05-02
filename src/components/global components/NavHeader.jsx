import React, { useEffect, useState } from 'react'
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.svg";
import profile from '../../assets/icons/profile.svg'
import nav_data from '../../mockapi/mobileNavData';
import heart from '../../assets/icons/heart-outline.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mobile_menu from "../../assets/icons/menu-mobile.svg";
import logout from '../../assets/icons/logout.svg'
import cart_out from '../../assets/icons/my_orders.svg'
import SearchBar from './SearchBar';
import { useRecoilState } from 'recoil';
import { cartDataAtom } from '../../recoil/atoms/cart/cartDataAtom';
import useGetUserCartDetails from '../../hooks/useGetUserCart';

const NavHeader = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    // const [cartDataList, setCartDataList] = useRecoilState(cartDataAtom);

    const { cartData: cartDataList } = useGetUserCartDetails();

    const [accountShowDropdown, setAccountShowDropdown] = useState(false);

    return (
        <div className={`fixed top-0 left-0 right-0 z-[999] bg-gray-100 px-4 md:px-6 xl:px-12 pb-4 pt-2 poppins shadow-md ${pathname?.includes('admin') ? 'hidden p-0' : ''}`}>
            <div className='w-full flex items-end md:items-center sm:gap-6 md:gap-10'>
                <div className='md:translate-y-3'>
                    <Link to={`/`} className='w-full'><img src={logo} className='w-full max-w-[80px] md:max-w-[120px]' alt="" /></Link>
                </div>
                <div className='w-[220px] sm:w-full mt-4 md:mt-0 hidden md:block'>
                    <SearchBar />
                </div>
                <div className='w-fit md:flex items-center gap-6 hidden'>
                    <Link to={`/account`} className='w-fit cursor-pointer'>
                        <img src={profile} className='w-[30px]' alt="" />
                    </Link>
                    {
                        localStorage.getItem("status") === 'true' ?
                            <Link to={`/wishlist`} className='w-fit cursor-pointer'>
                                <img src={heart} className='w-[32px]' alt="" />
                            </Link>
                            :
                            null
                    }
                    <Link to={`/cart`} className='w-fit cursor-pointer relative'>
                        <img src={cart} className='w-[30px]' alt="" />
                        {cartDataList?.products?.length > 0 ? <span className='w-5 xl:h-6 h-5 xl:w-6 bg-red-500 absolute rounded-full -top-[12px] -right-[12px] flex justify-center items-center text-[12px] border border-gray-200 text-white xl:pt-[2px]'>{cartDataList?.products?.length}</span> : null}
                    </Link>
                </div>
                <div className='w-full max-w-[10px] flex justify-center items-center md:hidden'>
                    <Link className='w-fit cursor-pointer'>
                        <img src={mobile_menu} className='w-[30px] invisible' alt="" />
                    </Link>
                </div>
            </div>
            <div className='w-full md:flex justify-between lg:justify-evenly items-center mt-2 pt-2 hidden xl:px-24'>
                {
                    nav_data?.map((route) => {
                        if (localStorage.getItem('status')) {
                            return (
                                <span className={`${route?.title === 'LOGIN' || route?.title === 'WISHLIST' ? 'hidden' : ''} relative group`} key={route?.id} onMouseLeave={() => route?.title === 'ACCOUNT' ? setAccountShowDropdown(false) : null}>
                                    <Link to={route?.routes} className={`${pathname === route?.routes ? 'font-[600] scale-110' : ''} transition-all duration-200 ease-in-out`} onMouseEnter={() => route?.title === 'ACCOUNT' ? setAccountShowDropdown(true) : null}>{route?.title}</Link>
                                    {
                                        route?.title === 'ACCOUNT' ? (
                                            <div className={`${route?.title === 'ACCOUNT' ? '' : 'hidden'} absolute flex flex-col gap-2 top-[80%] -right-[20%] lg:-right-[72%] w-[200px] bg-white shadow-sm overflow-hidden transition-all duration-100 ${accountShowDropdown ? 'h-[150px] pt-3 py-2' : 'h-0'}`}>
                                                <Link to='/account' className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]">
                                                    <p className="poppins text-[14px]">My Profile</p>
                                                    <div><img src={profile} className="w-[14px]" /></div>
                                                </Link>
                                                <Link to='/orders' className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]">
                                                    <p className="poppins text-[14px]">My Orders</p>
                                                    <div><img src={cart_out} className="w-[14px]" /></div>
                                                </Link>
                                                <button className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]" onClick={() => {
                                                    localStorage.clear()
                                                    navigate('/')
                                                }}>
                                                    <p className="poppins text-[14px]">Logout</p>
                                                    <div><img src={logout} className="w-[14px]" /></div>
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </span>
                            )
                        } else {
                            return (
                                <span className={`${route?.title === 'ACCOUNT' || route?.title === 'WISHLIST' ? 'hidden' : ''} group`} key={route?.id}>
                                    <Link to={route?.routes} className={`${pathname === route?.routes ? 'font-[600] scale-110' : ''} transition-all duration-200 ease-in-out`}>{route?.title}</Link>
                                </span>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default NavHeader