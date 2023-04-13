import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { Asd } from './layuot.styled';

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
        <Outlet />
      </main>
    </div>
  );
};
