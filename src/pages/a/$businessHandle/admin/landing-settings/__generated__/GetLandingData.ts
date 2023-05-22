/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLandingData
// ====================================================

export interface GetLandingData_getBusiness_landing_images {
  __typename: 'BusinessImage';
  id: string;
  url: string;
}

export interface GetLandingData_getBusiness_landing {
  __typename: 'LandingInfo';
  id: string;
  cta: string | null;
  description: string;
  displayName: string;
  logoUrl: string | null;
  images: GetLandingData_getBusiness_landing_images[];
}

export interface GetLandingData_getBusiness {
  __typename: 'Business';
  handle: string;
  landing: GetLandingData_getBusiness_landing | null;
}

export interface GetLandingData {
  getBusiness: GetLandingData_getBusiness | null;
}

export interface GetLandingDataVariables {
  id: string;
}
