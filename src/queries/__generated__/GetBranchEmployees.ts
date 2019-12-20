/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Day } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetBranchEmployees
// ====================================================

export interface GetBranchEmployees_getBranch_employees_items_services_items_service {
  __typename: 'Service';
  id: string;
}

export interface GetBranchEmployees_getBranch_employees_items_services_items {
  __typename: 'EmployeeServices';
  service: GetBranchEmployees_getBranch_employees_items_services_items_service | null;
}

export interface GetBranchEmployees_getBranch_employees_items_services {
  __typename: 'ModelEmployeeServicesConnection';
  items: (GetBranchEmployees_getBranch_employees_items_services_items | null)[] | null;
}

export interface GetBranchEmployees_getBranch_employees_items_availability_items {
  __typename: 'AvailabilityItem';
  day: Day | null;
  from: string;
  to: string;
}

export interface GetBranchEmployees_getBranch_employees_items_availability {
  __typename: 'ModelAvailabilityItemConnection';
  items: (GetBranchEmployees_getBranch_employees_items_availability_items | null)[] | null;
}

export interface GetBranchEmployees_getBranch_employees_items {
  __typename: 'Employee';
  id: string;
  familyName: string;
  givenName: string;
  services: GetBranchEmployees_getBranch_employees_items_services | null;
  availability: GetBranchEmployees_getBranch_employees_items_availability | null;
}

export interface GetBranchEmployees_getBranch_employees {
  __typename: 'ModelEmployeeConnection';
  items: (GetBranchEmployees_getBranch_employees_items | null)[] | null;
}

export interface GetBranchEmployees_getBranch {
  __typename: 'Branch';
  employees: GetBranchEmployees_getBranch_employees | null;
}

export interface GetBranchEmployees {
  getBranch: GetBranchEmployees_getBranch | null;
}

export interface GetBranchEmployeesVariables {
  id: string;
}
