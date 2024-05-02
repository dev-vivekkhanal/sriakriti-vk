import React, { useState } from "react";
import chain from "../../assets/images/chain-1.png";
import arrow from "../../assets/icons/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { cartDataAtom } from "../../recoil/atoms/cart/cartDataAtom";
import useAddToCart from "../../hooks/useAddToCart";
import useGetSingleProductDetails from "../../hooks/getSingleProductDetails";
import useGetAllProducts from "../../hooks/getAllProducts";
import ProductCard from "../global components/ProductCard";

const Productpage = () => {
  const params = useParams();

  const [selectedQuality, setSelectedQuality] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  const { addToCart, cartData } = useAddToCart();

  const { productApiData, productLoading } = useGetSingleProductDetails(
    params?.product_id
  );

  const { apiData, loading } = useGetAllProducts(productApiData?.category);

  return (
    <div className="overflow-x-hidden">
      <div className="md:flex gap-5 w-[95%] mx-auto relative">
        <div className=" md:w-[50%]">
          <div className="pl-3 flex gap-4 items-center md:tracking-[2px] text-[11px] md:text-[18px] my-5 md:my-10"></div>
          <div className="w-[95%] mx-auto object-cover mb-2 md:flex gap-1 justify-center lg:justify-end items-center md:pb-16 md:pr-12 lg:pb-24 lg:pr-24">
            {/* mobile picture */}
            <div className="block md:hidden w-full">
              <div className="w-full">
                {/* <img src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image} className="w-full" /> */}
                <img src={productApiData?.image} className="w-full" />
              </div>
            </div>

            {/* desktop picture */}
            <div className="w-full">
              {!productLoading ? (
                <div className="hidden md:block w-full min-w-[300px] ">
                  <img
                    src={
                      productApiData?.image
                        ? import.meta.env.VITE_APP_BASE_API_LINK +
                          productApiData?.image
                        : chain
                    }
                    className=" w-[90%]"
                  />
                </div>
              ) : (
                <div className="hidden md:block w-full bg-gray-300 aspect-square animate-pulse border min-w-[300px]"></div>
              )}
            </div>
          </div>
        </div>
        <div className="lora w-[95%] md:w-[50%] pt-12 mx-auto tracking-[2px] mt-6">
          {productLoading ? (
            <div className="w-full flex flex-col pt-2">
              {Array(7)
                .fill()
                ?.map((skeleton, index) => (
                  <div
                    key={index}
                    className={`w-[80%] bg-gray-300 ${
                      skeleton == 3 || skeleton == 2 || skeleton == 6
                        ? "h-[40px]"
                        : "h-[100px]"
                    } mb-5 animate-pulse`}
                  ></div>
                ))}
            </div>
          ) : (
            <div className="relative lg:pl-20">
              <h1 className="text-[20px] sm:text-[30px] md:text-[36px] mb-2 font-[600]">
                {productApiData?.name}
              </h1>
              <h1 className="text-[15px] md:text-[18px] lora ">
                {productApiData?.name}
              </h1>
              {/* <h1 className="text-[18px] sm:text-[26px] md:text-[25px] my-3 md:my-[20px] lg:my-[30px]">
                ₹ {productApiData?.selling_price[selectedSize]}
                <span className="line-through text-[20px] text-[#696969] mx-2">
                  ₹{productApiData?.actual_price[selectedSize]}
                </span>
                <span className="text-[18px]">
                  {productApiData?.discount}% Off
                </span>
              </h1> */}
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">
                  Gender
                </h1>
                <div className="flex justify-between md:w-[58%] text-[#6969698a]">
                  <h1 className="text-[12px] md:text-[14px] lora text-black">
                    {productApiData?.gender}
                  </h1>
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">
                  Diamond Quality
                </h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  {productApiData?.diamond_quality?.map((data, i) => (
                    <h1
                      key={i}
                      className={`text-[12px] md:text-[14px] lora cursor-pointer ${
                        i === selectedQuality ? "text-black" : ""
                      } `}
                      onClick={() => setSelectedQuality(i)}
                    >
                      {data}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">
                  Diamond Size
                </h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  {productApiData?.diamond_quality?.map((data, i) => (
                    <h1
                      key={i}
                      className={`text-[12px] md:text-[14px] lora cursor-pointer ${
                        i === selectedQuality ? "text-black" : ""
                      } `}
                      onClick={() => setSelectedQuality(i)}
                    >
                      {data}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">
                  Size
                </h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  {productApiData?.size?.map((data, i) => (
                    <h1
                      key={i}
                      className={`text-[12px] md:text-[14px] lora cursor-pointer ${
                        i === selectedSize ? "text-black" : ""
                      } `}
                      onClick={() => setSelectedSize(i)}
                    >
                      {data}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">
                  Weight
                </h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  {productApiData?.weight?.map((data, i) => (
                    <h1
                      key={i}
                      className={`text-[12px] md:text-[14px] lora cursor-pointer mx-2 ${
                        i === selectedSize ? "text-black" : ""
                      } `}
                      onClick={() => setSelectedSize(i)}
                    >
                      {data}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[80%] flex gap-2 justify-between sticky botton-0 right-0 text-black py-4 ">
                <button
                  onClick={() => {
                    addToCart(productApiData, selectedSize, selectedQuality);
                  }}
                  className="bg-black text-white active:scale-95 transition-all duration-200 ease-in-out py-4 poppins text-[15px] md:text-[18px] lg:text-[22px] px-10 tracking-[2px] md:tracking-[3px]"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* products */}

      <div className="w-[95%] mx-auto flex justify-start items-center gap-2 md:gap-4 my-4 mb-10">
        <div className="w-[8px] md:w-[18px]">
          <img src={arrow} className="w-full" />
        </div>
        <h1 className="lora text-[22px] md:text-[36px] font-[600] tracking-[2px]">
          Similar
        </h1>
        <h1 className="lora text-[14px] md:text-[22px] font-[400] ml-4 md:ml-8 tracking-[2px]">
          to this one
        </h1>
      </div>
      <div>
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 justify-items-center gap-1 md:gap-4 mb-10">
          {loading ? (
            <>
              {Array(9)
                .fill()
                ?.map((data, i) => (
                  <div className="relative my-2 w-full" key={i}>
                    <div
                      className={`w-[80%] bg-gray-300 min-h-[300px] mb-5 animate-pulse`}
                    ></div>
                  </div>
                ))}
            </>
          ) : (
            <>
              {apiData
                ?.slice(0, 9)
                .filter((filterData) => filterData?.id != params?.product_id)
                .map((data, i) => (
                  <ProductCard
                    name={data?.name}
                    id={data?.id}
                    category={data?.category}
                    image={data?.image}
                    key={i}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productpage;
