/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_BUSINESS_BY_HANDLE
// ====================================================

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches {
  __typename: "Branch";
  id: string;
  address: string;
}

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle {
  __typename: "Business";
  id: string;
  name: string;
  branches: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches[];
}

export interface GET_BUSINESS_BY_HANDLE {
  getBusinessByHandle: GET_BUSINESS_BY_HANDLE_getBusinessByHandle | null;
}

export interface GET_BUSINESS_BY_HANDLEVariables {
  handle: string;
}
