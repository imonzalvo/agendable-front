import gql from 'graphql-tag';

// TODO: Query will break if branch has too many bookings
export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: ID!, $start: String!, $end: String!) {
    getBranch(id: $id) {
      bookings(limit: 999999999, filter: { start: { between: [$start, $end] } }) {
        items {
          end
          start
          id
          clientName
          clientEmail
          clientFamilyName
          clientPhone
          employee {
            id
            givenName
            familyName
          }
          services {
            items {
              service {
                id
              }
            }
          }
        }
      }
    }
  }
`;
