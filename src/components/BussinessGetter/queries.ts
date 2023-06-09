import gql from 'graphql-tag';

export const GET_BUSINESS_BY_HANDLE = gql`
  query GET_BUSINESS_BY_HANDLE($handle: String!) {
    getBusinessByHandle(handle: $handle) {
      id
      name
      website
      instagramUrl
      facebookUrl
      branches {
        id
        address
      }
      landing {
        id
        displayName
        cta
        description
        logoUrl
        images {
          id
          url
        }
      }
      Configuration {
        scheduleMinutesSeparation
        enableEmailsNotifications
      }
    }
  }
`;
