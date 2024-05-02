import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { cartDataAtom } from '../recoil/atoms/cart/cartDataAtom';
import { useRecoilState } from 'recoil';

const useAddToCart = () => {
    const [cartData, setCartData] = useRecoilState(cartDataAtom);

    const addToCart = async (productApiData, selectedSize, selectedQuality) => {
        try {
            const formdata = new FormData();

            formdata.append("token", localStorage.getItem("token"));
            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
            formdata.append("product_id", productApiData?.product_id);
            formdata.append("size", productApiData?.size[selectedSize]);
            formdata.append("weight", productApiData?.weight[selectedSize]);
            formdata.append("diamond_quality", productApiData?.diamond_quality[selectedQuality]);
            formdata.append("diamond_size", productApiData?.diamond_size[selectedQuality]);

            await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'addToCart', formdata).then((response) => {
                // Handle response
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                console.log(response?.data);

                localStorage.setItem("no_login_token", response?.data?.no_login_token);
            });


            // Fetch updated cart data
            const cartFormData = new FormData();
            cartFormData.append("token", localStorage.getItem("token"));
            cartFormData.append("no_login_token", localStorage.getItem("no_login_token"));

            await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', cartFormData).then((cartResponse) => {
                setCartData(cartResponse?.data);
            });
        } catch (error) {
            // Handle error
            console.error("Error adding to cart:", error);
        }
    };

    return { addToCart, cartData };
};

export default useAddToCart;
