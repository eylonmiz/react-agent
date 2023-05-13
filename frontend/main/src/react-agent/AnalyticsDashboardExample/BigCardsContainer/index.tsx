import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import OverviewCard from './OverviewCard';
import RecentSalesCard from './RecentSalesCard';

export interface BigCardsContainerProps {}

const BigCardsContainer: React.FC<BigCardsContainerProps> = () => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <OverviewCard />
      <RecentSalesCard />
    </Box>
  );
};

export default BigCardsContainer;
