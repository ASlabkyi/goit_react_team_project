import { NicMenuWrapper, Back, Nic, Exit, MobileLink } from './UserMenu.styled';
import { IoReturnDownBackSharp } from 'react-icons/io5';

export const UserMobileMenu = () => {
  return (
    <>
      <NicMenuWrapper>
        {' '}
        <Back to={'/'}>
          <IoReturnDownBackSharp />
        </Back>
        <MobileLink>
          <Nic>Nic</Nic>
          <Exit>Exit</Exit>
        </MobileLink>
      </NicMenuWrapper>
    </>
  );
};
