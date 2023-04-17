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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const nic = useSelector(selectUser).name;
  const [isOpenMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    setOpenMenu(!isOpenMenu);
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
              <Nic>{nic}</Nic>
              <Exit onClick={() => dispatch(logout())}>Exit</Exit>
            </UserDesktopWrapper>
          </div>
        </UserWraper>
      </UserMenuWrap>
      <UserMobileMenu onCloseOpen={handleOpenMenu} />
      {isOpenMenu && <MobileList onCloseOpen={handleOpenMenu} />}
    </>
  );
};
