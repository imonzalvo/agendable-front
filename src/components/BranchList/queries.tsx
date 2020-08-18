import gql from 'graphql-tag';

export const GetBranches = gql`
  query GetBranches($id: String!) {
    getBusiness(id: $id) {
      branches {
        id
        name
        description
      }
    }
  }
`;
