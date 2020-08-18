import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const CreateBooking = gql`
  mutation CreateBooking(
    $start: String
    $end: String
    $status: String
    $clientId: String
    $branchId: String!
    $servicesId: [String!]!
    $employeeId: String!
    $clientEmail: String
    $clientPhone: String
    $clientName: String
    $clientFamilyName: String
  ) {
    createBooking(
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
