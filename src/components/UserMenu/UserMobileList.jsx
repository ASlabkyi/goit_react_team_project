import { LinkMobile, Mobilelist } from './UserMenu.styled';

export const MobileList = ({ onCloseOpen }) => {
  return (
    <Mobilelist>
      <LinkMobile
        to="/diary"
        onClick={e => {
          onCloseOpen();
        }}
      >
        Diary
      </LinkMobile>
      <LinkMobile
        to="/calculator"
        onClick={() => {
          onCloseOpen();
        }}
      >
        Calculator
      </LinkMobile>
    </Mobilelist>
  );
};
