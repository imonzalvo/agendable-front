import gql from 'graphql-tag';

export const GET_BUSINESS_DATA = gql`
  query GetBusinessData($id: String!) {
    getBusiness(id: $id) {
      name
      email
      phone
      handle
    }
  }
`;
