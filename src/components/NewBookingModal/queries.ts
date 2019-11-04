import gql from 'graphql-tag';

export const GetBranchServices = gql`
  query GetBranchServices($id: ID!) {
    getBranch(id: $id) {
      services {
        items {
          service {
            id
            name
            duration
            currency
            price
          }
        }
      }
    }
  }
`;

export const GetEmployeeAvailableTime = gql`
  query GetEmployeeAvailableTime($id: ID!, $duration: Int!, $date: String!) {
    getEmployeeAvailableTime(id: $id, duration: $duration, date: $date)
  }
`;

export const CreateBooking = gql`
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
