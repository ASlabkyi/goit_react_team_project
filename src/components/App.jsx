import { Routes, Route } from 'react-router';
import Login from './LoginForm/LoginForm';
import Register from './RegistrationForm/RegistrationForm';

import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Homepage</div>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />

        <Route path="/diary" element={<div>Diary</div>} />

        <Route path="/calculator" element={<div>Calculator</div>} />
      </Route>
    </Routes>
  );
};
