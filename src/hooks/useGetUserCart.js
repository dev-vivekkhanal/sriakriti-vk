import { useState, useEffect } from 'react';
import axios from 'axios';
import { cartDataAtom } from '../recoil/atoms/cart/cartDataAtom';
import { useRecoilState } from 'recoil';

const useGetUserCartDetails = () => {
    const [cartData, setCartData] = useRecoilState(cartDataAtom);
    const [cartLoading, setCartLoading] = useState(true);
    const [cartError, setCartError] = useState(null);

    const fetchData = async () => {
        try {
            setCartLoading(true);

            let formdata = new FormData();
            formdata.append("token", localStorage.getItem("token"));
            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => {
              setCartData(response?.data)
              setCartLoading(false);
            })
        } catch (cartError) {
            setCartError(cartError);
            setCartLoading(false);
        }
    };
    useEffect(() => {

        fetchData();
    }, []);

    return { cartData, cartLoading, cartError, fetchData };
};

export default useGetUserCartDetails;
