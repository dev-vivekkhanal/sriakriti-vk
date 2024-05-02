import { useState, useEffect } from "react";
import axios from "axios";
import wishlistApiAtom from "../recoil/atoms/wishlist/wishlistApiAtom";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";

const useAddToWishlist = () => {
    const [wishlistArray, setWishlistArray] = useRecoilState(wishlistApiAtom);
    const [error, setError] = useState(null);

    const addToWishlist = (product_id) => {
        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));
        formdata.append("product_id", product_id);

        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'userWishlist', formdata)
            .then((response) => {
                console.log(response?.data?.wishlist_array);
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                localStorage.setItem("wishlist_array", response?.data?.wishlist_array?.toString());
                setWishlistArray(response?.data?.wishlist_array);
            })
            .catch((error) => {
                console.error("Error adding to wishlist:", error);
                setError("Error adding to wishlist");
            });
    };

    useEffect(() => {
        if (error) {
            const timeoutId = setTimeout(() => {
                setError(null);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [error]);

    return { addToWishlist, wishlistArray, error };
};

export default useAddToWishlist;
