import React from 'react';
import { TabsTrigger, TabsList } from '@react-agent/shadcn-ui';

export interface TabNavProps {}

const TabNav: React.FC<TabNavProps> = ({}) => {
  return (
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics" disabled>
        Analytics
      </TabsTrigger>
      <TabsTrigger value="reports" disabled>
        Reports
      </TabsTrigger>
      <TabsTrigger value="notifications" disabled>
        Notifications
      </TabsTrigger>
    </TabsList>
  );
};

export default TabNav;
