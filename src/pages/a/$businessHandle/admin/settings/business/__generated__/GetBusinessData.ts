/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBusinessData
// ====================================================

export interface GetBusinessData_getBusiness {
  __typename: "Business";
  name: string;
  email: string;
  phone: string;
  handle: string;
}

export interface GetBusinessData {
  getBusiness: GetBusinessData_getBusiness | null;
}

export interface GetBusinessDataVariables {
  id: string;
}
