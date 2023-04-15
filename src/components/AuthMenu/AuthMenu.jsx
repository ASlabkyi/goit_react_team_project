import { Navlink, Wrapper, NavAuth } from './AuthMenu.styled';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Navigation/Logo';

export const AuthMenu = () => {
  return (
    <NavAuth>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Wrapper>
        <Navlink to="/login">LOG IN</Navlink>
        <Navlink to="/register">REGISTRATION</Navlink>
      </Wrapper>
    </NavAuth>
  );
};
