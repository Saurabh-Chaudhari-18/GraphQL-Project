import { gql } from '@apollo/client';

export const GET_BOOKINGS_QUERY = gql`
  query GetBookings {
    bookings {
      id
      firstName
      lastName
      email
      organization
      phone
      destinationCountry
      departureDate
      returnDate
      hotel
      airline
      additionalInfo
    }
  }
`;
