
import React from 'react';
import { NavItems } from '@react-agent/shadcn-ui';

export interface DashboardNavProps {
  items: { id: number; name: string; link: string }[];
};

const DashboardNav: React.FC<DashboardNavProps> = ({ items }) => {
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6 mx-6'>
      {items.map(({ id, name, link }) => (
        <NavItems key={id} name={name} link={link} />
      ))}
    </nav>
  );
};

export default DashboardNav;
