import { OnlyToggle } from '@components/Auth/OnlyToggle';
import { AuthInfo } from '@components/Auth/AuthInfo';
import { Header } from '@ui';

export const HomePage = () => {
  return (
    <div>
      <Header>Home</Header>

      <AuthInfo />

      <OnlyToggle />
    </div>
  );
};
