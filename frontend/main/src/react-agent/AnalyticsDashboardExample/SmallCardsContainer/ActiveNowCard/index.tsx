import React from 'react';
import { Activity } from 'lucide-react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface ActiveNowCardProps {}

const ActiveNowCard: React.FC<ActiveNowCardProps> = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Box className="text-2xl font-bold">+573</Box>
        <p className="text-xs text-muted-foreground">+201 since last hour</p>
      </CardContent>
    </Card>
  );
};

export default ActiveNowCard;
