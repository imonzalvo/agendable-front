/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServices
// ====================================================

export interface GetServices_getBranch_services {
  __typename: "Service";
  description: string;
  duration: number;
  price: number;
  name: string;
  id: string;
}

export interface GetServices_getBranch {
  __typename: "Branch";
  services: GetServices_getBranch_services[];
}

export interface GetServices {
  getBranch: GetServices_getBranch | null;
}

export interface GetServicesVariables {
  id: string;
}
