import { NicMenuWrapper, Back, Nic, Exit } from './UserMenu.styled';
import { IoReturnDownBackSharp } from 'react-icons/io5';
export const UserMobileMenu = () => {
  return (
    <NicMenuWrapper>
      {' '}
      <Back to={'/'}>
        <IoReturnDownBackSharp />
      </Back>
      <div>
        <Nic>Nic</Nic>
        <Exit>Exit</Exit>
      </div>
    </NicMenuWrapper>
  );
};
