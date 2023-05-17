import gql from 'graphql-tag';

export const GET_BUSINESS_BY_HANDLE = gql`
  query GET_BUSINESS_BY_HANDLE($handle: String!) {
    getBusinessByHandle(handle: $handle) {
      id
      name
      branches {
        id
        address
      }
      landing {
        id
        displayName
        cta
        description
        images {
          id
        }
      }
    }
  }
`;
