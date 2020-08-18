/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookingData
// ====================================================

export interface BookingData_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface BookingData_services {
  __typename: "Service";
  id: string;
}

export interface BookingData_branch {
  __typename: "Branch";
  id: string;
}

export interface BookingData {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: BookingData_employee;
  services: BookingData_services[];
  branch: BookingData_branch;
}
