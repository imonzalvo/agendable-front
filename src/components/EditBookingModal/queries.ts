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
  mutation EditBooking($id: ID!) {
    __typename
    updateBooking(input: { id: $id }) {
      id
    }
  }
`;
