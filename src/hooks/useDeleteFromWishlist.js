import { useState, useEffect } from "react";
import axios from "axios";
import wishlistApiAtom from "../recoil/atoms/wishlist/wishlistApiAtom";
import { useRecoilState } from "recoil";

const useDeleteFromWishlist = () => {
    const [wishlistData, setWishlistData] = useRecoilState(wishlistApiAtom);
    const [wishlistArray, setWishlistArray] = useState([]);
    const [error, setError] = useState(null);

    const deleteFromWishlist = (product_id) => {
        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));
        formdata.append("product_id", product_id);

        axios.delete(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserWishlist', { data: { "product_id": product_id, "token": localStorage.getItem("token") } })
            .then((response) => {
                setWishlistData(response?.data?.wishlist_data);
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                setWishlistArray(response?.data?.wishlist_array);
                localStorage.setItem("wishlist_array", response?.data?.wishlist_array);
            })
            .catch((error) => {
                console.error("Error deleting from wishlist:", error);
                setError("Error deleting from wishlist");
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

    return { deleteFromWishlist, wishlistData, wishlistArray, error };
};

export default useDeleteFromWishlist;
