import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@react-agent/shadcn-ui/src/lib/utils';

export interface DashboardNavProps {
  className?: string;
}

const DashboardNav = ({ className }: DashboardNavProps) => {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      <Link to="/examples/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
        Overview
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
};

export default DashboardNav;
