import { useState, useEffect } from 'react';
import axios from 'axios';
import adminOrdersAtom from '../recoil/atoms/admin/adminOrdersAtom';

const useGetAdminOrders = () => {
    const [apiData, setApiData] = useState(adminOrdersAtom);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            await axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                setApiData(response?.data?.orders)
                setLoading(false);
            })
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { apiData, loading, error, fetchData };
};

export default useGetAdminOrders;
