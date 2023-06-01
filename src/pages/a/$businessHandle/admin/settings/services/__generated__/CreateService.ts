/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateService
// ====================================================

export interface CreateService_createService_employees {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
}

export interface CreateService_createService {
  __typename: "Service";
  id: string;
  name: string;
  duration: number;
  description: string;
  price: number;
  currency: string;
  employees: CreateService_createService_employees[];
}

export interface CreateService {
  createService: CreateService_createService | null;
}

export interface CreateServiceVariables {
  name: string;
  price: number;
  currency: string;
  duration: number;
  description: string;
  branchesId: string[];
  categoryId: string;
  employeesId: string[];
}
