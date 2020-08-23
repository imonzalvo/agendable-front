/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnUpdateBooking
// ====================================================

export interface OnUpdateBooking_updatedBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnUpdateBooking_updatedBooking_services {
  __typename: "Service";
  id: string;
}

export interface OnUpdateBooking_updatedBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface OnUpdateBooking_updatedBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: OnUpdateBooking_updatedBooking_employee;
  services: OnUpdateBooking_updatedBooking_services[];
  branch: OnUpdateBooking_updatedBooking_branch;
}

export interface OnUpdateBooking {
  updatedBooking: OnUpdateBooking_updatedBooking;
}

export interface OnUpdateBookingVariables {
  id?: string | null;
}
