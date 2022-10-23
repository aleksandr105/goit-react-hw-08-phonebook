import {
  Container,
  TitleLIstContacts,
  Titel,
  NoContactMessage,
  SectionContacts,
} from './ContactsPage.styled';
import { useEffect, useState } from 'react';
import { ContactForm } from '../../components/ContatctForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { writeFilter } from '../../redux/contactsOperations/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contactsOperations/operations';
import {
  getContacts,
  getStatusFilter,
  getIsLoading,
  getError,
} from 'redux/contactsOperations/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const ContactsPage = ({ refHeader }) => {
  const filter = useSelector(getStatusFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const containerHeight = useRef();

  const [headerHeight, setHeaderHeight] = useState(null);
  const [contactsHeight, setContactsHeight] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const heightHeader = refHeader.current.getBoundingClientRect().height;
    setHeaderHeight(heightHeader);

    const heightContainer =
      containerHeight.current.getBoundingClientRect().height;
    setContactsHeight(Math.round(heightContainer));
  }, [refHeader, contactsHeight]);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contactСheck = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!contactСheck) {
      const contact = {
        name: name,
        number: number.match(/\d{3}(?=\d{2,3})|\d+/g).join('-'),
      };

      dispatch(addContact(contact));

      resetForm();
    } else {
      toast.error(`${name} is alreadi in contacts`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const showFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = e => {
    dispatch(writeFilter(e.target.value));
  };

  const visibalFiltr = showFiltered();

  return (
    <SectionContacts headerHeight={headerHeight}>
      <Container headerHeight={headerHeight} ref={containerHeight}>
        <ToastContainer style={{ paddingTop: '50px' }} />
        <Titel>Phonebook</Titel>
        <ContactForm handleSubmit={handleSubmit} />
        <TitleLIstContacts>Contacts</TitleLIstContacts>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ClipLoader
            color={'#d63636'}
            loading={isLoading && contacts.length !== 0}
            size={40}
          />
        </div>

        {contacts.length > 0 ? (
          <>
            <Filter changeFilter={changeFilter} />
            <ContactList
              visibalFiltr={visibalFiltr}
              deleteContact={deleteContact}
              containerHeight={contactsHeight}
            />
          </>
        ) : (
          <NoContactMessage>
            {isLoading && !error ? (
              <ClipLoader
                color={'#d63636'}
                loading={isLoading && !error}
                size={100}
              />
            ) : (
              'No contact yet'
            )}
          </NoContactMessage>
        )}
      </Container>
    </SectionContacts>
  );
};

export default ContactsPage;
