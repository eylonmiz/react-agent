
import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import OverviewCard, { OverviewCardProps } from './OverviewCard';
import RecentSalesCard, { RecentSalesCardProps } from './RecentSalesCard';

interface BigCardsContainerProps {
  overviewCardProps: OverviewCardProps;
  recentSalesCardProps: RecentSalesCardProps;
}

const BigCardsContainer: React.FC<BigCardsContainerProps> = ({
  overviewCardProps,
  recentSalesCardProps,
}) => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <OverviewCard {...overviewCardProps} />
      <RecentSalesCard {...recentSalesCardProps} />
    </Box>
  );
};

export default BigCardsContainer;
