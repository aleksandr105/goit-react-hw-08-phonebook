import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const Register = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));
const Home = lazy(() => import('Pages/Home/Home'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
