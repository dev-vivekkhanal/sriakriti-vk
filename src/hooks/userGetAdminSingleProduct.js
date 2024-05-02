import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAdminSingleProduct = (product_id) => {
    const [apiData, setApiData] = useState(null);
    const [productLoading, setProductLoading] = useState(true);
    const [productError, setProductError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProductLoading(true);

                let formdata = new FormData();
                formdata.append("product_id", product_id);
                axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminSingleProduct?product_id=' + product_id).then((response) => {
                    setApiData(response.data);
                    setProductLoading(false);
                })
            } catch (productError) {
                setProductError(productError);
                setProductLoading(false);
            }
        };

        fetchData();
    }, [product_id]);

    return { apiData, productLoading, productError };
};

export default useGetAdminSingleProduct;
