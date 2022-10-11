import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NaviBar, Container, NaviList, NaviLink } from './Layout.styled';
import ClipLoader from 'react-spinners/ClipLoader';

export const Layout = () => {
  return (
    <>
      <NaviBar>
        <Container>
          <nav>
            <NaviList>
              <li>
                <NaviLink to="/">Home</NaviLink>
              </li>
              <li>
                <NaviLink to="/register">register</NaviLink>
              </li>
              <li>
                <NaviLink to="/login">login</NaviLink>
              </li>
              <li>
                <NaviLink to="/contacts">contacts</NaviLink>
              </li>
            </NaviList>
          </nav>
        </Container>
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
};
