/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BookingStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CreateBooking
// ====================================================

export interface CreateBooking_createBooking_employee {
  __typename: 'Employee';
  id: string;
}

export interface CreateBooking_createBooking {
  __typename: 'Booking';
  id: string;
  start: any;
  end: any;
  employee: CreateBooking_createBooking_employee;
}

export interface CreateBooking {
  createBooking: CreateBooking_createBooking | null;
}

export interface CreateBookingVariables {
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
}
