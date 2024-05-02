// useIncreaseCartQuantity.js
import { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartDataAtom } from '../recoil/atoms/cart/cartDataAtom';
import { toast } from 'react-toastify';

const useUpdateCartQuantity = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cartData, setCartData] = useRecoilState(cartDataAtom)

  const updateQuantity = async (cartProductId, type) => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("token", localStorage.getItem("token"));
      formdata.append("cart_product_id", cartProductId);
      formdata.append("update_type", type)
      await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'cartQuantityUpdate', formdata).then((res) => {
        setLoading(false);
        formdata.append("no_login_token", localStorage.getItem("no_login_token"));
        formdata.delete("cart_product_id");
        formdata.delete("update_type");
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((cartRes) => {
          toast.success('Quantity updated successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
          });
          setCartData(cartRes?.data);
        })
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, updateQuantity };
};

export default useUpdateCartQuantity;
