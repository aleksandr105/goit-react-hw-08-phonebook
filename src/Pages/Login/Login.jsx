import { Formik } from 'formik';
import { Label, FormEl, Input, ButtonAdd, RegisterTitle } from './Login.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  return (
    <>
      <RegisterTitle>Log in to use the phone book</RegisterTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '' }}
      >
        <FormEl name="register">
          <Label htmlFor="">
            Email
            <Input placeholder="javelin@gmail.com" type="email" name="email" />
          </Label>
          <Label htmlFor="">
            Password
            <Input placeholder="********" type="password" name="password" />
          </Label>
          <ButtonAdd type="submit">Login</ButtonAdd>
        </FormEl>
      </Formik>
    </>
  );
};

export default Login;
