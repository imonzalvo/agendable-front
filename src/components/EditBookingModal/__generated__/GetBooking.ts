/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BookingStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetBooking
// ====================================================

export interface GetBooking_getBooking_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface GetBooking_getBooking_services_items {
  __typename: 'BookingServices';
  service: GetBooking_getBooking_services_items_service | null;
  id: string;
}

export interface GetBooking_getBooking_services {
  __typename: 'ModelBookingServicesConnection';
  items: (GetBooking_getBooking_services_items | null)[] | null;
}

export interface GetBooking_getBooking {
  __typename: 'Booking';
  clientEmail: any | null;
  clientFamilyName: string | null;
  clientName: string | null;
  clientPhone: any | null;
  end: any;
  id: string;
  start: any;
  status: BookingStatus;
  services: GetBooking_getBooking_services | null;
}

export interface GetBooking {
  getBooking: GetBooking_getBooking | null;
}

export interface GetBookingVariables {
  id: string;
}
