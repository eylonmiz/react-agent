
import React from 'react';
import { Box } from '@react-gpt/shadcn-ui';
import OverviewCard, { OverviewCardProps } from './OverviewCard';
import RecentSalesCard, { RecentSalesCardProps } from './RecentSalesCard';

export interface BigCardsContainerProps {
  overviewData: OverviewCardProps['data'];
  recentSalesData: RecentSalesCardProps['salesData'];
}

const BigCardsContainer: React.FC<BigCardsContainerProps> = ({
  overviewData,
  recentSalesData,
}) => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <OverviewCard data={overviewData} />
      <RecentSalesCard salesData={recentSalesData} />
    </Box>
  );
};

export default BigCardsContainer;
