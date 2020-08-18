import gql from 'graphql-tag';

export const GetServices = gql`
  query GetServices($id: String!) {
    getBranch(id: $id) {
      services {
        description
        duration
        price
        name
        id
      }
    }
  }
`;
