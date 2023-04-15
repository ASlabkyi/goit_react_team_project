import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  return (
    <div>
      <AuthMenu />
      <UserMenu />
    </div>
  );
};
