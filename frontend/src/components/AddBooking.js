import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOKING_MUTATION } from '../graphql/mutations';
import './AddBooking.css';
import image from '../image/website-design-preview-44621.jpg'

function AddBooking() {
  const [bookingData, setBookingData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    organization: '',
    phone: '',
    destinationCountry: '',
    departureDate: '',
    returnDate: '',
    classOfService: '',
    hotel: '',
    airline: '',
    additionalInfo: '',
  });

  const [addBooking] = useMutation(ADD_BOOKING_MUTATION);

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBooking({ variables: { bookingData } });
      alert('Booking submitted successfully!');
      setBookingData({
        title: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        organization: '',
        phone: '',
        destinationCountry: '',
        departureDate: '',
        returnDate: '',
        classOfService: '',
        hotel: '',
        airline: '',
        additionalInfo: '',
      });
    } catch (err) {
      alert('Error submitting booking');
    }
  };

  return (
    <div className="add-booking-grid">
      <div className="booking-form">
        <h2>Add Booking</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={bookingData.title} onChange={handleChange} required />

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={bookingData.firstName} onChange={handleChange} required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={bookingData.lastName} onChange={handleChange} required />

          <label htmlFor="birthDate">Birth Date</label>
          <input type="date" id="birthDate" name="birthDate" value={bookingData.birthDate} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={bookingData.email} onChange={handleChange} required />

          <label htmlFor="organization">Organization</label>
          <input type="text" id="organization" name="organization" value={bookingData.organization} onChange={handleChange} />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={bookingData.phone} onChange={handleChange} required />

          <label htmlFor="destinationCountry">Destination Country</label>
          <input type="text" id="destinationCountry" name="destinationCountry" value={bookingData.destinationCountry} onChange={handleChange} required />

          <label htmlFor="departureDate">Departure Date</label>
          <input type="date" id="departureDate" name="departureDate" value={bookingData.departureDate} onChange={handleChange} required />

          <label htmlFor="returnDate">Return Date</label>
          <input type="date" id="returnDate" name="returnDate" value={bookingData.returnDate} onChange={handleChange} required />

          <label htmlFor="classOfService">Class of Service</label>
          <input type="text" id="classOfService" name="classOfService" value={bookingData.classOfService} onChange={handleChange} />

          <label htmlFor="hotel">Hotel</label>
          <input type="text" id="hotel" name="hotel" value={bookingData.hotel} onChange={handleChange} />

          <label htmlFor="airline">Airline</label>
          <input type="text" id="airline" name="airline" value={bookingData.airline} onChange={handleChange} />

          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea id="additionalInfo" name="additionalInfo" value={bookingData.additionalInfo} onChange={handleChange}></textarea>

          <button type="submit">Submit Booking</button>
        </form>
      </div>
      <div className="booking-image">
  <img src={image} alt="Travel" />
</div>

    </div>
  );
}

export default AddBooking;
