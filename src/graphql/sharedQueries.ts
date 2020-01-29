import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const GetEmployeeAvailableTime = gql`
  query QGetEmployeeAvailableTime($id: ID!, $duration: Int!, $date: String!) {
    getEmployeeAvailableTime(id: $id, duration: $duration, date: $date)
  }
`;

export const CREATE_BOOKING = gql`
  mutation CREATE_BOOKING_WITH_SERVICES(
    $createdAt: AWSDateTime!
    $start: AWSDateTime!
    $end: AWSDateTime!
    $status: BookingStatus!
    $bookingBranchId: ID!
    $bookingEmployeeId: ID!
    $clientEmail: AWSEmail
    $clientFamilyName: String
    $clientName: String
    $clientPhone: AWSPhone
    $servicesId: [ID]
  ) {
    __typename
    createBookingWithServices(
      input: {
        createdAt: $createdAt
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
      servicesId: $servicesId
    ) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;
