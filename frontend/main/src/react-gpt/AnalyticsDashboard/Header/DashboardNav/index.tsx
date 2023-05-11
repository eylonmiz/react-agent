
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '@react-gpt/shadcn-ui';

export interface DashboardNavProps {
  navItems: {
    id: number;
    label: string;
    link: string;
  }[];
};

const DashboardNav = ({ navItems }: DashboardNavProps) => {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      {navItems.map((item) => (
        <NavItem key={item.id} className="h-8 w-60">
          <NavLink
            to={item.link}
            activeClassName="text-blue-500 border-b-2 border-blue-500"
            className="text-gray-700 hover:text-blue-500"
          >
            {item.label}
          </NavLink>
        </NavItem>
      ))}
    </nav>
  );
};

export default DashboardNav;
