/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: ON_CREATE_BOOKING_SERVICES
// ====================================================

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services_items_service | null;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services {
  __typename: 'ModelBookingServicesConnection';
  items:
    | (ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services_items | null)[]
    | null;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_branch {
  __typename: 'Branch';
  id: string;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_employee;
  services: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_services | null;
  branch: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking_branch;
}

export interface ON_CREATE_BOOKING_SERVICES_onCreateBookingServices {
  __typename: 'BookingServices';
  booking: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices_booking | null;
}

export interface ON_CREATE_BOOKING_SERVICES {
  onCreateBookingServices: ON_CREATE_BOOKING_SERVICES_onCreateBookingServices | null;
}
