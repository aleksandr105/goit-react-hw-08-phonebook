import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PrivateRoute/PublicRoute/PublicRoute';
import { getLoadingRefresh } from 'redux/auth/auth-selectors';

const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const Register = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));
const Home = lazy(() => import('Pages/Home/Home'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingRefresh = useSelector(getLoadingRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoadingRefresh && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
};
