import { useState } from "react";

export default function ServiceRequest() {
  const [roomNumber, setRoomNumber] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    const res = await fetch("http://localhost:8080/api/service-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomNumber,
        description,
        requestType: "CLEANING",
        priority: "MEDIUM",
      }),
    });

    if (res.ok) alert("Service Request Sent");
  };

  return (
    <div className="card">
      <h2>Service Request</h2>

      <input
        placeholder="Room Number"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}