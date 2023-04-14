import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import logoDescktop from '../../images/logo/logo.png';
import logoTablet from '../../images/logo/logo-png 1tabletLogo.png';
import logoMobile from '../../images/logo/logo-png 1mobile.png';

export const Navigation = () => {
  return (
    <Toolbar>
      <NavLink to="/">
        {/* <div
        style={{
          backgroundImage: url(${ тут imageDesktop або imageTablet  }),
          backgroundRepeat: 'no-repeat',
          width: bgImageWidth,   //Тут приходе число в залежності від брейкпоінтів.
          height: bgImageHeight,   //Тут приходе число в залежності від брейкпоінтів.
          position: 'absolute',
          top: bgImageTop,   //Тут приходе число в залежності від брейкпоінтів.
          left: bgImageLeft,   //Тут приходе число в залежності від брейкпоінтів.
        }}
      ></div> */}
        <span>Slim</span>
        <span>Mom</span>
      </NavLink>
      <AuthMenu />
      <UserMenu />
    </Toolbar>
  );
};
