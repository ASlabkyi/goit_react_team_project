import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  return !isLogin ? <Navigate to={redirectTo} /> : Component;
  //   return !isLogin && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
