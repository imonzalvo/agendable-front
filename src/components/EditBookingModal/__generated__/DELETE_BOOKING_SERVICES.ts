/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_BOOKING_SERVICES
// ====================================================

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services_items_service | null;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services_items | null)[] | null;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking_branch {
  __typename: 'Branch';
  id: string;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices_booking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: DELETE_BOOKING_SERVICES_deleteBookingServices_booking_employee;
  services: DELETE_BOOKING_SERVICES_deleteBookingServices_booking_services | null;
  branch: DELETE_BOOKING_SERVICES_deleteBookingServices_booking_branch;
}

export interface DELETE_BOOKING_SERVICES_deleteBookingServices {
  __typename: 'BookingServices';
  booking: DELETE_BOOKING_SERVICES_deleteBookingServices_booking | null;
}

export interface DELETE_BOOKING_SERVICES {
  deleteBookingServices: DELETE_BOOKING_SERVICES_deleteBookingServices | null;
}

export interface DELETE_BOOKING_SERVICESVariables {
  id: string;
}
