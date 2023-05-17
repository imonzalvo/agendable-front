/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_BUSINESS_BY_HANDLE
// ====================================================

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches {
  __typename: 'Branch';
  id: string;
  address: string;
}

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing_images {
  __typename: 'BusinessImage';
  id: string;
  url: string;
}

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing {
  __typename: 'LandingInfo';
  id: string;
  displayName: string;
  cta: string | null;
  description: string;
  logoUrl: string | null;
  images: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing_images[];
}

export interface GET_BUSINESS_BY_HANDLE_getBusinessByHandle {
  __typename: 'Business';
  id: string;
  name: string;
  website: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  branches: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches[];
  landing: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing | null;
}

export interface GET_BUSINESS_BY_HANDLE {
  getBusinessByHandle: GET_BUSINESS_BY_HANDLE_getBusinessByHandle | null;
}

export interface GET_BUSINESS_BY_HANDLEVariables {
  handle: string;
}
