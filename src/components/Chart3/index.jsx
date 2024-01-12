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
    name: "Müştərilər",
    uv: 3024,
    pv: 3024,
    amt: 3030,
  },

  {
    name: "Tərəqqi",
    uv: 6000,
    pv: 6130,
    amt: 2000,
  },

  {
    name: "Artış",
    uv: 2390,
    pv: 4200,
    amt: 2500,
  },
  {
    name: "Qazanc",
    uv: 3490,
    pv: 7782,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === "Müştərilər") {
    return "Bu il müştəri sayında 70% müşahidə edilmişdir.";
  }
  if (label === "Tərəqqi") {
    return "Son illər ərzində 6K dan çox inkişaf payı ilə seçildik.";
  }
  if (label === "Artış") {
    return "2023-cü ildə şirkət 38% artışa nail olunmuşdur.";
  }
  if (label === "Qazanc") {
    return "Aylar içində maksimum qazanc isə 8K $ a yaxın olmuşdur.";
  }

  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          <span className="font-bold">{label}</span>
          {` : ${payload[0].value}`}
        </p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};

export default function Chart3() {
  return (
    <div className="hidden sm:block ">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#76b5c5" />
      </BarChart>
    </div>
  );
}
