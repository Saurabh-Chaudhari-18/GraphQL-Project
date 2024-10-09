import { gql } from '@apollo/client';

export const ADD_BOOKING_MUTATION = gql`
  mutation AddBooking($bookingData: BookingInput!) {
    addBooking(bookingData: $bookingData) {
      id
      firstName
      lastName
      email
      destinationCountry
      departureDate
      returnDate
    }
  }
`;
