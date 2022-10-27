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
  optionBtnRef,
}) => {
  const refOptions = useRef();

  useEffect(() => {
    const closedOptions = e => {
      if (refOptions.current !== e.target && optionBtnRef.current !== e.target)
        togleOptionsShow();
    };

    window.addEventListener('click', closedOptions);
    return () => {
      window.removeEventListener('click', closedOptions);
    };
  }, [optionBtnRef, togleOptionsShow]);

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
