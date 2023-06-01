/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBooking
// ====================================================

export interface UpdateBooking_updateBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface UpdateBooking_updateBooking_services {
  __typename: "Service";
  id: string;
}

export interface UpdateBooking_updateBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface UpdateBooking_updateBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: UpdateBooking_updateBooking_employee;
  services: UpdateBooking_updateBooking_services[];
  branch: UpdateBooking_updateBooking_branch;
}

export interface UpdateBooking {
  updateBooking: UpdateBooking_updateBooking | null;
}

export interface UpdateBookingVariables {
  id: string;
  start?: string | null;
  end?: string | null;
  status?: string | null;
  clientId?: string | null;
  branchId?: string | null;
  servicesId?: string[] | null;
  employeeId?: string | null;
  clientEmail?: string | null;
  clientPhone?: string | null;
  clientName?: string | null;
  clientFamilyName?: string | null;
}
