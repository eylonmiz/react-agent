import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import TotalRevenueCard from './TotalRevenueCard';
import SubscriptionsCard from './SubscriptionsCard';
import SalesCard from './SalesCard';
import ActiveNowCard from './ActiveNowCard';

export interface SmallCardsContainerProps {}

const SmallCardsContainer: React.FC<SmallCardsContainerProps> = (props) => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <TotalRevenueCard />
      <SubscriptionsCard totalRevenue={15000} numberOfSubscriptions={120} sales={75} activeUsers={95} />
      <SalesCard title="Sales" content={<div>Some content for SalesCard here</div>} />
      <ActiveNowCard title="Active Now" value={547} change={-11} />
    </Box>
  );
};

export default SmallCardsContainer;
