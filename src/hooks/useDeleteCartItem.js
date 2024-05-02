// useIncreaseCartQuantity.js
import { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartDataAtom } from '../recoil/atoms/cart/cartDataAtom';
import { toast } from 'react-toastify';

const useDeleteCartItem = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [cartData, setCartData] = useRecoilState(cartDataAtom)

    const deleteItem = async (cart_product_id) => {
        try {
            setLoading(true);
            let formdata = new FormData();
            formdata.append("token", localStorage.getItem("token"));
            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
            formdata.append("cart_product_id", cart_product_id);
            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'cartProductDelete', formdata).then((res) => {
                toast.success('Item removed from cart!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                let formdata = new FormData();
                formdata.append("token", localStorage.getItem("token"));
                formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => {
                    setCartData(response?.data)
                })
            })
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { loading, error, deleteItem };
};

export default useDeleteCartItem;
