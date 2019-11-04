import gql from 'graphql-tag';

export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: ID!) {
    getBranch(id: $id) {
      bookings {
        items {
          end
          start
          id
          clientName
          clientFamilyName
          employee {
            id
          }
        }
      }
    }
  }
`;
