
import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@react-agent/shadcn-ui';

interface RecentSale {
  imageUrl: string;
  fallbackText: string;
  description: string;
  dateTime: string;
}

interface RecentSalesCardProps {
  recentSales: RecentSale[];
}

const RecentSalesCard = ({ recentSales }: RecentSalesCardProps) => {
  return (
    <Card className="col-span-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle className="w-40 h-8 mb-4">Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-80 overflow-y-auto">
        {recentSales.map((sale, index) => (
          <Box key={index} className="flex items-center space-x-4 mb-4">
            <Avatar>
              <AvatarImage src={sale.imageUrl} alt={sale.description} />
              <AvatarFallback>{sale.fallbackText}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div>{sale.description}</div>
              <CardDescription className="text-muted">{sale.dateTime}</CardDescription>
            </div>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
