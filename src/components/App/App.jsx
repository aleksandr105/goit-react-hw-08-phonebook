import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Home = lazy(() => import('pages/Home/Home'));
// const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<ContactsPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
