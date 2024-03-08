import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useLocalStorage from '../hooks/useLocalStorage';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAuth } = useAuth();
  const [remember] = useLocalStorage('remember', false);

  useEffect(() => {
    let isMounted = true;

    if (remember) {
      const auth = JSON.parse(localStorage.getItem('ziox'));

      if (auth) {
        isMounted && setAuth(auth);
      }
    }

    isMounted && setIsLoading(false);
  }, []);

  return !remember ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />;
};

export default PersistLogin;
