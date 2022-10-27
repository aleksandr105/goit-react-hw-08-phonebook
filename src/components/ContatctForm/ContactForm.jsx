import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Label, ButtonAdd, Input, FormEl } from './ContactForm.styled';
import * as yup from 'yup';
import { getIsLoading } from 'redux/contactsOperations/selectors';
import { useSelector } from 'react-redux';
import { FcCellPhone, FcBusinessman } from 'react-icons/fc';

let initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().min(2).max(25).required('Mandatory field'),
  number: yup
    .number()
    .positive()
    .integer()
    .lessThan(9999999999999)
    .required('Mandatory field'),
});

export const ContactForm = ({ handleSubmit }) => {
  const isLoading = useSelector(getIsLoading);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl name="phonebook" autoComplete="off">
        <Label htmlFor="">
          <span style={{ display: 'block' }}>Name</span>
          <span style={{ position: 'relative' }}>
            <FcBusinessman
              style={{ position: 'absolute', left: '0' }}
              size={20}
            />
            <Input placeholder="Rosie Simpson" type="text" name="name" />
          </span>
          <ErrorMessage name="name" component="p" />
        </Label>
        <Label htmlFor="">
          <span style={{ display: 'block' }}>Number</span>
          <span style={{ position: 'relative' }}>
            <FcCellPhone
              style={{ position: 'absolute', left: '0' }}
              size={20}
            />
            <Input placeholder="459-12-56" type="tel" name="number" />
          </span>
          <ErrorMessage name="number" component="p" />
        </Label>
        <ButtonAdd type="submit" disabled={isLoading}>
          Add contact
        </ButtonAdd>
      </FormEl>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
