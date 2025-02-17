import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

interface ICheckAuth {
  isAuthenticated: boolean;
  role: string;
  children: ReactNode;
}

function CheckAuth({ isAuthenticated, role, children }: ICheckAuth) {
  const location = useLocation();

  // manage register
  if (location.pathname.includes('/auth/register') && isAuthenticated) {
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else if (role === 'user') {
      return <Navigate to="/" />;
    }
  }

  // manage checkout
  if (location.pathname.includes('/checkout') && !isAuthenticated) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
  }

  // manage admin
  if (location.pathname.includes('admin') && isAuthenticated) {
    if (role !== 'admin') {
      return <Navigate to="/unauth" />;
    }
  }
  if (location.pathname.includes('admin') && !isAuthenticated) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
  }

  // manage user
  if (location.pathname.includes('user') && isAuthenticated) {
    if (role !== 'user') {
      return <Navigate to="/unauth" />;
    }
  }
  if (location.pathname.includes('user') && !isAuthenticated) {
    return (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
}

export default CheckAuth;
