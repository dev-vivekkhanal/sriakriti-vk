import { useState, useEffect } from "react";
import axios from "axios";
import collection_data from "../mockapi/apiData";

const useGetAllProducts = (category) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      // const formdata = new FormData();
      // formdata.append("category_name", category);
      // formdata.append("token", localStorage.getItem("token"));
      // await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'categoryPageNew', formdata).then((response) => {

      //   setApiData(response.data);
      //   setLoading(false);
      // })

      setTimeout(() => {
        setApiData(collection_data?.res_data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return { apiData, loading, error, fetchData };
};

export default useGetAllProducts;
