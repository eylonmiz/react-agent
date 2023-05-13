import React from 'react';
import { DollarSign } from 'lucide-react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface TotalRevenueCardProps {}

const TotalRevenueCard: React.FC<TotalRevenueCardProps> = (props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Box className="text-2xl font-bold">$45,231.89</Box>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};

export default TotalRevenueCard;
