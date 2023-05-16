
import React from 'react';
import AnalyticsDashboardPage from './AnalyticsDashboardPage';

const demoData = [
  { name: 'Product 1', total: 1200 },
  { name: 'Product 2', total: 500 },
  { name: 'Product 3', total: 800 },
];

const demoNavItems = [
  { id: 1, name: 'Dashboard', link: '/' },
  { id: 2, name: 'Analytics', link: '/analytics' },
];

const demoTeams = [
  { id: 1, name: 'Team A', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Team B', avatar: 'https://via.placeholder.com/40' },
];

const handleTeamChange = (teamId: number) => {
  console.log(`Switched to Team: ${teamId}`);
};

const handleSettingsClick = () => {
  console.log('Settings Clicked');
};

const handleLogoutClick = () => {
  console.log('Logout Clicked');
};

const AnalyticsDashboardPageDemo = () => {
  return (
    <AnalyticsDashboardPage
      overviewCardData={demoData}
      dashboardNavItems={demoNavItems}
      teams={demoTeams}
      onTeamChange={handleTeamChange}
      userFullName="John Doe"
      userAvatarUrl="https://via.placeholder.com/40"
      onSettingsClick={handleSettingsClick}
      onLogoutClick={handleLogoutClick}
    />
  );
};

export default AnalyticsDashboardPageDemo;
