/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBranchServices
// ====================================================

export interface GetBranchServices_getBranch_services_items_service {
  __typename: 'Service';
  id: string;
  name: string;
  duration: number;
  currency: string | null;
  price: number;
}

export interface GetBranchServices_getBranch_services_items {
  __typename: 'BranchServices';
  service: GetBranchServices_getBranch_services_items_service | null;
}

export interface GetBranchServices_getBranch_services {
  __typename: 'ModelBranchServicesConnection';
  items: (GetBranchServices_getBranch_services_items | null)[] | null;
}

export interface GetBranchServices_getBranch {
  __typename: 'Branch';
  services: GetBranchServices_getBranch_services | null;
}

export interface GetBranchServices {
  getBranch: GetBranchServices_getBranch | null;
}

export interface GetBranchServicesVariables {
  id: string;
}
