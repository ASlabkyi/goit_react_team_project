import { Routes, Route } from 'react-router';
<<<<<<< HEAD
import Login from './LoginForm/LoginForm';
import Register from './RegistrationForm/RegistrationForm';

=======
>>>>>>> a219e145141ee454dd81d9262a12853b00d04871
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

<<<<<<< HEAD
        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />
=======
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />
>>>>>>> a219e145141ee454dd81d9262a12853b00d04871

        <Route path="/diary" element={<Diary />} />

        <Route path="/calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
};
