import { Formik, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup';
import { ButtonAdd } from '../ContatctForm/ContactForm.styled';
import {
  Backdrop,
  ModalContainer,
  EditForm,
  EditInput,
  CloseBtn,
  Label,
  InputContainer,
} from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contactsOperations/operations';
import { getContacts } from 'redux/contactsOperations/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsXLg } from 'react-icons/bs';
import { FcCellPhone, FcBusinessman } from 'react-icons/fc';

let schema = yup.object().shape({
  name: yup.string().min(2).max(25).required('Mandatory field'),
  number: yup
    .number()
    .positive()
    .integer()
    .lessThan(9999999999999)
    .required('Mandatory field'),
});

export const Modal = ({ closeModal, name, phone, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const escCloseModal = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', escCloseModal);

    return () => {
      window.removeEventListener('keydown', escCloseModal);
    };
  }, [closeModal]);

  let initialValues = {
    name: name,
    number: phone,
  };

  const onEdit = contact => {
    const contactСheck = contacts.find(
      el =>
        el.name.toLowerCase() === contact.name.toLowerCase() &&
        el.name.toLowerCase() !== name.toLowerCase()
    );

    const contactNotchanged =
      name.toLowerCase() === contact.name.toLowerCase() &&
      phone === contact.number;

    if (contactСheck ?? contactNotchanged) {
      toast.error(`${name} сontact already exists`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const contactEdited = {
      name: contact.name,
      number: contact.number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
    };

    dispatch(editContact({ id, contactEdited }));
    closeModal();
  };

  return (
    <Backdrop
      onClick={e => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <ToastContainer style={{ paddingTop: '50px' }} />
      <ModalContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={onEdit}
          validationSchema={schema}
        >
          <EditForm name="phonebook" autoComplete="off">
            <Label htmlFor="">
              <span style={{ display: 'block' }}>Name</span>
              <InputContainer>
                <FcBusinessman
                  size={'25px'}
                  style={{ position: 'absolute', left: 0, top: 0 }}
                />
                <EditInput type="text" name="name" />
              </InputContainer>
              <ErrorMessage name="name" component="p" />
            </Label>
            <Label htmlFor="">
              <span style={{ display: 'block' }}> Number</span>
              <InputContainer>
                <FcCellPhone
                  size={'25px'}
                  style={{ position: 'absolute', left: 0, top: 0 }}
                />
                <EditInput type="tel" name="number" />
              </InputContainer>
              <ErrorMessage name="number" component="p" />
            </Label>
            <ButtonAdd type="submit">Edit contact</ButtonAdd>
          </EditForm>
        </Formik>
        <CloseBtn onClick={closeModal}>
          <BsXLg fill="red" />
        </CloseBtn>
      </ModalContainer>
    </Backdrop>
  );
};
