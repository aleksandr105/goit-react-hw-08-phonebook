import styled from '@emotion/styled';

export const List = styled.ul`
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
