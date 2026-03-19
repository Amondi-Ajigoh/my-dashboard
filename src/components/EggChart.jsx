import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", eggs: 30 },
  { day: "Tue", eggs: 25 },
  { day: "Wed", eggs: 40 },
  { day: "Thu", eggs: 35 },
  { day: "Fri", eggs: 50 },
];

function EggChart() {
  return (
    <div className="card p-3 mt-4">
      <h5>Egg Production</h5>

      <BarChart width={400} height={250} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Bar dataKey="eggs" />
      </BarChart>
    </div>
  );
}

export default EggChart;