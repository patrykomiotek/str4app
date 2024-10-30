type Props = {
  children: string;
};

export const Header = ({ children }: Props) => {
  return (
    <h1 className="text-2xl font-semibold dark:text-slate-300">{children}</h1>
  );
};
