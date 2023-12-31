import { cn } from 'utils';

type ListType = {
  className?: string;
  children: React.ReactNode;
};

const ListContainer = ({ className, children }: ListType) => (
  <ul className={cn(`flex flex-wrap list-none p-0`, className)}>{children}</ul>
);

const ListItem = ({ className, children }: ListType) => (
  <li
    className={cn(
      `py-2 px-4 m-2 rounded-md border-2 border-slate-300 bg-slate-100 dark:bg-[#222222]`,
      className,
    )}
  >
    {children}
  </li>
);

export const List = {
  Container: ListContainer,
  Item: ListItem,
};
