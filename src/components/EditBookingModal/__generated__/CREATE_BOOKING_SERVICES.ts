/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_BOOKING_SERVICES
// ====================================================

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: CREATE_BOOKING_SERVICES_createBookingServices_booking_services_items_service | null;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (CREATE_BOOKING_SERVICES_createBookingServices_booking_services_items | null)[] | null;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking_branch {
  __typename: 'Branch';
  id: string;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices_booking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: CREATE_BOOKING_SERVICES_createBookingServices_booking_employee;
  services: CREATE_BOOKING_SERVICES_createBookingServices_booking_services | null;
  branch: CREATE_BOOKING_SERVICES_createBookingServices_booking_branch;
}

export interface CREATE_BOOKING_SERVICES_createBookingServices {
  __typename: 'BookingServices';
  booking: CREATE_BOOKING_SERVICES_createBookingServices_booking | null;
}

export interface CREATE_BOOKING_SERVICES {
  createBookingServices: CREATE_BOOKING_SERVICES_createBookingServices | null;
}

export interface CREATE_BOOKING_SERVICESVariables {
  bookingId: string;
  serviceId: string;
}
