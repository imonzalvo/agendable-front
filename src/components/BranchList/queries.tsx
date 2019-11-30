import gql from 'graphql-tag';

export const GetBranches = gql`
  query GetBranches($id: ID!) {
    getBusiness(id: $id) {
      branches {
        items {
          id
          name
          description
        }
      }
    }
  }
`;
