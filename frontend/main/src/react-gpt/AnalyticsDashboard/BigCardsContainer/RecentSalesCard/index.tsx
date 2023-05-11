
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
  CardTitle,
} from '@react-gpt/shadcn-ui';

export interface RecentSalesCardProps {
  salesData: {
    name: string;
    avatar: string;
    date: string;
    amount: number;
  }[];
}

const RecentSalesCard: React.FC<RecentSalesCardProps> = ({ salesData }) => {
  const renderSaleItem = (data: {
    name: string;
    avatar: string;
    date: string;
    amount: number;
  }) => {
    return (
      <Box key={data.name} className='flex items-center justify-between py-2'>
        <div className='flex items-center'>
          <Avatar>
            <AvatarImage src={data.avatar} alt={data.name} />
            <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Box className='ml-4'>
            <p className='font-medium'>{data.name}</p>
            <p className='text-muted-foreground text-sm'>{data.date}</p>
          </Box>
        </div>
        <p>${data.amount.toFixed(2)}</p>
      </Box>
    );
  };

  return (
    <Card className='col-span-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm'>
      <CardHeader className='mb-4'>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        {salesData.map((data) => (
          <React.Fragment key={data.name}>{renderSaleItem(data)}</React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
