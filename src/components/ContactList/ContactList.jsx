import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useState } from 'react';

export const ContactList = ({
  visibalFiltr,
  deleteContact,
  containerHeight,
}) => {
  const [disabledOptions, setDisabledOptions] = useState(false);

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
            onDisabledOptions={setDisabledOptions}
            disabledOptionsStatus={disabledOptions}
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
