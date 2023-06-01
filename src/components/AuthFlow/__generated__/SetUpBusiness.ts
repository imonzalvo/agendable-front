/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetUpBusiness
// ====================================================

export interface SetUpBusiness_setUpBusiness_branches {
  __typename: "Branch";
  id: string;
  address: string;
}

export interface SetUpBusiness_setUpBusiness_landing {
  __typename: "LandingInfo";
  id: string;
  displayName: string;
  cta: string | null;
  description: string;
}

export interface SetUpBusiness_setUpBusiness_Configuration {
  __typename: "Configuration";
  scheduleMinutesSeparation: number;
  enableEmailsNotifications: boolean;
}

export interface SetUpBusiness_setUpBusiness {
  __typename: "Business";
  id: string;
  name: string;
  website: string | null;
  instagramUrl: string | null;
  facebookUrl: string | null;
  branches: SetUpBusiness_setUpBusiness_branches[];
  landing: SetUpBusiness_setUpBusiness_landing | null;
  Configuration: SetUpBusiness_setUpBusiness_Configuration | null;
}

export interface SetUpBusiness {
  setUpBusiness: SetUpBusiness_setUpBusiness | null;
}

export interface SetUpBusinessVariables {
  name: string;
  email: string;
  phone: string;
  handle: string;
  address: string;
  description: string;
}
