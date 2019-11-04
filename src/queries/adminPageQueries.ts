import gql from 'graphql-tag';

export const GetBranchEmployees = gql`
  query GetBranchEmployees($id: ID!) {
    getBranch(id: $id) {
      employees {
        items {
          id
          familyName
          givenName
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
