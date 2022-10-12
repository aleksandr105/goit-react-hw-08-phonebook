import { Formik } from 'formik';
import {
  Label,
  FormEl,
  Input,
  ButtonAdd,
  RegisterTitle,
} from './Register.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const initialValues = { name: '', email: '', password: '' };

const Register = () => {
  const dispach = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispach(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <RegisterTitle>Please fill in the fields for registration</RegisterTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl name="register" autoComplete="off">
          <Label htmlFor="">
            Name
            <Input placeholder="Rosie Simpson" type="text" name="name" />
          </Label>
          <Label htmlFor="">
            Email
            <Input placeholder="javelin@gmail.com" type="email" name="email" />
          </Label>
          <Label htmlFor="">
            Password
            <Input placeholder="********" type="password" name="password" />
          </Label>
          <ButtonAdd type="submit">Register</ButtonAdd>
        </FormEl>
      </Formik>
    </>
  );
};

export default Register;
