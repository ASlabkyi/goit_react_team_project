import { Navlink, Wrapper } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <Wrapper>
      <Navlink to="/login">LOG IN</Navlink>
      <Navlink to="/register">REGISTRATION</Navlink>
    </Wrapper>
  );
};
