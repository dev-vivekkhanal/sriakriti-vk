import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import wishlistApiAtom from "../recoil/atoms/wishlist/wishlistApiAtom";
import axios from "axios";

const useWishlistData = () => {
    const [wishlistData, setWishlistData] = useRecoilState(wishlistApiAtom);
    const [wishlistDataLoader, setWishlistDataLoader] = useState(false);
    const [error, setError] = useState(null);

    const fetchWishlistData = () => {
        setWishlistDataLoader(true);

        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));

        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserWishlist', formdata)
            .then((response) => {
                setWishlistData(response?.data?.wishlist_data);
                localStorage.setItem("wishlist_array", response?.data?.wishlist_data?.map((data) => data?.id)?.toString());
                setWishlistDataLoader(false);
            })
            .catch((error) => {
                console.error("Error fetching wishlist data:", error);
                setError("Error fetching wishlist data");
                setWishlistDataLoader(false);
            });
    };

    useEffect(() => {
        fetchWishlistData();
    }, []);

    return { wishlistData, wishlistDataLoader, error, refetchWishlistData: fetchWishlistData };
};

export default useWishlistData;
