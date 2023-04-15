import { Outlet } from 'react-router';
import { Header } from './layuot.styled';
import { Navigation } from 'components/Navigation/Navigation';

import BackgroundWrapper from 'components/Background/BackgroundWrapper.styled';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <BackgroundWrapper>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </BackgroundWrapper>
  );
};
