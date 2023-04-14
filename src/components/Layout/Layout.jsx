import { Outlet } from 'react-router';
import { Header } from './layuot.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMobileMenu } from 'components/UserMenu/UserMobileMenu';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <UserMobileMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
