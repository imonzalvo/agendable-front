import gql from 'graphql-tag';

export const GetBranchEmployees = gql`
  query GetBranchEmployees($id: String!) {
    getBranch(id: $id) {
      employees {
        id
        familyName
        givenName
        services {
          id
        }
        availability {
          day
          from
          to
        }
      }
    }
  }
`;

export const GetBranchServices = gql`
  query GetBranchServices($id: String!) {
    getBranch(id: $id) {
      services {
        id
        name
        duration
        currency
        price
      }
    }
  }
`;
