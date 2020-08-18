/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_BOOKING_WITH_SERVICES
// ====================================================

export interface CREATE_BOOKING_WITH_SERVICES_createBooking_employee {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBooking_services {
  __typename: "Service";
  id: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBooking_branch {
  __typename: "Branch";
  id: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBooking {
  __typename: "Booking";
  id: string;
  start: string;
  end: string;
  clientName: string | null;
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientPhone: string | null;
  employee: CREATE_BOOKING_WITH_SERVICES_createBooking_employee;
  services: CREATE_BOOKING_WITH_SERVICES_createBooking_services[];
  branch: CREATE_BOOKING_WITH_SERVICES_createBooking_branch;
}

export interface CREATE_BOOKING_WITH_SERVICES {
  createBooking: CREATE_BOOKING_WITH_SERVICES_createBooking;
}

export interface CREATE_BOOKING_WITH_SERVICESVariables {
  start: string;
  end: string;
  status: string;
  clientId?: string | null;
  branchId: string;
  servicesId: string[];
  employeeId: string;
  clientEmail?: string | null;
  clientFamilyName?: string | null;
  clientName?: string | null;
  clientPhone?: string | null;
}
