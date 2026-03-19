import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", sales: 10 },
  { name: "Tue", sales: 20 },
  { name: "Wed", sales: 15 },
  { name: "Thu", sales: 25 },
  { name: "Fri", sales: 30 },
];

function SalesChart() {
  return (
    <div className="card p-3 mt-4">
      <h5>Weekly Sales</h5>

      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="sales" />
      </LineChart>
    </div>
  );
}

export default SalesChart;