import { Recharts } from '../../ui';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function ChartsDemo() {
  return (
    <Recharts.ResponsiveContainer width="100%" height={350}>
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
}
