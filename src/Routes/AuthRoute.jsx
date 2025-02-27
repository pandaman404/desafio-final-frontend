import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Loading from '../components/ui/loading/Loading';

const AuthRoute = () => {
  const { user, isAuthLoading } = useUser();

  if (isAuthLoading) {
    return <Loading />;
  }

  if (user.isAuthenticated) {
    return <Navigate to='/mi-perfil' replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
