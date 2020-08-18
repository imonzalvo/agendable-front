import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const GetBooking = gql`
  query GetBooking($id: String!) {
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
        id
      }
    }
  }
`;

export const UPDATE_BOOKING = gql`
  mutation UpdateBooking(
    $id: ID
    $start: String
    $end: String
    $status: String
    $clientId: String
    $branchId: String
    $servicesId: [String!]
    $employeeId: String
    $clientEmail: String
    $clientPhone: String
    $clientName: String
    $clientFamilyName: String
  ) {
    updateBooking(
      id: $id
      start: $start
      end: $end
      status: $status
      clientId: $clientId
      branchId: $branchId
      servicesId: $servicesId
      employeeId: $employeeId
      clientEmail: $clientEmail
      clientPhone: $clientPhone
      clientName: $clientName
      clientFamilyName: $clientFamilyName
    ) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const DELETE_BOOKING = gql`
  mutation DELETE_BOOKING($id: ID!) {
    deleteBooking(id: $id) {
      id
    }
  }
`;
