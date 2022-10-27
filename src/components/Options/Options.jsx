import {
  OptionsBtnContainer,
  ButtonDelete,
  ButtonEdit,
} from './Options.styled';
import { useEffect, useRef } from 'react';

export const Options = ({
  deleteContact,
  togleOptionsShow,
  togleModal,
  id,
}) => {
  const refOptions = useRef();

  useEffect(() => {
    const closedOptions = e => {
      if (refOptions.current !== e.target) {
        console.log('dadadad');
        // togleOptionsShow();
      }
    };

    window.addEventListener('click', closedOptions);
    console.log('subskribel');
    return () => {
      window.removeEventListener('click', closedOptions);
      console.log('clear');
    };
  }, []);

  return (
    <OptionsBtnContainer ref={refOptions}>
      <ButtonDelete
        type="button"
        onClick={() => {
          deleteContact(id);
          togleOptionsShow();
        }}
      >
        Delete
      </ButtonDelete>
      <ButtonEdit
        onClick={() => {
          togleModal();
          togleOptionsShow();
        }}
      >
        Edit
      </ButtonEdit>
    </OptionsBtnContainer>
  );
};
