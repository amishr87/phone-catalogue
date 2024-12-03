import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PhoneList from "./components/PhoneList";
import AddPhone from "./components/AddPhone";
import PhoneDetails from "./components/PhoneDetails";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/add-phone" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Add Phone
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/search" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Search
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/search" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Compare
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/add-phone" element={<AddPhone />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </div>
  );
}

// Styles for the navigation bar
const navStyle = {
  backgroundColor: "#007bff",
  padding: "1rem 2rem",
  color: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const ulStyle = {
  listStyle: "none",
  display: "grid", // Change to grid layout
  gridTemplateColumns: "repeat(4, 1fr)", // Four equally spaced columns
  alignItems: "center", // Center items vertically
  margin: 0,
  padding: 0,
};

const liStyle = {
  display: "flex",
  justifyContent: "center", // Center text horizontally
};

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: "1rem",
  transition: "color 0.3s ease",
  cursor: "pointer",
};

const handleMouseEnter = (e) => {
  e.target.style.color = "#add8e6"; // Change color on hover
};

const handleMouseLeave = (e) => {
  e.target.style.color = "#ffffff"; // Reset color on mouse leave
};

export default App;
