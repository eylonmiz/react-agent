
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface SubscriptionsCardProps {
    title: string;
    totalRevenue: number;
    numberOfSubscriptions: number;
    sales: number;
    activeUsers: number;
};

const SubscriptionsCard = (props: SubscriptionsCardProps) => {
    const { title, totalRevenue, numberOfSubscriptions, sales, activeUsers } = props;

    return (
        <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="h-24">
                <div className="flex flex-col space-y-2">
                    <Box className="text-sm">Total Revenue: ${totalRevenue}</Box>
                    <Box className="text-sm">Number of Subscriptions: {numberOfSubscriptions}</Box>
                    <Box className="text-sm">Sales: {sales}</Box>
                    <Box className="text-sm">Active Users: {activeUsers}</Box>
                </div>
            </CardContent>
        </Card>
    );
};

export default SubscriptionsCard;
