/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnDeleteBooking
// ====================================================

export interface OnDeleteBooking_onDeleteBooking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface OnDeleteBooking_onDeleteBooking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface OnDeleteBooking_onDeleteBooking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: OnDeleteBooking_onDeleteBooking_services_items_service | null;
}

export interface OnDeleteBooking_onDeleteBooking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (OnDeleteBooking_onDeleteBooking_services_items | null)[] | null;
}

export interface OnDeleteBooking_onDeleteBooking_branch {
  __typename: 'Branch';
  id: string;
}

export interface OnDeleteBooking_onDeleteBooking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: OnDeleteBooking_onDeleteBooking_employee;
  services: OnDeleteBooking_onDeleteBooking_services | null;
  branch: OnDeleteBooking_onDeleteBooking_branch;
}

export interface OnDeleteBooking {
  onDeleteBooking: OnDeleteBooking_onDeleteBooking | null;
}
