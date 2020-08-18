/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnCreateBooking
// ====================================================

export interface OnCreateBooking_newBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnCreateBooking_newBooking_services {
  __typename: "Service";
  id: string;
}

export interface OnCreateBooking_newBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface OnCreateBooking_newBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: OnCreateBooking_newBooking_employee;
  services: OnCreateBooking_newBooking_services[];
  branch: OnCreateBooking_newBooking_branch;
}

export interface OnCreateBooking {
  newBooking: OnCreateBooking_newBooking;
}
