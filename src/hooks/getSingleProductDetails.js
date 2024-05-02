import { useState, useEffect } from "react";
import axios from "axios";
import collection_data from "../mockapi/apiData";

const useGetSingleProductDetails = (product_id) => {
  const [productApiData, setProductApiData] = useState(null);
  const [productLoading, setProductLoading] = useState(true);
  const [productError, setProductError] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setProductLoading(true);

    //     let formdata = new FormData();
    //     formdata.append("product_id", product_id);
    //     axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'productDetails', formdata).then((response) => {
    //         setProductApiData(response.data);
    //         setProductLoading(false);
    //     })
    //   } catch (productError) {
    //     setProductError(productError);
    //     setProductLoading(false);
    //   }
    // };

    // fetchData();

    setTimeout(() => {
      setProductApiData(collection_data?.products);
      setProductLoading(false);
    }, 1000);
  }, [product_id]);

  return { productApiData, productLoading, productError };
};

export default useGetSingleProductDetails;
