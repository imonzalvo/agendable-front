import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const CreateBooking = gql`
  mutation CreateBookingWithServices(
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
