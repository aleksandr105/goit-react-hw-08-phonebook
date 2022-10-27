import { Item, ItemText, Number, OptionsBtn } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Options } from 'components/Options/Options';

export const ContactItem = ({
  id,
  index,
  name,
  phone,
  deleteContact,
  onDisabledOptions,
  disabledOptionsStatus,
}) => {
  const number = phone.replaceAll('-', '');
  const [openModal, setOpenModal] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);
  const optionBtnRef = useRef();

  const togleModal = () => setOpenModal(prev => !prev);
  const togleOptionsShow = () => {
    setMoreOptions(prev => !prev);
    onDisabledOptions(prev => !prev);
  };

  return (
    <>
      <Item>
        {index + 1}.<ItemText>{name}:</ItemText>
        <Number href={`tel:${number}`}>{phone}</Number>
        <OptionsBtn
          onClick={togleOptionsShow}
          disabled={disabledOptionsStatus}
          ref={optionBtnRef}
        >
          options
        </OptionsBtn>
        {moreOptions && (
          <Options
            togleModal={togleModal}
            deleteContact={deleteContact}
            togleOptionsShow={togleOptionsShow}
            id={id}
            optionBtnRef={optionBtnRef}
          />
        )}
        {openModal && (
          <Modal closeModal={togleModal} name={name} phone={number} id={id} />
        )}
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
