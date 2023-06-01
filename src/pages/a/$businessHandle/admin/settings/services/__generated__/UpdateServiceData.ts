/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateServiceData
// ====================================================

export interface UpdateServiceData_updateService_employees {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface UpdateServiceData_updateService {
  __typename: "Service";
  id: string;
  name: string;
  duration: number;
  description: string;
  price: number;
  currency: string;
  employees: UpdateServiceData_updateService_employees[];
}

export interface UpdateServiceData {
  updateService: UpdateServiceData_updateService | null;
}

export interface UpdateServiceDataVariables {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  duration?: number | null;
}
