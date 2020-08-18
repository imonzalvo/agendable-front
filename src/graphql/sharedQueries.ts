import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const GetEmployeeAvailableTime = gql`
  query QGetEmployeeAvailableTime($id: ID!, $duration: Int!, $date: String!) {
    getEmployeeAvailableTime(id: $id, duration: $duration, date: $date) {
      from
      to
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation CREATE_BOOKING(
    $start: String!
    $end: String!
    $status: String!
    $clientId: String
    $branchId: String!
    $servicesId: [String!]!
    $employeeId: String!
    $clientEmail: String
    $clientFamilyName: String
    $clientName: String
    $clientPhone: String
  ) {
    createBooking(
      start: $start
      end: $end
      status: $status
      clientId: $clientId
      branchId: $branchId
      employeeId: $employeeId
      clientEmail: $clientEmail
      clientFamilyName: $clientFamilyName
      clientName: $clientName
      clientPhone: $clientPhone
      servicesId: $servicesId
    ) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;
