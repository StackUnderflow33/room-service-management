import { useState } from "react";

export default function Checklist() {
  const [roomNumber, setRoomNumber] = useState("");

  const [food, setFood] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const submit = async () => {
    const data = {
      roomNumber: Number(roomNumber),
      foodAvailable: food,
      cleaningAvailable: cleaning,
      laundryAvailable: laundry,
      maintenanceAvailable: maintenance,
    };

    console.log("Sending:", data);   // 🔴 check in browser console

    await fetch("http://localhost:8080/api/checklist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Checklist Saved");
  };

  return (
    <div className="card">
      <h2>Room Checklist</h2>

      <input
        placeholder="Room Number"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={food}
          onChange={(e) => setFood(e.target.checked)}
        />
        Food
      </label>

      <label>
        <input
          type="checkbox"
          checked={cleaning}
          onChange={(e) => setCleaning(e.target.checked)}
        />
        Cleaning
      </label>

      <label>
        <input
          type="checkbox"
          checked={laundry}
          onChange={(e) => setLaundry(e.target.checked)}
        />
        Laundry
      </label>

      <label>
        <input
          type="checkbox"
          checked={maintenance}
          onChange={(e) => setMaintenance(e.target.checked)}
        />
        Maintenance
      </label>

      <button onClick={submit}>Submit</button>
    </div>
  );
}