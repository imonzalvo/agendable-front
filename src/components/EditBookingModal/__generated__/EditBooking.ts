/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BookingStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: EditBooking
// ====================================================

export interface EditBooking_updateBooking_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface EditBooking_updateBooking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface EditBooking_updateBooking_services_items {
  __typename: 'BookingServices';
  id: string;
  service: EditBooking_updateBooking_services_items_service | null;
}

export interface EditBooking_updateBooking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (EditBooking_updateBooking_services_items | null)[] | null;
}

export interface EditBooking_updateBooking_branch {
  __typename: 'Branch';
  id: string;
}

export interface EditBooking_updateBooking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  clientName: string | null;
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientPhone: any | null;
  employee: EditBooking_updateBooking_employee;
  services: EditBooking_updateBooking_services | null;
  branch: EditBooking_updateBooking_branch;
}

export interface EditBooking {
  updateBooking: EditBooking_updateBooking | null;
}

export interface EditBookingVariables {
  id: string;
  start: any;
  end: any;
  status: BookingStatus;
  bookingBranchId: string;
  bookingEmployeeId: string;
  clientEmail?: any | null;
  clientFamilyName?: string | null;
  clientName?: string | null;
  clientPhone?: any | null;
}
