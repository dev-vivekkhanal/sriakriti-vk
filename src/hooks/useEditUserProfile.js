import { useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import profileApiDataAtom from '../recoil/atoms/profile/profileApiDataAtom';

const useProfileEdit = () => {
    const [profileApiData, setProfileApiData] = useRecoilState(profileApiDataAtom);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const editProfile = async (token, gender, emailRef, nameRef, countryCodeRef, numberRef, dobRef) => {
        setLoading(true);
        try {
            const formdata = new FormData();
            formdata.append('token', token);
            formdata.append('email', emailRef?.current?.value);
            formdata.append('name', nameRef?.current?.value);
            formdata.append('phone_code', countryCodeRef?.current?.value);
            formdata.append('phone_no', numberRef?.current?.value);
            formdata.append('dob', dobRef?.current?.value);
            formdata.append('gender', gender);

            await axios.put(import.meta.env.VITE_APP_BASE_API_LINK + 'profileEdit', formdata).then(async (res) => {

                formdata.delete('email', emailRef?.current?.value);
                formdata.delete('name', nameRef?.current?.value);
                formdata.delete('phone_code', countryCodeRef?.current?.value);
                formdata.delete('phone_no', numberRef?.current?.value);
                formdata.delete('dob', dobRef?.current?.value);
                formdata.delete('gender', gender);
                toast.success('Profile updated successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });

                await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata).then((profileResponse) => {
                    setProfileApiData(profileResponse?.data);
                    setLoading(false);
                });

            });
        } catch (error) {
            // Handle errors if needed
            console.error('Profile edit error:', error);
            toast.error(error, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                theme: "dark",
            });
            setLoading(false);
            setError(error);
        }
    };

    return { editProfile, profileApiData, loading, error };
};

export default useProfileEdit;
