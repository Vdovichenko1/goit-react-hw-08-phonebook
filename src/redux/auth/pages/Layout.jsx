import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Nav, NavLinkStyle } from './Navigator.styled';
import { PacmanLoader } from 'react-spinners';
// import { useAuth } from '../use/useAuth';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<PacmanLoader color="black" />}>
        <Outlet />
      </Suspense>
    </>
  );
}
