import styled from '@emotion/styled';

export const List = styled.ul`
  height: calc(100vh - 415px);
  overflow-y: auto;
  overflow-x: hidden;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
