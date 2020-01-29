/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnCreateBookingWithServices
// ====================================================

export interface OnCreateBookingWithServices_onCreateBookingWithServices_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnCreateBookingWithServices_onCreateBookingWithServices_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface OnCreateBookingWithServices_onCreateBookingWithServices_services_items {
  __typename: 'BookingServices';
  id: string;
  service: OnCreateBookingWithServices_onCreateBookingWithServices_services_items_service | null;
}

export interface OnCreateBookingWithServices_onCreateBookingWithServices_services {
  __typename: 'ModelBookingServicesConnection';
  items: (OnCreateBookingWithServices_onCreateBookingWithServices_services_items | null)[] | null;
}

export interface OnCreateBookingWithServices_onCreateBookingWithServices_branch {
  __typename: 'Branch';
  id: string;
}

export interface OnCreateBookingWithServices_onCreateBookingWithServices {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: OnCreateBookingWithServices_onCreateBookingWithServices_employee;
  services: OnCreateBookingWithServices_onCreateBookingWithServices_services | null;
  branch: OnCreateBookingWithServices_onCreateBookingWithServices_branch;
}

export interface OnCreateBookingWithServices {
  onCreateBookingWithServices: OnCreateBookingWithServices_onCreateBookingWithServices | null;
}
