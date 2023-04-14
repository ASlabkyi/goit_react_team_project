import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const UserMenu = () => {
  return (
    <div>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <GiHamburgerMenu />
      <p>Nic</p>
      <button>LogOut</button>
    </div>
  );
};
