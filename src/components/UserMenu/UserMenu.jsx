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
import { IoClose } from 'react-icons/io5';
import { UserMobileMenu } from './UserMobileMenu';
import { MobileList } from './UserMobileList';
import { useState } from 'react';

export const UserMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = e => {
    e.preventDefault();
    return setOpenMenu(!isOpenMenu);
  };
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
            {!isOpenMenu ? (
              <BurgerMenu type="button" onClick={handleOpenMenu}>
                {' '}
                <GiHamburgerMenu />
              </BurgerMenu>
            ) : (
              <BurgerMenu type="button" onClick={handleOpenMenu}>
                <IoClose />
              </BurgerMenu>
            )}
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
      <UserMobileMenu onCloseOpen={handleOpenMenu} />
      {isOpenMenu && <MobileList />}
    </>
  );
};
