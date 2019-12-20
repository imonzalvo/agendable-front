/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfessionals
// ====================================================

export interface GetProfessionals_getService_employees_items_employee {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface GetProfessionals_getService_employees_items {
  __typename: 'EmployeeServices';
  employee: GetProfessionals_getService_employees_items_employee | null;
}

export interface GetProfessionals_getService_employees {
  __typename: 'ModelEmployeeServicesConnection';
  items: (GetProfessionals_getService_employees_items | null)[] | null;
}

export interface GetProfessionals_getService {
  __typename: 'Service';
  name: string;
  employees: GetProfessionals_getService_employees | null;
}

export interface GetProfessionals {
  getService: GetProfessionals_getService | null;
}

export interface GetProfessionalsVariables {
  id: string;
}
