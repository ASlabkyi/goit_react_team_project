import { Outlet } from 'react-router';
import { Header } from './layuot.styled';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
