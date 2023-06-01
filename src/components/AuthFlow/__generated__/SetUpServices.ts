/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateServicesInputType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SetUpServices
// ====================================================

export interface SetUpServices_setUpServices_services {
  __typename: "Service";
  id: string;
  description: string;
  duration: number;
  name: string;
  price: number;
}

export interface SetUpServices_setUpServices {
  __typename: "ServiceList";
  services: (SetUpServices_setUpServices_services | null)[] | null;
}

export interface SetUpServices {
  setUpServices: SetUpServices_setUpServices | null;
}

export interface SetUpServicesVariables {
  data?: (CreateServicesInputType | null)[] | null;
}
