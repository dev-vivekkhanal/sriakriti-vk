import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAdminProducts = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllProducts').then((response) => {
                console.log(response?.data)
                setApiData(response?.data?.data)
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

export default useGetAdminProducts;
