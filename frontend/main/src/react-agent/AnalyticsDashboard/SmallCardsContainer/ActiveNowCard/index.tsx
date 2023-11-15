
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle, Typography } from '@react-agent/shadcn-ui';

export interface ActiveNowCardProps {
  totalRevenue: number;
  numberOfSubscriptions: number;
  salesCount: number;
  activeUsers: number;
};

const ActiveNowCard: React.FC<ActiveNowCardProps> = ({ totalRevenue, numberOfSubscriptions, salesCount, activeUsers }) => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold leading-none tracking-tight">Active Now</CardTitle>
      </CardHeader>
      <CardContent className="h-24">
        <Typography>
          <Box>Total Revenue: {totalRevenue}</Box>
          <Box>Number of Subscriptions: {numberOfSubscriptions}</Box>
          <Box>Sales: {salesCount}</Box>
          <Box>Active Users: {activeUsers}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActiveNowCard;
