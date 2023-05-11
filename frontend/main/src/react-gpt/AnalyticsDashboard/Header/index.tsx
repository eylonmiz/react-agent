
import React from 'react';
import { Box, Input } from '@react-gpt/shadcn-ui';
import TeamSwitcher from './TeamSwitcher';
import DashboardNav from './DashboardNav';
import UserNav from './UserNav';

export interface HeaderProps {
  teams: { id: string; name: string; avatarUrl?: string }[];
  selectedTeamId: string;
  onTeamSelect: (teamId: string) => void;
  navItems: { id: number; label: string; link: string }[];
  userAvatarUrl?: string;
  userInitials?: string;
  onSettingsClicked?: () => void;
  onLogoutClicked?: () => void;
  userName?: string;
};

const Header = (props: HeaderProps) => {
  const {
    teams,
    selectedTeamId,
    onTeamSelect,
    navItems,
    userAvatarUrl,
    userInitials,
    onSettingsClicked,
    onLogoutClicked,
    userName,
  } = props;
  
  return (
    <Box className="flex h-16 items-center px-4 border-b">
      <TeamSwitcher teams={teams} selectedTeamId={selectedTeamId} onSelect={onTeamSelect} />
      
      <DashboardNav navItems={navItems} />
      
      <div className="ml-auto flex items-center space-x-4">
        <Input type="search" placeholder="Search" className="h-9 md:w-[100px] lg:w-[300px]" />
        
        <UserNav
          userAvatarUrl={userAvatarUrl}
          userInitials={userInitials}
          onSettingsClicked={onSettingsClicked}
          onLogoutClicked={onLogoutClicked}
          userName={userName}
        />
      </div>
    </Box>
  );
};

export default Header;
