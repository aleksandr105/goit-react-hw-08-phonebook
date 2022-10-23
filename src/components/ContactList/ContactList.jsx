import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({
  visibalFiltr,
  deleteContact,
  containerHeight,
}) => {
  console.log(containerHeight);
  return (
    <List contactsHeight={containerHeight}>
      {visibalFiltr
        .sort((firstName, secondName) =>
          firstName.name.localeCompare(secondName.name)
        )
        .map(({ id, name, number }, index) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={number}
            index={index}
            deleteContact={deleteContact}
          />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  visibalFiltr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
