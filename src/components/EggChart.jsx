import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function EggChart({ data }) {
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