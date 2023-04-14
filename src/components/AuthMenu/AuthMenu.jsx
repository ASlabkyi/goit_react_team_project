import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};
