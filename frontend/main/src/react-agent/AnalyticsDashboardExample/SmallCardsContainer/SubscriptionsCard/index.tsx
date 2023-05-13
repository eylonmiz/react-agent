import React from 'react';
import { Users } from 'lucide-react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface SubscriptionsCardProps {}

const SubscriptionsCard: React.FC<SubscriptionsCardProps> = ({}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Box className="text-2xl font-bold">+2350</Box>
        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
      </CardContent>
    </Card>
  );
};

export default SubscriptionsCard;
