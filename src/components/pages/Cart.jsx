import React from "react";
import card_data from "../../mockapi/cartPageApi";
import left_img from '../../assets/icons/black-arrow-left.svg';
import deleteIcon from '../../assets/icons/delete.svg'
import { Link, NavLink, useNavigate } from "react-router-dom";
import useGetUserCartDetails from "../../hooks/useGetUserCart";
import ProductCard from "../global components/ProductCard";
import useUpdateCartQuantity from "../../hooks/useUpdateProductCartQuantity";
import useDeleteCartItem from "../../hooks/useDeleteCartItem";

const Cart = () => {

  const navigate = useNavigate();

  const { cartData, cartLoading } = useGetUserCartDetails();

  const { loading: quantityUpdateLoading, error: quantityUpdateError, updateQuantity } = useUpdateCartQuantity();

  const { loading: DeleteItemLoading, error: DeleteItemError, deleteItem } = useDeleteCartItem();


  return (

    <div className="w-full pb-24">
      <span className=" w-[100px]"><img onClick={() => navigate(-1)} src={left_img} className="cursor-pointer ml-[10px] md:ml-[200px] lg::ml-[270px] mt-7 w-[30px]" /></span>
      <div className="w-[90%] mx-auto text-center lora italic text-[22px] py-8">
        <h1>My Cart</h1>
      </div>

      {
        cartLoading ? (
          <div className="w-[80%] mx-auto flex h-[40vh] gap-5">
            <div className="w-full flex flex-col h-full gap-5">
              {
                Array(6).fill()?.map((skeleton) => (
                  <div key={skeleton} className={`w-full ${skeleton == 1 || skeleton == 5 ? 'h-[300px]' : 'h-[200px]'} bg-gray-300 animate-pulse`}></div>
                ))
              }
            </div>
            <div className="w-full flex flex-col h-full gap-5 max-w-[450px]">
              {
                Array(7).fill()?.map((skeleton) => (
                  <div key={skeleton} className={`w-full ${skeleton == 1 || skeleton == 5 ? 'h-[400px]' : 'h-[200px]'} bg-gray-300 animate-pulse`}></div>
                ))
              }
            </div>
          </div>
        ) : (
          <>
            {
              cartData?.products?.length ?
                <div className="w-[90%] md:flex md:w-[80%] mx-auto md:h-[400px]">

                  <div className="w-full mx-auto my-auto h-[400px] overflow-y-scroll mb-5 md:mb-0">
                    {
                      cartData?.products?.map((data, i) => (
                        <div className="flex justify-center items-center gap-2 md:gap-12 py-2 md:px-3 md:pr-10 " key={i}>
                          <div className=" flex justify-center items-center">
                            <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[100px]" />
                          </div>
                          <div className="w-full max-w-[300px] md:max-w-none flex flex-col items-start">
                            <div className="w-full flex justify-between items-center">
                              <div className="pt-2">
                                <h1 className="lora font-[600] text-[15px] ">{data?.title}</h1>
                                <h1 className="lora font-[600] text-[15px] ">ID : {data?.id}</h1>
                                <h1 className="lora font-[600] text-[15px] ">₹ {data?.price}</h1>
                              </div>
                              <div>
                                <span onClick={async () => await deleteItem(data?.cart_product_id)}>
                                  <img src={deleteIcon} className="w-full max-w-[20px]" alt="" />
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center w-full justify-end">
                              <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center"
                                onClick={async () => await updateQuantity(data?.cart_product_id, '-')}
                              >-</button>
                              <span className="px-2 flex py-1 justify-center items-center" >
                                <p className="text-[17px] bg-[#3EDCFF] font-[500] px-2 flex pt-1 justify-center items-center">{data?.qty}</p>
                              </span>
                              <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center"
                                onClick={async () => await updateQuantity(data?.cart_product_id, '+')}
                              >+</button>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>

                  <div className="border-t border-t-black md:border-t-0 md:border-l md:border-l-black w-[90%] md:w-full mx-auto md:px-3 md:pl-10 md:max-w-[500px] max-w-[400px]">
                    <div className="w-full poppins flex justify-between items-center py-3 md:pt-10">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.coupon?.title}</h1>
                      <button className="text-[13px] md:text-[16px] font-[400]">{card_data?.checkout_data?.coupon?.button}</button>
                    </div>
                    <div className="w-full poppins flex justify-between items-center py-3">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.packaging?.title}</h1>
                      <button className="text-[13px] md:text-[16px] font-[400]">{card_data?.checkout_data?.packaging?.button}</button>
                    </div>
                    <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.sub_total?.title}</h1>
                      <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {cartData?.checkout_data?.sub_total?.amount}</h1>
                    </div>
                    <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.shipping?.title}</h1>
                      <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {card_data?.checkout_data?.shipping?.charges}</h1>
                    </div>
                    <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.tax?.title}</h1>
                      <h1 className="text-[13px] md:text-[16px] font-[400]">{cartData?.checkout_data?.tax?.amount}</h1>
                    </div>
                    <div className="w-full poppins flex justify-between items-center py-3">
                      <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.total?.title}</h1>
                      <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {cartData?.checkout_data?.total?.amount}</h1>
                    </div>
                    <div className="w-[100%] mx-auto py-3">
                      <NavLink to='/checkout'><button className="w-full p-4 poppins tracking-[3px] text-[14px] bg-black text-white">{card_data?.checkout_data?.checkout_button}</button></NavLink>
                    </div>
                  </div>

                </div>
                :
                <div className="w-full flex justify-center items-center md:mt-20 mb-10">
                  <div className="flex flex-col justify-center items-center w-full ">
                    <div className="w-full text-center lora text-[20px] font-[500] my-12">
                      <h1>The Cart is Empty</h1>
                    </div>
                    <div className="w-full flex justify-center items-center my-12">
                      <Link to={`/`}><button className="bg-[#3EDCFF] tracking-[3px] text-[15px] p-4">CONTINUE SHOPPING</button></Link>
                    </div>
                  </div>
                </div>
            }
          </>
        )
      }

      <div className="w-[90%] mx-auto pt-24 text-center">
        <h1 className="lora text-[18px] md:text-[24px] font-[500]">Our recommendations for you</h1>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 justify-items-center gap-1 md:gap-4 my-10">
        {
          cartLoading ? (
            <>
              {
                cartData?.recomended_products?.slice(0, 8)?.map((data, i) => (
                  <div className="relative my-2 w-full" key={i}>
                    <div className={`w-[80%] bg-gray-300 min-h-[300px] mb-5 animate-pulse`}>

                    </div>
                  </div>
                ))
              }
            </>
          ) : (
            <>
              {
                cartData?.recomended_products?.slice(0, 8)?.map((data, i) => (
                  <ProductCard key={i} name={data?.name} id={data?.id} category={data?.category} image={data?.image} />
                ))
              }
            </>
          )
        }
      </div>
    </div>
  );
};

export default Cart;
