import { Box } from '@chakra-ui/react';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Suspense
        fallback={
          <PacmanLoader
            color="#36d7b7"
            cssOverride={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
}
