import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { useEffect, useRef } from 'react';
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

  const refHeader = useRef();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoadingRefresh && (
      <Routes>
        <Route path="/" element={<Layout ref={refHeader} />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home refHeader={refHeader} />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login refHeader={refHeader} />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register refHeader={refHeader} />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage refHeader={refHeader} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
};
