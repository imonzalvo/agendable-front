/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBooking
// ====================================================

export interface GetBooking_getBooking_services {
  __typename: 'Service';
  id: string;
}

export interface GetBooking_getBooking {
  __typename: 'Booking';
  clientEmail: string | null;
  clientFamilyName: string | null;
  clientName: string | null;
  clientPhone: string | null;
  end: string;
  id: string;
  start: string;
  status: string;
  services: GetBooking_getBooking_services[];
}

export interface GetBooking {
  getBooking: GetBooking_getBooking | null;
}

export interface GetBookingVariables {
  id: string;
}
