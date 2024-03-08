import { axiosAuth } from '../api/axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const useAxiosAuth = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestInterceptor);
    };
  }, [auth]);

  return axiosAuth;
};

export default useAxiosAuth;
