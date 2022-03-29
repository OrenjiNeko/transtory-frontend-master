import React from 'react'
import axios from'../api/axios'
import useAuth from './useAuth'
import useAxiosPrivate from '../auth/useAxiosPrivate';

const LOGOUT_URL = "/logout";

const useLogout = () => {
    const axiosPrivate = useAxiosPrivate();
    const { setAuth } = useAuth();

    const logout = async () =>{
        setAuth({});
        try {
            const response = await axiosPrivate.post(LOGOUT_URL, {
                headers:{
                    Authorization :'Bearer ${auth.accessToken}'
                }
            });
        } catch (err) {
            console.error(err);
        }
    }
  return logout;
}

export default useLogout