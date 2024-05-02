// useLogin.js
import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useLogin = (navigate) => {
    const [errorText, setErrorText] = useState(null);
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const loginUser = (e) => {
        setLoading(true);
        e.preventDefault();

        const userCredentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            no_login_token: localStorage.getItem('no_login_token'),
        };

        if (emailRef?.current?.value?.length === 0 || passwordRef?.current?.value?.length === 0) {
            setLoading(false);
            setErrorText('Please fill all fields');
        } else if (emailRef?.current?.value?.length > 4 && passwordRef?.current?.value?.length >= 4) {

            axios({
                method: 'post',
                url: import.meta.env.VITE_APP_BASE_API_LINK + 'login',
                data: userCredentials,
            }).then(function (response) {
                if (response?.data?.status) {
                    setLoading(false)
                    localStorage.setItem('token', response?.data?.token);
                    localStorage.setItem('status', response?.data?.status);
                    navigate('/');
                    toast.success(response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        theme: "dark",
                    });
                    emailRef.current.value = '';
                    passwordRef.current.value = '';
                    setErrorText(null);
                } else {
                    setLoading(false);
                    setErrorText('Wrong Credentials');
                    toast.error(response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        theme: "dark",
                    });
                    passwordRef.current.value = '';
                }
            }).catch(function (error) {
                console.log(error);
                setLoading(false);
            });
        }
    };

    return { errorText, emailRef, passwordRef, loading, loginUser };
};

export default useLogin;
