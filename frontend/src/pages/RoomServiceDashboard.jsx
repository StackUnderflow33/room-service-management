import { useEffect, useState } from "react";
import CreateRequestModal from "../components/CreateRequestModal";
import RequestTable from "../components/RequestTable";
import { getAllRequests } from "../services/serviceRequestApi";
import "./RoomServiceDashboard.css";

export default function RoomServiceDashboard() {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadRequests = async () => {
    const res = await getAllRequests();
    setRequests(res.data);
  };

  useEffect(() => { loadRequests(); }, []);

  // Filtered requests
  const filteredRequests = requests.filter(r =>
    r.guestName.toLowerCase().includes(search.toLowerCase()) ||
    r.requestType.toLowerCase().includes(search.toLowerCase()) ||
    r.roomNumber.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="room-service-container">
      <h2>Room Service Dashboard</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by guest, room, or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <CreateRequestModal reload={loadRequests} />

      <div className="card">
        <h3>Active Requests</h3>
        {currentItems.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          <RequestTable requests={currentItems} reload={loadRequests} />
        )}

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}