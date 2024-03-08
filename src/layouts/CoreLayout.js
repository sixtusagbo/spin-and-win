import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useLoginStatus from '../hooks/useLoginStatus';

const CoreLayout = () => {
  const loggedIn = useLoginStatus();
  const location = useLocation();

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default CoreLayout;
