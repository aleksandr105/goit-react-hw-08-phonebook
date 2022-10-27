import styled from '@emotion/styled';

export const List = styled.ul`
  height: calc(${props => props.contactsHeight}px - 325px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 5px 0px 5px;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
