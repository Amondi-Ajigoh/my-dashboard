import { useState } from "react";

function DataForm({ addData }) {
  const [day, setDay] = useState("");
  const [eggs, setEggs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addData({
      day: day,
      eggs: Number(eggs),
    });

    setDay("");
    setEggs("");
  };

  return (
    <div className="card p-3 mt-4">
      <h5>Add Egg Data</h5>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Day (e.g. Mon)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Eggs"
          value={eggs}
          onChange={(e) => setEggs(e.target.value)}
        />

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default DataForm;