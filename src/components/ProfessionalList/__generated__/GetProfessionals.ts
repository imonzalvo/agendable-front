/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfessionals
// ====================================================

export interface GetProfessionals_getService_employees {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface GetProfessionals_getService {
  __typename: "Service";
  name: string;
  employees: GetProfessionals_getService_employees[];
}

export interface GetProfessionals {
  getService: GetProfessionals_getService | null;
}

export interface GetProfessionalsVariables {
  id: string;
}
