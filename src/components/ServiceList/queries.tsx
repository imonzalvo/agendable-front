import gql from 'graphql-tag';

export const GetServices = gql`
  query GetServices($id: ID!) {
    getBusiness(id: $id) {
      branches {
        items {
          id
          name
        }
      }
    }
  }
`;
