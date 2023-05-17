/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLandingData
// ====================================================

export interface GetLandingData_getBusiness_landing {
  __typename: 'LandingInfo';
  id: string;
  cta: string | null;
  description: string;
  displayName: string;
}

export interface GetLandingData_getBusiness {
  __typename: 'Business';
  landing: GetLandingData_getBusiness_landing | null;
}

export interface GetLandingData {
  getBusiness: GetLandingData_getBusiness | null;
}

export interface GetLandingDataVariables {
  id: string;
}
