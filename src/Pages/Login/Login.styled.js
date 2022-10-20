import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import IMG from 'Photo/depositphotos_57593913-stock-photo-mobile-phones-background-pile-of.jpg';

export const SectionLogin = styled.section`
  background-image: url(${IMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 92vh;
`;

export const ButtonAdd = styled.button`
  padding: 8px;
  background-color: #50ceff;
  width: 110px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  transition-duration: 130ms;
  :hover {
    transform: scale(1.03);
    color: #fff;
  }
`;

export const Label = styled.label`
  display: block;
  color: blue;
`;

export const Input = styled(Field)`
  display: block;
  width: 95%;
  height: 25px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 5px;
`;

export const FormEl = styled(Form)`
  border: 2px solid black;
  padding: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: silver;
  border-radius: 10px;
`;

export const RegisterTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  color: tomato;
  font-weight: 900;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  padding-top: 80px;
`;
