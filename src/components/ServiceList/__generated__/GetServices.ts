/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServices
// ====================================================

export interface GetServices_getBranch_services_items_service {
  __typename: 'Service';
  description: string | null;
  duration: number;
  price: number;
  name: string;
  id: string;
}

export interface GetServices_getBranch_services_items {
  __typename: 'BranchServices';
  service: GetServices_getBranch_services_items_service | null;
}

export interface GetServices_getBranch_services {
  __typename: 'ModelBranchServicesConnection';
  items: (GetServices_getBranch_services_items | null)[] | null;
}

export interface GetServices_getBranch {
  __typename: 'Branch';
  services: GetServices_getBranch_services | null;
}

export interface GetServices {
  getBranch: GetServices_getBranch | null;
}

export interface GetServicesVariables {
  id: string;
}
