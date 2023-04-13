import { Routes, Route } from 'react-router';

import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Homepage</div>} />

        <Route path="/login" element={<div>Login</div>} />

        <Route path="/register" element={<div>Register</div>} />

        <Route path="/diary" element={<div>Diary</div>} />

        <Route path="/calculator" element={<div>Calculator</div>} />
      </Route>
    </Routes>
  );
};
