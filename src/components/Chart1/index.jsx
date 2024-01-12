import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Məhsuldarlıq",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },

  {
    name: "Məmnuniyyət",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Qazanc",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "İtki",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Chart1() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      className="hidden sm:block"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        strokeDasharray="5 5"
      />

      <Line
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        strokeDasharray="3 4 5 2"
      />
    </LineChart>
  );
}
