
import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import TotalRevenueCard from './TotalRevenueCard';
import SubscriptionsCard from './SubscriptionsCard';
import SalesCard from './SalesCard';
import ActiveNowCard from './ActiveNowCard';

export interface SmallCardsContainerProps {};

const SmallCardsContainer = (props: SmallCardsContainerProps) => {
 return (
  <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <TotalRevenueCard />
    <SubscriptionsCard title="Subscriptions" totalRevenue={5000} numberOfSubscriptions={200} sales={50} activeUsers={120} />
    <SalesCard title="Sales" data={80} unit="%" />
    <ActiveNowCard totalRevenue={15000} numberOfSubscriptions={400} salesCount={100} activeUsers={250} />
  </Box>
 );
};

export default SmallCardsContainer;
