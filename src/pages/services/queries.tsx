import gql from 'graphql-tag';

export const GetServices = gql`
  query GetServices($id: ID!) {
    getBranch(id: $id) {
      services {
        items {
          service {
            name
          }
        }
      }
    }
  }
`;
