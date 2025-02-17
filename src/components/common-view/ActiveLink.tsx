/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';
import { NavLink } from 'react-router';
interface IProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const ActiveLink = ({ children, to, className }: IProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-2 py-1 rounded-md transition-colors duration-300 hover:bg-gray-400/30 ${className} ${
          isActive ? 'bg-gray-400/30' : ''
        } `
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
