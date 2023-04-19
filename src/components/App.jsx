import { Routes, Route } from 'react-router';
import { Layout } from 'components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { PublicRout } from './Publick/Publick';
import { PrivateRout } from './PrivateRout/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchGetUserInfo } from 'redux/auth/operations';

const Calculator = lazy(() => import('../pages/Calculator/Calculator'));
const Diary = lazy(() => import('../pages/Diary/Diary'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshng = useSelector(selectIsRefreshing);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!isLoggedIn && token) dispatch(fetchGetUserInfo());
  }, [dispatch, isLoggedIn, token]);

  // !isRefreshng ? (
  //   <p>ads</p>
  // ) : (
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/login"
          element={
            <PublicRout redirectTo="/calculator" component={<Login />} />
          }
        />

        <Route
          path="/register"
          element={
            <PublicRout redirectTo="/calculator" component={<Registration />} />
          }
        />

        <Route
          path="/diary"
          element={<PrivateRout redirectTo="/login" component={<Diary />} />}
        />

        <Route
          path="/calculator"
          element={
            <PrivateRout redirectTo="/login" component={<Calculator />} />
          }
        />
      </Route>
    </Routes>
  );
};
