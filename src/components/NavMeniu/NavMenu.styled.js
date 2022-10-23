import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NaviList = styled.ul`
  display: flex;
  @media screen and (max-width: 680px) {
    margin-bottom: 8px;
  }

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
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #50ceff;
  width: 125px;
  text-align: center;

  &.active {
    background-color: tomato;
    color: white;
  }
`;
