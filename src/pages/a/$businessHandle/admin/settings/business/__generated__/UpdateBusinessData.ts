/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBusinessData
// ====================================================

export interface UpdateBusinessData_updateBusiness {
  __typename: 'Business';
  email: string;
  handle: string;
  id: string;
  name: string;
  phone: string;
  website: string | null;
  facebookUrl: string | null;
  instagramUrl: string | null;
}

export interface UpdateBusinessData {
  updateBusiness: UpdateBusinessData_updateBusiness | null;
}

export interface UpdateBusinessDataVariables {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  handle?: string | null;
  website?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
}
