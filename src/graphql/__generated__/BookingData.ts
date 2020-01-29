/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookingData
// ====================================================

export interface BookingData_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface BookingData_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface BookingData_services_items {
  __typename: 'BookingServices';
  id: string;
  service: BookingData_services_items_service | null;
}

export interface BookingData_services {
  __typename: 'ModelBookingServicesConnection';
  items: (BookingData_services_items | null)[] | null;
}

export interface BookingData_branch {
  __typename: 'Branch';
  id: string;
}

export interface BookingData {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: BookingData_employee;
  services: BookingData_services | null;
  branch: BookingData_branch;
}
