/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBusinessByHandle
// ====================================================

export interface GetBusinessByHandle_businessByHandle_items_branches_items {
  __typename: 'Branch';
  id: string;
  address: string;
}

export interface GetBusinessByHandle_businessByHandle_items_branches {
  __typename: 'ModelBranchConnection';
  items: (GetBusinessByHandle_businessByHandle_items_branches_items | null)[] | null;
}

export interface GetBusinessByHandle_businessByHandle_items {
  __typename: 'Business';
  id: string;
  name: string;
  branches: GetBusinessByHandle_businessByHandle_items_branches | null;
}

export interface GetBusinessByHandle_businessByHandle {
  __typename: 'ModelBusinessConnection';
  items: (GetBusinessByHandle_businessByHandle_items | null)[] | null;
}

export interface GetBusinessByHandle {
  businessByHandle: GetBusinessByHandle_businessByHandle | null;
}

export interface GetBusinessByHandleVariables {
  handle: string;
}
