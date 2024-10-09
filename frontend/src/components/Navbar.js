import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add CSS for professional design

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Travel Booking</Link>
      </h1>
      <ul>
        <li>
          <Link to="/add-booking">Add Booking</Link>
        </li>
        <li>
          <Link to="/show-bookings">Show Booking</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
