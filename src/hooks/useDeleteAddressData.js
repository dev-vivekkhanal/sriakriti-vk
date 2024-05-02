import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import profileApiDataAtom from "../recoil/atoms/profile/profileApiDataAtom";
import useProfileApiData from "./useGetUserAccountData";
import { toast } from "react-toastify";

const useDeleteAddressData = () => {

    const { refetchProfileApiData } = useProfileApiData();

    const [profileApiData, setProfileApiData] = useRecoilState(profileApiDataAtom);
    const [error, setError] = useState(null);

    const deleteAddressData = (address_id) => {
        let formdata = new FormData();
        formdata.append("address_id", address_id);
        formdata.append("token", localStorage.getItem("token"));

        axios.delete(import.meta.env.VITE_APP_BASE_API_LINK + 'addressEdit', { data: { "address_id": address_id, "token": localStorage.getItem("token") } })
            .then((response) => {
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                setProfileApiData(response?.data);
                refetchProfileApiData();
            })
            .catch((error) => {
                console.error("Error deleting profile data:", error);
                setError("Error deleting profile data");
            });
    };

    useEffect(() => {
        // You can add additional logic here if needed
    }, []);

    return { deleteAddressData, error };
};

export default useDeleteAddressData;
