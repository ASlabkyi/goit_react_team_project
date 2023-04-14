import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { Asd } from './layuot.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className="container">
      <Link to="/">Home Page</Link>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <Asd>asfgcadc</Asd>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
