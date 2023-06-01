/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBooking
// ====================================================

export interface CreateBooking_createBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface CreateBooking_createBooking_services {
  __typename: "Service";
  id: string;
}

export interface CreateBooking_createBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface CreateBooking_createBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: CreateBooking_createBooking_employee;
  services: CreateBooking_createBooking_services[];
  branch: CreateBooking_createBooking_branch;
}

export interface CreateBooking {
  createBooking: CreateBooking_createBooking | null;
}

export interface CreateBookingVariables {
  start?: string | null;
  end?: string | null;
  status?: string | null;
  clientId?: string | null;
  branchId: string;
  servicesId: string[];
  employeeId: string;
  clientEmail?: string | null;
  clientPhone?: string | null;
  clientName?: string | null;
  clientFamilyName?: string | null;
}
