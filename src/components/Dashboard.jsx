import { useState } from "react";
import StatsCard from "./StatsCard";
import SalesChart from "./SalesChart";
import EggChart from "./EggChart";
import DataForm from "./DataForm";

function Dashboard() {
  const [eggData, setEggData] = useState([
    { day: "Mon", eggs: 30 },
    { day: "Tue", eggs: 25 },
  ]);

  const addData = (newData) => {
    setEggData([...eggData, newData]);
  };

  return (
    <div>
      <h4 className="mb-3">Overview</h4>

      <div className="row">
        <StatsCard title="Etsy Sales" value="$0" />
        <StatsCard title="Eggs Today" value="0" />
        <StatsCard title="Tasks Done" value="0" />
      </div>

      <DataForm addData={addData} />

          <SalesChart />
      <EggChart data={eggData} />
    </div>
  );
}

export default Dashboard;