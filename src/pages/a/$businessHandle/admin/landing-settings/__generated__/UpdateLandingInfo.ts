/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateLandingInfo
// ====================================================

export interface UpdateLandingInfo_updateLandingInfo {
  __typename: "LandingInfo";
  id: string;
}

export interface UpdateLandingInfo {
  updateLandingInfo: UpdateLandingInfo_updateLandingInfo | null;
}

export interface UpdateLandingInfoVariables {
  id: string;
  cta?: string | null;
  displayName?: string | null;
  description?: string | null;
}
