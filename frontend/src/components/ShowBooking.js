import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./ShowBooking.css"; // Import CSS file

const GET_BOOKINGS = gql`
  query {
    bookings {
      id
      title
      firstName
      lastName
      email
      phone
      destinationCountry
      departureDate
      returnDate
      classOfService
      hotel
      airline
      additionalInfo
    }
  }
`;

const ShowBooking = () => {
  const { loading, error, data } = useQuery(GET_BOOKINGS);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (data) {
      setBookings(data.bookings);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="show-booking-container">
      <h2>Show Bookings</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Destination Country</th>
            <th>Departure Date</th>
            <th>Return Date</th>
            <th>Class of Service</th>
            <th>Hotel</th>
            <th>Airline</th>
            <th>Additional Info</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.destinationCountry}</td>
              <td>{booking.departureDate}</td>
              <td>{booking.returnDate}</td>
              <td>{booking.classOfService}</td>
              <td>{booking.hotel}</td>
              <td>{booking.airline}</td>
              <td>{booking.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooking;
