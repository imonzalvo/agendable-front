/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BookingStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CreateBookingWithServices
// ====================================================

export interface CreateBookingWithServices_createBookingWithServices_employee {
  __typename: 'Employee';
  id: string;
}

export interface CreateBookingWithServices_createBookingWithServices_services_items {
  __typename: 'BookingServices';
  id: string;
}

export interface CreateBookingWithServices_createBookingWithServices_services {
  __typename: 'ModelBookingServicesConnection';
  items: (CreateBookingWithServices_createBookingWithServices_services_items | null)[] | null;
}

export interface CreateBookingWithServices_createBookingWithServices {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  employee: CreateBookingWithServices_createBookingWithServices_employee;
  services: CreateBookingWithServices_createBookingWithServices_services | null;
}

export interface CreateBookingWithServices {
  createBookingWithServices: CreateBookingWithServices_createBookingWithServices | null;
}

export interface CreateBookingWithServicesVariables {
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
