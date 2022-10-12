import { NaviLink, NaviList } from '../NavMeniu/NavMenu.styled';

export const RegisterMenu = () => {
  return (
    <NaviList>
      <li>
        <NaviLink to="/register">Register</NaviLink>
      </li>
      <li>
        <NaviLink to="/login">Login</NaviLink>
      </li>
    </NaviList>
  );
};
