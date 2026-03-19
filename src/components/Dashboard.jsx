import StatsCard from "./StatsCard";
import SalesChart from "./SalesChart";

function Dashboard() {
  return (
    <div>
      <h4 className="mb-3">Overview</h4>

      <div className="row">
        <StatsCard title="Etsy Sales" value="$0" />
        <StatsCard title="Eggs Today" value="0" />
        <StatsCard title="Tasks Done" value="0" />
      </div>

      <SalesChart />
    </div>
  );
}

export default Dashboard;