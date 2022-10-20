import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate to={redirectTo} />;
};
