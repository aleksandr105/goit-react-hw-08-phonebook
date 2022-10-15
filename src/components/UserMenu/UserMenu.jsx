import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import {
  ButtonLogout,
  UserMenuContainer,
  UserMenuText,
  UserMenuName,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { email } = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <UserMenuContainer>
      <UserMenuText>
        Welcome, <UserMenuName>{email}</UserMenuName>
      </UserMenuText>
      <ButtonLogout onClick={onLogout}>Logout</ButtonLogout>
    </UserMenuContainer>
  );
};
