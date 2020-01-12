/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBookingsForBranch
// ====================================================

export interface GetBookingsForBranch_getBranch_bookings_items_employee {
  __typename: 'Employee';
  id: string;
}

export interface GetBookingsForBranch_getBranch_bookings_items {
  __typename: 'Booking';
  end: any;
  start: any;
  id: string;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  employee: GetBookingsForBranch_getBranch_bookings_items_employee;
}

export interface GetBookingsForBranch_getBranch_bookings {
  __typename: 'ModelBookingConnection';
  items: (GetBookingsForBranch_getBranch_bookings_items | null)[] | null;
}

export interface GetBookingsForBranch_getBranch {
  __typename: 'Branch';
  bookings: GetBookingsForBranch_getBranch_bookings | null;
}

export interface GetBookingsForBranch {
  getBranch: GetBookingsForBranch_getBranch | null;
}

export interface GetBookingsForBranchVariables {
  id: string;
}
