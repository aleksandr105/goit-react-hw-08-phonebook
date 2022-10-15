import { Formik } from 'formik';
import {
  Label,
  FormEl,
  Input,
  ButtonAdd,
  RegisterTitle,
  SectionLogin,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Container } from 'components/Layout/Layout.styled';
import { MainTitleCottainer } from 'Pages/Home/Home.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  return (
    <SectionLogin>
      <Container>
        <RegisterTitle>
          <MainTitleCottainer>Log in to use the phone book</MainTitleCottainer>
        </RegisterTitle>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: '', password: '' }}
        >
          <FormEl name="register">
            <Label htmlFor="">
              Email
              <Input
                placeholder="javelin@gmail.com"
                type="email"
                name="email"
              />
            </Label>
            <Label htmlFor="">
              Password
              <Input placeholder="********" type="password" name="password" />
            </Label>
            <ButtonAdd type="submit">Login</ButtonAdd>
          </FormEl>
        </Formik>
      </Container>
    </SectionLogin>
  );
};

export default Login;
