// export const Text = ({ children }: { children: string }) => {
import { memo } from 'react';
import { classMerge } from 'ui/utils/cn';

type Props = {
  children: string;
  className?: string;
};

// #1
// export const Text = (props: Props) => {
//   return <p>{props.children}</p>;
// };

// #2
export const Text = memo(({ children, className }: Props) => {
  return <p className={classMerge('dark:text-slate-300', className)}>{children}</p>;
});
Text.displayName = 'memo(Text)';

// #3
// export const Text = ({ children }: { children: string }) => {
//   return <p>{children}</p>;
// };
