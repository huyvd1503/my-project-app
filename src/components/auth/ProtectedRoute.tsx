// src/components/auth/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import {type ReactElement, useEffect} from 'react';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const checkTokenExpiration = useAuthStore(state => state.checkTokenExpiration);
  const location = useLocation();

  useEffect(() => {
    // Kiểm tra token hết hạn khi component mount
    checkTokenExpiration();
  }, [checkTokenExpiration]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
