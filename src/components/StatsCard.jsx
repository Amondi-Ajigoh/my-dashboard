function StatsCard({ title, value }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 shadow">
        <h5>{title}</h5>
        <h3>{value}</h3>
      </div>
    </div>
  )
}

export default StatsCard