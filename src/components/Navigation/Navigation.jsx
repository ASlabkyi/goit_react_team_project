import { useSelector } from 'react-redux';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{!isLoggedIn ? <AuthMenu /> : <UserMenu />}</div>;
};
