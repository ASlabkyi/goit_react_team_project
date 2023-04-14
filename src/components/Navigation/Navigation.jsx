import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Logo } from './Logo';

export const Navigation = () => {
  return (
    <div>
      {/* <AuthMenu /> */}
      <UserMenu />
    </div>
  );
};
