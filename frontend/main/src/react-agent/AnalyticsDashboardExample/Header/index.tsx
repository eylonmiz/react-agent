import React from 'react';
import { Box, Input } from '@react-agent/shadcn-ui';
import { SearchIcon } from 'lucide-react';
import TeamSwitcher from './TeamSwitcher';
import DashboardNav from './DashboardNav';
import UserNav from './UserNav';

export interface HeaderProps {
  teams?: {
    name: string;
    avatarUrl: string;
  }[];
  onTeamChange?: (team: object) => void;
}

const Header: React.FC<HeaderProps> = ({ teams, onTeamChange }) => {
  return (
    <Box className="flex h-16 items-center px-4 border-b">
      <TeamSwitcher teams={teams} onTeamChange={onTeamChange} />
      <DashboardNav />
      <Box className="ml-auto flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search"
          className="h-9 md:w-[100px] lg:w-[300px]"
          autoComplete="off"
          prefix={<SearchIcon className="text-muted-foreground" />}
        />
        <UserNav />
      </Box>
    </Box>
  );
};

export default Header;
