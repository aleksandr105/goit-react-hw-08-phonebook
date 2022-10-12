import styled from '@emotion/styled';

export const NaviBar = styled.header`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  color: #fff;
  background: rgb(13, 89, 185);
  background: linear-gradient(
    180deg,
    rgba(13, 89, 185, 1) 28%,
    rgba(249, 250, 15, 1) 62%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`;
