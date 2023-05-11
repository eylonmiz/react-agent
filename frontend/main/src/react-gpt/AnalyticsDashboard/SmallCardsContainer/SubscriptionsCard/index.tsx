
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-gpt/shadcn-ui';

export interface SubscriptionsCardProps {}

const SubscriptionsCard: React.FC<SubscriptionsCardProps> = (props) => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Subscriptions</CardTitle>
      </CardHeader>
      <CardContent className="h-24">
        {/* Your custom components based on the data can be placed here */}
      </CardContent>
    </Card>
  );
};

export default SubscriptionsCard;
