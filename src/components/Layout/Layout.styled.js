import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NaviBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  /* background-color: #3f51b5; */
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
  padding-left: 10px;
  padding-right: 10px;
`;

export const NaviList = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 40px;
  }
`;

export const NaviLink = styled(NavLink)`
  color: black;
  font-weight: 600;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #e8e9d8;

  &.active {
    background-color: tomato;
    color: white;
  }
`;
