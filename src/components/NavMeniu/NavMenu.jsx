import { NaviLink, NaviList } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to="//">Home</NaviLink>
        </li>
        <li>
          <NaviLink to="/contacts">Contacts</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
