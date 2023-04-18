import { Routes, Route } from 'react-router';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { PublicRout } from './Publick/Publick';
import { PrivateRout } from './PrivateRout/PrivateRoute';

const Calculator = lazy(() => import('../pages/Calculator/Calculator'));
const Diary = lazy(() => import('../pages/Diary/Diary'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/login"
          element={<PublicRout redirectTo="/diary" component={<Login />} />}
        />

        <Route
          path="/register"
          element={
            <PublicRout redirectTo="/diary" component={<Registration />} />
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
