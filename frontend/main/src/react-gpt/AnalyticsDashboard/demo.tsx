
import React from 'react';
import AnalyticsDashboardPage from './index';

const AnalyticsDashboardPageDemo: React.FC = () => {
 // Mock data
 const navItems = [
   { id: 1, label: 'Dashboard', link: '#' },
   { id: 2, label: 'Reports', link: '#' },
   { id: 3, label: 'Settings', link: '#' },
 ];
 
 const teams = [
   { id: '1', name: 'Team A', avatarUrl: 'https://via.placeholder.com/150' },
   { id: '2', name: 'Team B', avatarUrl: 'https://via.placeholder.com/150' },
 ];
 
 const overviewData = [
   { name: 'Total Sales', total: 4500 },
   { name: 'Avg. Sales', total: 850 },
   { name: 'Visits', total: 2500 },
 ];
 
 const recentSalesData = [
   {
     name: 'John Doe',
     avatar: 'https://via.placeholder.com/50',
     date: '2021-11-10',
     amount: 100,
   },
   {
     name: 'Jane Smith',
     avatar: 'https://via.placeholder.com/50',
     date: '2021-11-11',
     amount: 150,
   },
 ];

 return (
   <AnalyticsDashboardPage
     navItems={navItems}
     teams={teams}
     overviewData={overviewData}
     recentSalesData={recentSalesData}
     userAvatarUrl="https://via.placeholder.com/50"
     userInitials="JD"
     userName="John Doe"
     onSettingsClicked={() => console.log('Settings Clicked')}
     onLogoutClicked={() => console.log('Logout Clicked')}
   />
 );
};

export default AnalyticsDashboardPageDemo;
