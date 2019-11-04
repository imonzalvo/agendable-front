import gql from 'graphql-tag';

export const GetBusinessByHandle = gql`
  query GetBusinessByHandle($handle: String!) {
    businessByHandle(handle: $handle) {
      items {
        id
        name
        branches {
          items {
            id
          }
        }
      }
    }
  }
`;
