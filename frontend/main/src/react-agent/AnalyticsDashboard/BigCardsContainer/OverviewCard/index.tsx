
import React from 'react';
import { Recharts, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface OverviewCardProps {
  data: Array<{ name: string; total: number }>;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ data }) => {
  const renderChart = () => (
    <Recharts.ResponsiveContainer width="100%" height={250}>
      <Recharts.BarChart data={data}>
        <Recharts.XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Recharts.YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Recharts.Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </Recharts.BarChart>
    </Recharts.ResponsiveContainer>
  );

  return (
    <Card className="col-span-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
