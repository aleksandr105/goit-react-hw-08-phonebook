import { Formik } from 'formik';
import {
  Label,
  FormEl,
  Input,
  ButtonAdd,
  RegisterTitle,
  SectionRegister,
} from './Register.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Container } from 'components/Layout/Layout.styled';
import { MainTitleCottainer } from 'Pages/Home/Home.styled';

const initialValues = { name: '', email: '', password: '' };

const Register = ({ refHeader }) => {
  const dispach = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispach(register({ name, email, password }));
    resetForm();
  };

  return (
    <SectionRegister
      refHeader={refHeader.current.getBoundingClientRect().height}
    >
      <Container>
        <RegisterTitle>
          <MainTitleCottainer>
            Please fill in the fields for registration
          </MainTitleCottainer>
        </RegisterTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormEl name="register" autoComplete="off">
            <Label htmlFor="">
              Name
              <Input placeholder="Rosie Simpson" type="text" name="name" />
            </Label>
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
            <ButtonAdd type="submit">Register</ButtonAdd>
          </FormEl>
        </Formik>
      </Container>
    </SectionRegister>
  );
};

export default Register;
