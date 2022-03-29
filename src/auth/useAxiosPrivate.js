import {useEffect} from 'react'
import {axiosPrivate} from '../api/axios'
import useAuth from './useAuth'

const useAxiosPrivate = () => {
    const {auth} =  useAuth();
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

    
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;