/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBranchServices
// ====================================================

export interface GetBranchServices_getBranch_services {
  __typename: "Service";
  id: string;
  name: string;
  duration: number;
  currency: string;
  price: number;
}

export interface GetBranchServices_getBranch {
  __typename: "Branch";
  services: GetBranchServices_getBranch_services[];
}

export interface GetBranchServices {
  getBranch: GetBranchServices_getBranch | null;
}

export interface GetBranchServicesVariables {
  id: string;
}
