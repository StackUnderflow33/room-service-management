import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RoomServiceDashboard from "./pages/RoomServiceDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar shadow-sm">
  <span className="navbar-brand">Hotel Management Portal</span>
  <div className="d-flex">
    <Link to="/room-service" className="btn">
      🍽️ Room Service
    </Link>
  </div>
</nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/room-service" element={<RoomServiceDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;