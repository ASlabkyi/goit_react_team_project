import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { NavigWraper } from './Navigation.styled';

import { Logo } from './Logo';

export const Navigation = () => {
  return (
    <NavigWraper>
      <NavLink to="/">
        <Logo />
      </NavLink>
      {/* <AuthMenu /> */}
      <UserMenu />
    </NavigWraper>
  );
};
