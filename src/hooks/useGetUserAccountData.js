import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import profileApiDataAtom from "../recoil/atoms/profile/profileApiDataAtom";
import axios from "axios";

const useProfileApiData = () => {
    const [profileApiData, setProfileApiData] = useRecoilState(profileApiDataAtom);
    const [profileApiDataLoader, setProfileApiDataLoader] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfileApiData = () => {
        setProfileApiDataLoader(true);

        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));

        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata)
            .then((response) => {
                setProfileApiDataLoader(false);
                setProfileApiData(response?.data);
            })
            .catch((error) => {
                console.error("Error fetching profile API data:", error);
                setError("Error fetching profile API data");
                setProfileApiDataLoader(false);
            });
    };

    useEffect(() => {
        fetchProfileApiData();
    }, []);

    return { profileApiData, profileApiDataLoader, error, refetchProfileApiData: fetchProfileApiData, setProfileApiData };
};

export default useProfileApiData;
