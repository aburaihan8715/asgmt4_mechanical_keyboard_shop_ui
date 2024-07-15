/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from 'react-router-dom';

const ActiveLink = (props: any) => {
  return (
    <NavLink
      {...props}
      style={({ isActive }) => {
        return {
          borderBottom: isActive
            ? '2px solid #2563EB'
            : '2px solid transparent',
        };
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default ActiveLink;
