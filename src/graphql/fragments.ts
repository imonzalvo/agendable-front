import gql from 'graphql-tag';

export const BookingFragment = gql`
  fragment BookingData on Booking {
    id
    start
    end
    clientName
    clientEmail
    clientFamilyName
    clientPhone
    employee {
      id
      givenName
      familyName
    }
    services {
      id
    }
    branch {
      id
    }
  }
`;
