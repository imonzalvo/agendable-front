/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Day } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetBranchEmployees
// ====================================================

export interface GetBranchEmployees_getBranch_employees_services {
  __typename: "Service";
  id: string;
}

export interface GetBranchEmployees_getBranch_employees_availability {
  __typename: "AvailabilityItem";
  day: Day;
  from: string;
  to: string;
}

export interface GetBranchEmployees_getBranch_employees {
  __typename: "Employee";
  id: string;
  familyName: string;
  givenName: string;
  services: GetBranchEmployees_getBranch_employees_services[];
  availability: GetBranchEmployees_getBranch_employees_availability[];
}

export interface GetBranchEmployees_getBranch {
  __typename: "Branch";
  employees: GetBranchEmployees_getBranch_employees[];
}

export interface GetBranchEmployees {
  getBranch: GetBranchEmployees_getBranch | null;
}

export interface GetBranchEmployeesVariables {
  id: string;
}
