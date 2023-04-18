import { useDispatch, useSelector } from 'react-redux';
import { NicMenuWrapper, Back, Nic, Exit, MobileLink } from './UserMenu.styled';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const UserMobileMenu = () => {
  const dipatch = useDispatch;
  const name = useSelector(selectUser);
  const nic = name.username;
  return (
    <>
      <NicMenuWrapper>
        {' '}
        <Back to={'/diary'}>
          <IoReturnDownBackSharp />
        </Back>
        <MobileLink>
          <Nic>{nic}</Nic>
          <Exit onClick={() => dipatch(logout())}>Exit</Exit>
        </MobileLink>
      </NicMenuWrapper>
    </>
  );
};
