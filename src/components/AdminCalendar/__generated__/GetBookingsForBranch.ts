/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBookingsForBranch
// ====================================================

export interface GetBookingsForBranch_getBookingsByBranch_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface GetBookingsForBranch_getBookingsByBranch_services {
  __typename: "Service";
  id: string;
}

export interface GetBookingsForBranch_getBookingsByBranch_branch {
  __typename: "Branch";
  id: string;
}

export interface GetBookingsForBranch_getBookingsByBranch {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: GetBookingsForBranch_getBookingsByBranch_employee;
  services: GetBookingsForBranch_getBookingsByBranch_services[];
  branch: GetBookingsForBranch_getBookingsByBranch_branch;
}

export interface GetBookingsForBranch {
  getBookingsByBranch: (GetBookingsForBranch_getBookingsByBranch | null)[] | null;
}

export interface GetBookingsForBranchVariables {
  id: string;
}
