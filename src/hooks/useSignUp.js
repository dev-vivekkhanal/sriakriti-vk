import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useSignUp = () => {
    const [errorText, setErrorText] = useState(null);
    const [loading, setLoading] = useState(false);

    const signUp = async ({ email, name, phone_code, phone_number, dob, password, gender, termsAndConditions }) => {
        setLoading(true);
        try {
            const formdata = new FormData();
            formdata.append("email", email);
            formdata.append("name", name);
            formdata.append("phone_code", phone_code);
            formdata.append("phone_no", phone_number);
            formdata.append("dob", dob);
            formdata.append("password", password);
            formdata.append("gender", gender);
            // formdata.append("terms&conditions", termsAndConditions);

            await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'signUp', formdata).then((response) => {
                setLoading(false);
                console.log(response?.data);
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
                email = ''
                name = ''
                countryCode = ''
                phone_number = ''
                dob = ''
                password = ''
                navigate('/login');
            });

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setLoading(false);
                console.error(error.response.data);
                setErrorText(error.response.data?.message);
                toast.error(error?.response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        }
    };

    return { signUp, errorText, loading };
};

export default useSignUp;
