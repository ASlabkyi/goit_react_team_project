import { Routes, Route } from 'react-router';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

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

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/diary" element={<Diary />} />

        <Route path="/calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
};
