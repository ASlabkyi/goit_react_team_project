import { NavliNk, Mobilelist } from './UserMenu.styled';

export const MobileList = () => {
  return (
    <Mobilelist>
      <NavliNk to="/diary">Diary</NavliNk>
      <NavliNk to="/calculator">Calculator</NavliNk>
    </Mobilelist>
  );
};
