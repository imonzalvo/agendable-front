/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnDeleteBooking
// ====================================================

export interface OnDeleteBooking_deletedBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnDeleteBooking_deletedBooking_services {
  __typename: "Service";
  id: string;
}

export interface OnDeleteBooking_deletedBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface OnDeleteBooking_deletedBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: OnDeleteBooking_deletedBooking_employee;
  services: OnDeleteBooking_deletedBooking_services[];
  branch: OnDeleteBooking_deletedBooking_branch;
}

export interface OnDeleteBooking {
  deletedBooking: OnDeleteBooking_deletedBooking | null;
}

export interface OnDeleteBookingVariables {
  id?: string | null;
}
