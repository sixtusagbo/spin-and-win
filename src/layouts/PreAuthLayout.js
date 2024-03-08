import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PreAuthLayout = () => {
  const { auth } = useAuth();

  if (auth?.accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PreAuthLayout;
