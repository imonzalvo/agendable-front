import gql from 'graphql-tag';

export const CreateClientBooking = gql`
  mutation CreateBooking(
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
  ) {
    __typename
    createBooking(
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
    ) {
      id
      start
      end
      employee {
        id
      }
    }
  }
`;
