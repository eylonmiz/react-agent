
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle, Typography } from '@react-gpt/shadcn-ui';

export interface ActiveNowCardProps {}

const ActiveNowCard: React.FC<ActiveNowCardProps> = () => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Active Now</CardTitle>
      </CardHeader>
      <CardContent className="h-24">
        <Typography variant="body">Your subscription is active.</Typography>
        <Box>
          <Typography variant="body">Total revenue: $5,000</Typography>
        </Box>
        <Box>
          <Typography variant="body">Number of subscriptions: 200</Typography>
        </Box>
        <Box>
          <Typography variant="body">Sales: 50</Typography>
        </Box>
        <Box>
          <Typography variant="body">Active users: 150</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActiveNowCard;
