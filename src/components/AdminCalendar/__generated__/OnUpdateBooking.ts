/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnUpdateBooking
// ====================================================

export interface OnUpdateBooking_onUpdateBooking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnUpdateBooking_onUpdateBooking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface OnUpdateBooking_onUpdateBooking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: OnUpdateBooking_onUpdateBooking_services_items_service | null;
}

export interface OnUpdateBooking_onUpdateBooking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (OnUpdateBooking_onUpdateBooking_services_items | null)[] | null;
}

export interface OnUpdateBooking_onUpdateBooking_branch {
  __typename: 'Branch';
  id: string;
}

export interface OnUpdateBooking_onUpdateBooking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: OnUpdateBooking_onUpdateBooking_employee;
  services: OnUpdateBooking_onUpdateBooking_services | null;
  branch: OnUpdateBooking_onUpdateBooking_branch;
}

export interface OnUpdateBooking {
  onUpdateBooking: OnUpdateBooking_onUpdateBooking | null;
}
