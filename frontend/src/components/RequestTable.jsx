import StatusBadge from "./StatusBadge";
import { updateRequest, deleteRequest } from "../services/serviceRequestApi";

export default function RequestTable({ requests, reload }) {

  const updateStatus = async (id, status) => {
    await updateRequest(id, { status });
    reload();
  };

  const remove = async (id) => {
    await deleteRequest(id);
    reload();
  };

  return (
    <table className="table table-hover shadow">
      <thead>
        <tr>
          <th>Room</th>
          <th>Guest</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <tr key={req.id}>
            <td data-label="Room">{req.roomNumber}</td>
            <td data-label="Guest">{req.guestName}</td>
            <td data-label="Type">{req.requestType}</td>
            <td data-label="Priority">{req.priority}</td>
            <td data-label="Status"><StatusBadge status={req.status} /></td>
            <td data-label="Action">
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() =>
                  updateStatus(req.id, "IN_PROGRESS")
                }
              >
                Start
              </button>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() =>
                  updateStatus(req.id, "COMPLETED")
                }
              >
                Complete
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => remove(req.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}