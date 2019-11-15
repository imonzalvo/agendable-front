import gql from 'graphql-tag';

export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: ID!) {
    getBranch(id: $id) {
      bookings(limit: 99) {
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
