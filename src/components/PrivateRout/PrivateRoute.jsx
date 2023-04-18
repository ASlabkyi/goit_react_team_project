import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return !isLogin || !isRefreshing ? <Navigate to={redirectTo} /> : Component;
  //   const isRefreshing = useSelector(selectIsRefreshing);
  // return !isLogin ? <Navigate to={redirectTo} /> : Component;
};
