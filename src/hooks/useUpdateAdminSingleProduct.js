// useEditProduct.js
import { useState } from 'react';
import axios from 'axios';

const useUpdateAdminProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const editProduct = async (formdata) => {
        try {
            setLoading(true);
            const response = await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminEditSingleProduct', formdata);
            return response.data;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, editProduct };
};

export default useUpdateAdminProduct;
