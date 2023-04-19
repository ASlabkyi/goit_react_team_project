import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRout = ({ component: Component, redirectTo = '/' }) => {
  // const isLogin = useSelector(selectIsLoggedIn);
  const token = useSelector(state => state.auth.token);

  return token ? <Navigate to={redirectTo} /> : Component;
};
