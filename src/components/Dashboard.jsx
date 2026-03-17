import StatsCard from "./StatsCard";

function Dashboard() {
  return (
    <div>
      <div className="row">
        <StatsCard title="Etsy Sales" value="$0" />
        <StatsCard title="Eggs Today" value="0" />
        <StatsCard title="Tasks Done" value="0" />
      </div>
    </div>
  )
}

export default Dashboard