import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Label = styled.label`
  display: block;
  color: blue;
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

export const Input = styled(Field)`
  display: block;
  width: 85%;
  height: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 5px 5px 5px 22px;
  border-radius: 5px;
`;

export const FormEl = styled(Form)`
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
`;
