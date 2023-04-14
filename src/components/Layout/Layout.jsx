import { Outlet } from 'react-router';
import { Header } from './layuot.styled';
import { Navigation } from 'components/Navigation/Navigation';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
