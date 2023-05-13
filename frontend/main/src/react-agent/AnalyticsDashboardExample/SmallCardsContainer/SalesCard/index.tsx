import React from 'react';
import { CreditCard } from 'lucide-react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface SalesCardProps {
  title: string;
  content: React.ReactNode;
}

const SalesCard: React.FC<SalesCardProps> = ({ title, content }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Box className="text-2xl font-bold">+12,234</Box>
        <p className="text-xs text-muted-foreground">+19% from last month</p>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
