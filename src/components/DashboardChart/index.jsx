import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Nəqliyyat",
    qazanc: 4000,
    itki: 2400,
    miqdar: 2400,
  },
  {
    name: "Ərzaq",
    qazanc: 3000,
    itki: 1398,
    miqdar: 2210,
  },
  {
    name: "Geyim",
    qazanc: 2000,
    itki: 100,
    miqdar: 2290,
  },
  {
    name: "Vergilər",
    qazanc: 2780,
    itki: 3908,
    miqdar: 2000,
  },
  {
    name: "Digər",
    qazanc: 4800,
    itki: 1230,
    miqdar: 2181,
  },
];

export default function DashboardChart() {
  return (
    <BarChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="qazanc" stackId="a" fill="#8884d8" />
      <Bar dataKey="miqdar" stackId="a" fill="#82ca9d" />
      <Bar dataKey="itki" fill="#ffc658" />
    </BarChart>
  );
}
