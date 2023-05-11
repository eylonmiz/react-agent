
import React from 'react';
import { Box } from '@react-gpt/shadcn-ui';
import TotalRevenueCard from './TotalRevenueCard';
import SubscriptionsCard from './SubscriptionsCard';
import SalesCard from './SalesCard';
import ActiveNowCard from './ActiveNowCard';

export interface SmallCardsContainerProps {};

const SmallCardsContainer: React.FC<SmallCardsContainerProps> = (props: SmallCardsContainerProps) => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <TotalRevenueCard />
      <SubscriptionsCard />
      <SalesCard />
      <ActiveNowCard />
    </Box>
  );
};

export default SmallCardsContainer;
