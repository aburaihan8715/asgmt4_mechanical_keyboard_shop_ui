import { ReactNode } from 'react';

const Sidebar = ({ children }: { children: ReactNode }) => {
  return <ul className="flex flex-col gap-4">{children}</ul>;
};

export default Sidebar;
