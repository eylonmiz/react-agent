import React from 'react';
import { NavigationMenu, Button } from '@react-agent/shadcn-ui';
import { Upload } from 'lucide-react';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div className="w-32 h-8">
        <Upload size={32} />
      </div>
      <NavigationMenu />
      <Button className="w-32 h-8 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        Sign Up for Free Trial
      </Button>
    </header>
  );
};

export default Header;
