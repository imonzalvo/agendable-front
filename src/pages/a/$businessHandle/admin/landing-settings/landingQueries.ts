import gql from 'graphql-tag';

export const GET_LANDING_DATA = gql`
  query GetLandingData($id: String!) {
    getBusiness(id: $id) {
      handle
      landing {
        id
        cta
        description
        displayName
        logoUrl
        images {
          id
          url
        }
      }
    }
  }
`;

export const UPDATE_LANDING_DATA = gql`
  mutation UpdateLandingInfo($id: ID!, $cta: String, $displayName: String, $description: String) {
    updateLandingInfo(id: $id, cta: $cta, displayName: $displayName, description: $description) {
      id
    }
  }
`;
