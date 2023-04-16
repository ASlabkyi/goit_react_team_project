import { Routes, Route } from 'react-router';
import { Layout } from 'components/Layout/Layout';
import { DiaryList } from './DiaryList/DiaryList';

export const App = () => {
  // const deleteButton = () => {
  //   console.log("delete")
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Homepage</div>} />

        <Route path="/login" element={<div>Login</div>} />

        <Route path="/register" element={<div>Register</div>} />

        <Route path="/diary" element={<DiaryList />} />

        <Route path="/calculator" element={<div>Calculator</div>} />
      </Route>
    </Routes>
  );
};
