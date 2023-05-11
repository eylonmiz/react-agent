
import React from 'react';
import { Recharts, Card, CardContent, CardHeader, CardTitle } from '@react-gpt/shadcn-ui';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';

export interface OverviewCardProps {
  data: {
    name: string;
    total: number;
  }[];
};

const OverviewCard: React.FunctionComponent<OverviewCardProps> = ({ data }) => {
  return (
    <Card className="col-span-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
