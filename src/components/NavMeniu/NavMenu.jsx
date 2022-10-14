import { NaviLink, NaviList } from './NavMenu.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const NavMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to="//">Home</NaviLink>
        </li>
        {isLoggedIn && (
          <li>
            <NaviLink to="/contacts">Contacts</NaviLink>
          </li>
        )}
      </NaviList>
    </nav>
  );
};
