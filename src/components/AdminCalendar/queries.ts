import gql from 'graphql-tag';

export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: ID!) {
    getBranch(id: $id) {
      bookings(limit: 256) {
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
