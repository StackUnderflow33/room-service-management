import { useState } from "react";
import Checklist from "./components/Checklist";
import ServiceRequest from "./components/ServiceRequest";
import LostFound from "./components/LostFound";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("checklist");

  return (
    <div className="container">
      <h1>🏨 Room Service Management</h1>

      <div className="nav">
        <button onClick={() => setPage("checklist")}>Checklist</button>
        <button onClick={() => setPage("service")}>Service Request</button>
        <button onClick={() => setPage("lost")}>Lost & Found</button>
      </div>

      {page === "checklist" && <Checklist />}
      {page === "service" && <ServiceRequest />}
      {page === "lost" && <LostFound />}
    </div>
  );
}