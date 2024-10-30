import { Button } from '@ui';
import { useAuthContext } from './AuthContext';

export const OnlyToggle = () => {
  const context = useAuthContext();

  return (
    <div>
      <Button onClick={() => context.toggle()}>Refetch</Button>
    </div>
  );
};
