import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import SidebarAtom from '../recoil/atoms/sidebar/SidebarAtom';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NavHeader from '../components/global components/NavHeader';
import Footer from '../components/global components/Footer';
import Sidebar from '../components/global components/Sidebar';
import mobile_menu from "../../src/assets/icons/menu-mobile.svg";
import cross from "../../src/assets/icons/cross.svg";
import Login from '../components/pages/Login';
import LandingPage from '../components/pages/LandingPage';
import Productpage from '../components/pages/Productpage';
import AllCollections from '../components/pages/AllCollections';
import Cart from '../components/pages/Cart';
import AboutUs from '../components/pages/AboutUs';
import ContactUs from '../components/pages/ContactUs';
import FAQPage from '../components/pages/FAQPage';
import cart from "../assets/icons/cart.svg";
import ReturnandRefund from '../components/pages/ReturnandRefund';
import TermsandConditions from '../components/pages/TermsandConditions';
import ReturnandExchange from '../components/pages/ReturnandExchange';
import MyAccount from '../components/pages/MyAccount';
import AddressAdd from '../components/pages/AddressAdd';
import EditAddress from '../components/pages/EditAdress';
import OrderList from '../components/pages/OrderList';
import OrderDetails from '../components/pages/OrderDetails';
import Wishlist from '../components/pages/Wishlist';
import Checkout from '../components/pages/Checkout';
import ProtectedRoute from '../helpers/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewSignUp from '../components/pages/NewSignUp';
import useGetUserCartDetails from '../hooks/useGetUserCart';
import UnderDevelopmentPage from '../components/global components/UnderDevelopmentPage';
import ProtectedRouteUnderDev from '../helpers/ProtectedRouteUnderDev';
import NotFoundPage from '../components/pages/NotFoundPage';


const ClientApp = () => {


    const [navToggle, setNavToggle] = useRecoilState(SidebarAtom);

    const { cartData, cartLoading } = useGetUserCartDetails();

    const location = useLocation();

    const shouldRenderComponent = (pathname) => {
        const excludedPaths = ['/signup', '/login', '/dev', '/not-found'];
        return !excludedPaths.includes(pathname);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="relative">
            {/* overlay  */}
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1000] transition-all duration-500 ${navToggle ? "block" : "hidden"}`} onClick={() => setNavToggle(false)} />

            <div className="w-full relative">
                <Sidebar />
            </div>

            {/* mobile navbar open button */}
            <div className="md:hidden fixed flex gap-6 top-[23px] right-[8px] z-[1003] cursor-pointer p-2">
                <Link to={`/cart`} className='w-fit cursor-pointer relative'>
                    <img src={cart} className='w-[25px]' alt="" />
                    {cartData?.products?.length > 0 ? <span className='w-5 xl:h-6 h-5 xl:w-6 bg-red-500 absolute rounded-full -top-[12px] -right-[12px] flex justify-center items-center text-[12px] border border-gray-200 text-white xl:pt-[2px]'>{cartData?.products?.length}</span> : null}
                </Link>
                <img
                    src={!navToggle ? mobile_menu : cross}
                    className="w-[23px] z-[9990] "
                    onClick={() => setNavToggle(!navToggle)}
                />
            </div>

            {shouldRenderComponent(location.pathname) ? (<NavHeader />) : null}

            <div className={`${location?.pathname?.includes('admin') || location?.pathname === '/dev' || location?.pathname === '/not-found' ? 'p-0' : 'pt-[100px] md:pt-[132px]'}`}>
                <Routes>
                    <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/not-found' : '/login'} replace={true} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/product-details/:product_id" element={<Productpage />} />
                    <Route path="/single-category/:category_id" element={<AllCollections />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/signup" element={<NewSignUp />} />
                    <Route path="/refund" element={<ReturnandRefund />} />
                    <Route path="/terms&conditions" element={<TermsandConditions />} />
                    <Route path="/return" element={<ReturnandExchange />} />
                    <Route path="/dev" element={<UnderDevelopmentPage />} />
                    <Route path="/not-found" element={<NotFoundPage />} />

                    <Route element={<ProtectedRoute />}  >
                        <Route path="*" element={<Navigate replace to='/' />} />
                        <Route path="/account" element={<MyAccount />} />
                        <Route path="/add-address" element={<AddressAdd />} />
                        <Route path="/edit-address/:id" element={<EditAddress />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Route>

                    <Route element={<ProtectedRouteUnderDev />}>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/orders" element={<OrderList />} />
                        <Route path="/order-details" element={<OrderDetails />} />
                    </Route>
                </Routes>
            </div>

            {shouldRenderComponent(location?.pathname) ? (<Footer />) : null}

            <ToastContainer />
        </div>
    )
}

export default ClientApp