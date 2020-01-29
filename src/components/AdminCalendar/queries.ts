import { gql } from '@apollo/client';
import { BookingFragment } from '@/graphql/fragments';

// TODO: Query will break if branch has too many bookings
export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: ID!, $start: String!, $end: String!) {
    getBranch(id: $id) {
      bookings(limit: 999999999, filter: { start: { between: [$start, $end] } }) {
        items {
          ...BookingData
        }
      }
    }
  }
  ${BookingFragment}
`;

export const ON_UPDATE_BOOKING = gql`
  subscription OnUpdateBooking {
    __typename
    onUpdateBooking {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_DELETE_BOOKING = gql`
  subscription OnDeleteBooking {
    onDeleteBooking {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_CREATE_BOOKING_WITH_SERVICES = gql`
  subscription OnCreateBookingWithServices {
    onCreateBookingWithServices {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_DELETE_BOOKING_SERVICES = gql`
  subscription ON_DELETE_BOOKING_SERVICES {
    onDeleteBookingServices {
      booking {
        ...BookingData
      }
    }
  }
  ${BookingFragment}
`;

export const ON_CREATE_BOOKING_SERVICES = gql`
  subscription ON_CREATE_BOOKING_SERVICES {
    onCreateBookingServices {
      booking {
        ...BookingData
      }
    }
  }
  ${BookingFragment}
`;
