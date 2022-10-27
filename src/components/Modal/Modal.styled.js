import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  padding: 135px 5px 0px 5px;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: silver;
  padding: 40px;
  border-radius: 10px;
  width: 480px;
`;

export const EditForm = styled(Form)`
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
`;

export const EditInput = styled(Field)`
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 5px 5px 5px 25px;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  height: 25px;
  width: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  color: blue;
`;

export const InputContainer = styled.span`
  position: relative;
`;
