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

export const UPDATE_BUSINESS_DATA = gql`
  mutation UpdateBusinessData(
    $id: ID!
    $name: String
    $email: String
    $phone: String
    $handle: String
  ) {
    __typename
    updateBusiness(id: $id, name: $name, email: $email, phone: $phone, handle: $handle) {
      email
      handle
      id
      name
      phone
    }
  }
`;
