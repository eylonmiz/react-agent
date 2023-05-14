
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface SalesCardProps {
  title: string;
  data: number;
  unit: string;
}

const SalesCard: React.FC<SalesCardProps> = ({ title, data, unit }) => {
  return (
    <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-24 flex items-center justify-center">
        <Box>
          <span className="text-2xl font-semibold">{data}</span>
          <span className="text-sm text-gray-500 ml-2">{unit}</span>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
