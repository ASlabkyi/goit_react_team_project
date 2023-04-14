import { GiHamburgerMenu } from 'react-icons/gi';

import { Wrapper } from 'components/AuthMenu/AuthMenu.styled';
import { BurgerMenu, Exit, Nic, NavliNk, UserWraper } from './UserMenu.styled';

export const UserMenu = () => {
  return (
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
        <div>
          <Nic>Nic</Nic>
          <Exit>Exit</Exit>
        </div>
      </div>
    </UserWraper>
  );
};
