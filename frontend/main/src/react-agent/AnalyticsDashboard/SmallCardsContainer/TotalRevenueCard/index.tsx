
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface TotalRevenueCardProps {};

const TotalRevenueCard = (props: TotalRevenueCardProps) => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent className="h-24 flex items-center justify-center">
        <Box>
          {/* Replace the placeholder with the actual total revenue value */}
          <h2 className="text-3xl font-semibold">$15,230</h2>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalRevenueCard;
