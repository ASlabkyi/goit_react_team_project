import { useDispatch, useSelector } from 'react-redux';
import { NicMenuWrapper, Back, Nic, Exit, MobileLink } from './UserMenu.styled';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { selectUser } from 'redux/auth/selectors';

export const UserMobileMenu = () => {
  const dipatch = useDispatch;
  const name = useSelector(selectUser.name);
  return (
    <>
      <NicMenuWrapper>
        {' '}
        <Back to={'/'}>
          <IoReturnDownBackSharp />
        </Back>
        <MobileLink>
          <Nic>{name}</Nic>
          <Exit onClick={() => dipatch(logOut())}>Exit</Exit>
        </MobileLink>
      </NicMenuWrapper>
    </>
  );
};
