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
  givenName: string;
  familyName: string;
}

export interface CreateBookingWithServices_createBookingWithServices_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface CreateBookingWithServices_createBookingWithServices_services_items {
  __typename: 'BookingServices';
  id: string;
  service: CreateBookingWithServices_createBookingWithServices_services_items_service | null;
}

export interface CreateBookingWithServices_createBookingWithServices_services {
  __typename: 'ModelBookingServicesConnection';
  items: (CreateBookingWithServices_createBookingWithServices_services_items | null)[] | null;
}

export interface CreateBookingWithServices_createBookingWithServices_branch {
  __typename: 'Branch';
  id: string;
}

export interface CreateBookingWithServices_createBookingWithServices {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: CreateBookingWithServices_createBookingWithServices_employee;
  services: CreateBookingWithServices_createBookingWithServices_services | null;
  branch: CreateBookingWithServices_createBookingWithServices_branch;
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
