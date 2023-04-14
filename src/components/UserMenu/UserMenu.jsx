import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <div>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <p>Nic</p>
      <button>LogOut</button>
    </div>
  );
};
