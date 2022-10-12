import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const { email } = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <div>
      <p>Welcome, {email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
