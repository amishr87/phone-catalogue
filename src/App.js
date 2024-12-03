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
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/add-phone" style={linkStyle}>
              Add Phone
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/search" style={linkStyle}>
              Search
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/search" style={linkStyle}>
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
  background: "#007bff",
  padding: "1rem",
  color: "white",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: "0 1rem",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
};

export default App;
