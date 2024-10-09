import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBooking from './components/AddBooking';
import ShowBooking from './components/ShowBooking';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
         <Route path="/add-booking" element={<AddBooking />} />
         <Route path="/show-bookings" element={<ShowBooking />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
