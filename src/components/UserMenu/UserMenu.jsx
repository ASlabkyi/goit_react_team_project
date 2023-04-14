import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Navigation/Logo';
import { Wrapper } from 'components/AuthMenu/AuthMenu.styled';
import {
  BurgerMenu,
  Exit,
  Nic,
  NavliNk,
  UserDesktopWrapper,
  UserWraper,
  UserMenuWrap,
} from './UserMenu.styled';
import { UserMobileMenu } from './UserMobileMenu';

export const UserMenu = () => {
  return (
    <>
      <UserMenuWrap>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <UserWraper>
          <Wrapper>
            <NavliNk to="/diary">Diary</NavliNk>
            <NavliNk to="/calculator">Calculator</NavliNk>
            <BurgerMenu>
              {' '}
              <GiHamburgerMenu />
            </BurgerMenu>
          </Wrapper>

          <div>
            {' '}
            <UserDesktopWrapper>
              <Nic>Nic</Nic>
              <Exit>Exit</Exit>
            </UserDesktopWrapper>
          </div>
        </UserWraper>
      </UserMenuWrap>
      <UserMobileMenu />
    </>
  );
};
