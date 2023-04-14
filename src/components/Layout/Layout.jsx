import { Outlet } from 'react-router';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBar, Container } from '@mui/material';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar>
        <Container>
          <Navigation />
        </Container>
      </AppBar>
      <main>
        <Suspense fallback={<div>Spiner</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
