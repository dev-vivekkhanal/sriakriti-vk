import React from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import order_white from '../../assets/icons/order-admin-white.svg'
import logout from '../../assets/icons/logout.svg'
import product_white from '../../assets/icons/product-admin-white.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AdminSIdebar = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className='w-full max-w-[80px] md:max-w-[300px] h-screen fixed top-0 left-0 p-2 md:p-4'>
            <div className='bg-[#3EDCFF] h-full rounded-[10px] relative'>
                <div className='w-full max-w-[30px] md:max-w-[30%] mx-auto py-14'>
                    <img src={logo} className='w-full' alt="" />
                </div>
                <div className='w-full mt-20 flex flex-col gap-2'>
                    <Link to={`/admin-products`} className={`w-full ${pathname === '/admin-products' ? 'bg-[#19C7EE] text-white' : ''}`}>
                        <div className='w-full hover:bg-[#19C7EE] hover:text-white flex justify-center md:justify-between items-center text-[17px] font-[500] poppins py-2 md:px-6'>
                            <h1 className='hidden md:block'>Products</h1>
                            <img src={pathname === '/admin-products' ? product_white : products_logo} className='w-full max-w-[25px]' alt="" />
                        </div>
                    </Link>
                    <Link to={`/admin-orders`} className={`w-full ${pathname === '/admin-orders' ? 'bg-[#19C7EE] text-white' : ''}`}>
                        <div className='w-full hover:bg-[#19C7EE] hover:text-white flex justify-center md:justify-between items-center text-[17px] font-[500] poppins py-2 md:px-6'>
                            <h1 className='hidden md:block'>Orders</h1>
                            <img src={pathname === '/admin-orders' ? order_white : order_logo} className='w-full max-w-[25px]' alt="" />
                        </div>
                    </Link>
                </div>
                <div className='absolute bottom-0 left-3 md:left-0 md:px-6 pb-4'>
                    <button onClick={handleLogout} className='flex items-center gap-2 px-3 py-1 rounded-[10px] shadow-lg bg-gray-200 active:scale-95 transition-all duration-200 ease-in-out'>
                        <span><img src={logout} className='w-[13px]' alt="" /></span>
                        <h1 className='text-[14px] font-[500] md:block hidden'>Logout</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminSIdebar