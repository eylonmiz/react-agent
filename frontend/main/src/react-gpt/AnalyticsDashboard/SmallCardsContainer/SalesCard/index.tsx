
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-gpt/shadcn-ui';

export interface SalesCardProps {};

const SalesCard: React.FC<SalesCardProps> = (props) => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Subscriptions Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Box className="h-24">
          {/* Your SalesCardContent implementation goes here */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
