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
          availability {
            items {
              day
              from
              to
            }
          }
        }
      }
    }
  }
`;

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
