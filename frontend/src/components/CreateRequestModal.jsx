import { useState } from "react";
import { createRequest } from "../services/serviceRequestApi";

export default function CreateRequestModal({ reload }) {
  const [form, setForm] = useState({
    roomNumber: "",
    guestName: "",
    requestType: "FOOD",
    priority: "MEDIUM",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRequest(form);
    reload();
    setForm({
      roomNumber: "",
      guestName: "",
      requestType: "FOOD",
      priority: "MEDIUM",
      description: ""
    });
  };

  return (
    <div className="card p-4 mb-4 shadow">
      <h5>Create Service Request</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Room Number"
              required
              value={form.roomNumber}
              onChange={(e) =>
                setForm({ ...form, roomNumber: e.target.value })
              }
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Guest Name"
              required
              value={form.guestName}
              onChange={(e) =>
                setForm({ ...form, guestName: e.target.value })
              }
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={form.requestType}
              onChange={(e) =>
                setForm({ ...form, requestType: e.target.value })
              }
            >
              <option>FOOD</option>
              <option>LAUNDRY</option>
              <option>HOUSEKEEPING</option>
              <option>MAINTENANCE</option>
            </select>
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}