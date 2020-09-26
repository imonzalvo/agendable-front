import gql from 'graphql-tag';

export const GET_SERVICES_DATA = gql`
  query GetServicesData($id: String!) {
    getBranch(id: $id) {
      services {
        id
        name
        price
        currency
        duration
        branches {
          id
        }
        description
        employees {
          id
        }
        category {
          id
          name
        }
      }
    }
  }
`;
