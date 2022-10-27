import styled from '@emotion/styled';

export const OptionsBtnContainer = styled.div`
  position: absolute;
  background-color: #505050;
  z-index: 100;
  border-radius: 20px;
  right: 0;
  padding: 8px;
`;

export const ButtonDelete = styled.button`
  padding: 2px;
  background-color: #0100ff;
  border-radius: 5px;
  border: none;
  width: 53px;
  height: 20px;
  font-weight: 600;
  transition-duration: 130ms;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;

export const ButtonEdit = styled.button`
  padding: 2px;
  background-color: #deff00;
  border-radius: 5px;
  border: none;
  width: 53px;
  height: 20px;
  font-weight: 600;
  transition-duration: 130ms;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;
