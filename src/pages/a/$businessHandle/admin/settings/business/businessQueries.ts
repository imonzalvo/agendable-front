import gql from 'graphql-tag';

export const GET_BUSINESS_DATA = gql`
  query GetBusinessData($id: String!) {
    getBusiness(id: $id) {
      name
      email
      phone
      handle
      website
      facebookUrl
      instagramUrl
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
    $website: String
    $facebookUrl: String
    $instagramUrl: String
  ) {
    __typename
    updateBusiness(
      id: $id
      name: $name
      email: $email
      phone: $phone
      handle: $handle
      website: $website
      facebookUrl: $facebookUrl
      instagramUrl: $instagramUrl
    ) {
      email
      handle
      id
      name
      phone
      website
      facebookUrl
      instagramUrl
    }
  }
`;
