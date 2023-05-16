
import React from 'react';
import { Box, Input } from '@react-agent/shadcn-ui'
import TeamSwitcher from './TeamSwitcher';
import DashboardNav from './DashboardNav';
import UserNav from './UserNav';

export interface HeaderProps {
  teams: Array<{ id: number; name: string; avatar?: string }>;
  onTeamChange: (teamId: number) => void;
  userFullName: string;
  userAvatarUrl?: string;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
  navItems: { id: number; name: string; link: string }[];
};

const Header = (props: HeaderProps) => {
  return (
    <Box className="flex h-16 items-center px-4 border-b">
      <TeamSwitcher teams={props.teams} onTeamChange={props.onTeamChange} />
      <DashboardNav items={props.navItems} />
      <Box className="ml-auto flex items-center space-x-4">
        <Input type="search" placeholder="Search" className="h-9 md:w-[100px] lg:w-[300px]" />
        <UserNav
          userFullName={props.userFullName}
          userAvatarUrl={props.userAvatarUrl}
          onSettingsClick={props.onSettingsClick}
          onLogoutClick={props.onLogoutClick}
        />
      </Box>
    </Box>
  );
};

export default Header;
