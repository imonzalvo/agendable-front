import { gql } from '@apollo/client';

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
      items {
        id
        service {
          id
        }
      }
    }
    branch {
      id
    }
  }
`;
