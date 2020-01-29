import { gql } from '@apollo/client';
import { BookingFragment } from '@/graphql/fragments';

export const GetBooking = gql`
  query GetBooking($id: ID!) {
    __typename
    getBooking(id: $id) {
      clientEmail
      clientFamilyName
      clientName
      clientPhone
      end
      id
      start
      status
      services {
        items {
          service {
            id
          }
          id
        }
      }
    }
  }
`;

export const EditBooking = gql`
  mutation EditBooking(
    $id: ID!
    $start: AWSDateTime!
    $end: AWSDateTime!
    $status: BookingStatus!
    $bookingBranchId: ID!
    $bookingEmployeeId: ID!
    $clientEmail: AWSEmail
    $clientFamilyName: String
    $clientName: String
    $clientPhone: AWSPhone
  ) {
    __typename
    updateBooking(
      input: {
        id: $id
        start: $start
        end: $end
        status: $status
        bookingBranchId: $bookingBranchId
        bookingEmployeeId: $bookingEmployeeId
        clientEmail: $clientEmail
        clientFamilyName: $clientFamilyName
        clientName: $clientName
        clientPhone: $clientPhone
      }
    ) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const DELETE_BOOKING_SERVICES = gql`
  mutation DELETE_BOOKING_SERVICES($id: ID!) {
    __typename
    deleteBookingServices(input: { id: $id }) {
      booking {
        ...BookingData
      }
    }
  }
  ${BookingFragment}
`;

export const CREATE_BOOKING_SERVICES = gql`
  mutation CREATE_BOOKING_SERVICES($bookingId: ID!, $serviceId: ID!) {
    __typename
    createBookingServices(
      input: { bookingServicesBookingId: $bookingId, bookingServicesServiceId: $serviceId }
    ) {
      booking {
        ...BookingData
      }
    }
  }
  ${BookingFragment}
`;

export const DELETE_BOOKING = gql`
  mutation DELETE_BOOKING($id: ID!) {
    deleteBooking(input: { id: $id }) {
      id
    }
  }
`;
