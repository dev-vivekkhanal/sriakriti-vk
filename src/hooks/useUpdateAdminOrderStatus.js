// useIncreaseCartQuantity.js
import { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartDataAtom } from '../recoil/atoms/cart/cartDataAtom';
import { toast } from 'react-toastify';
import adminOrdersAtom from '../recoil/atoms/admin/adminOrdersAtom';

const useUpdateAdminOrderStatus = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [orderData, setOrderData] = useRecoilState(adminOrdersAtom)

    const updateOrderStatus = async (cartProductId, type) => {
        try {
            setLoading(true);
            const formdata = new FormData();
            formdata.append("token", localStorage.getItem("token"));
            formdata.append("cart_product_id", cartProductId);
            formdata.append("update_type", type)
            axios.patch(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders', formdata).then((res) => {
                if (res) {
                    axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                        console.log(response?.data)
                        setOrderData(response?.data?.orders)
                    })
                }
                toast.success(res?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
            })
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { orderData, loading, error, updateOrderStatus };
};

export default useUpdateAdminOrderStatus;
