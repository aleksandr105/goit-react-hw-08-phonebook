import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NaviList = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li:not(:last-child) {
    margin-right: 20px;
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
