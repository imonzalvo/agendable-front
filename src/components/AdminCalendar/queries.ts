import gql from 'graphql-tag';
import { BookingFragment } from '@/graphql/fragments';

export const GetBookingsForBranch = gql`
  query GetBookingsForBranch($id: String!) {
    getBookingsByBranch(branchId: $id) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_UPDATE_BOOKING = gql`
  subscription OnUpdateBooking($id: String) {
    updatedBooking(branchId: $id) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_DELETE_BOOKING = gql`
  subscription OnDeleteBooking($id: String) {
    deletedBooking(branchId: $id) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;

export const ON_CREATE_BOOKING = gql`
  subscription OnCreateBooking($id: String) {
    newBooking(branchId: $id) {
      ...BookingData
    }
  }
  ${BookingFragment}
`;
