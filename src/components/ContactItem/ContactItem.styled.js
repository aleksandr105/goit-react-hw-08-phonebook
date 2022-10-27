import styled from '@emotion/styled';

export const Item = styled.li`
  color: tomato;
  display: flex;
  font-weight: 600;
  align-items: center;
  padding-right: 3px;
  position: relative;
`;

export const ItemText = styled.span`
  color: black;
  font-weight: 600;
  margin-left: 3px;
`;

export const Number = styled.a`
  margin-left: auto;
  color: blue;
  text-decoration: none;
  transition-duration: 130ms;
  :hover {
    transform: scale(1.08);
    color: tomato;
  }
`;

export const OptionsBtn = styled.button`
  padding: 2px;
  background-color: #50ceff;
  border-radius: 5px;
  border: none;
  height: 25px;
  font-weight: 600;
  transition-duration: 130ms;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

  :hover {
    color: red;
    transform: scale(1.05);
  }
`;
