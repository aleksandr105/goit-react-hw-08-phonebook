import { Suspense, forwardRef } from 'react';
import { Outlet } from 'react-router-dom';
import { NaviBar } from './Layout.styled';
import ClipLoader from 'react-spinners/ClipLoader';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavMenu } from 'components/NavMeniu/NavMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { RegisterMenu } from '../RegisterMenu/RegisterMenu';

export const Layout = forwardRef((props, ref) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <NaviBar ref={ref}>
        <NavMenu />
        {isLoggedIn ? <UserMenu /> : <RegisterMenu />}
      </NaviBar>
      <Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ClipLoader color={'#d63636'} loading={true} size={100} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
});
