import { Box } from '@chakra-ui/react';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

export default function Layout() {
  return (
    <Box >
      <AppBar />
      <Suspense fallback={<PacmanLoader color="black" />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
