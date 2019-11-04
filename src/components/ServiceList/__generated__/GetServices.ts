/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServices
// ====================================================

export interface GetServices_getBusiness_branches_items {
  __typename: 'Branch';
  id: string;
  name: string;
}

export interface GetServices_getBusiness_branches {
  __typename: 'ModelBranchConnection';
  items: (GetServices_getBusiness_branches_items | null)[] | null;
}

export interface GetServices_getBusiness {
  __typename: 'Business';
  branches: GetServices_getBusiness_branches | null;
}

export interface GetServices {
  getBusiness: GetServices_getBusiness | null;
}

export interface GetServicesVariables {
  id: string;
}
