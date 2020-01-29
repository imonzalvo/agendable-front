/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BookingStatus } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CREATE_BOOKING_WITH_SERVICES
// ====================================================

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services_items {
  __typename: 'BookingServices';
  id: string;
  service: CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services_items_service | null;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services {
  __typename: 'ModelBookingServicesConnection';
  items: (CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services_items | null)[] | null;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_branch {
  __typename: 'Branch';
  id: string;
}

export interface CREATE_BOOKING_WITH_SERVICES_createBookingWithServices {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_employee;
  services: CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_services | null;
  branch: CREATE_BOOKING_WITH_SERVICES_createBookingWithServices_branch;
}

export interface CREATE_BOOKING_WITH_SERVICES {
  createBookingWithServices: CREATE_BOOKING_WITH_SERVICES_createBookingWithServices | null;
}

export interface CREATE_BOOKING_WITH_SERVICESVariables {
  createdAt: any;
  start: any;
  end: any;
  status: BookingStatus;
  bookingBranchId: string;
  bookingEmployeeId: string;
  clientEmail?: any | null;
  clientFamilyName?: string | null;
  clientName?: string | null;
  clientPhone?: any | null;
  servicesId?: (string | null)[] | null;
}
