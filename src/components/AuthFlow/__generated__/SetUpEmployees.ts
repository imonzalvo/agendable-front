/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateEmployeesInputType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SetUpEmployees
// ====================================================

export interface SetUpEmployees_setUpEmployees_employees_availability {
  __typename: "AvailabilityItem";
  day: string;
  from: string;
  to: string;
}

export interface SetUpEmployees_setUpEmployees_employees {
  __typename: "Employee";
  id: string;
  givenName: string;
  familyName: string;
  phone: string | null;
  availability: SetUpEmployees_setUpEmployees_employees_availability[];
}

export interface SetUpEmployees_setUpEmployees {
  __typename: "EmployeeList";
  employees: (SetUpEmployees_setUpEmployees_employees | null)[] | null;
}

export interface SetUpEmployees {
  setUpEmployees: SetUpEmployees_setUpEmployees | null;
}

export interface SetUpEmployeesVariables {
  employeesData?: (CreateEmployeesInputType | null)[] | null;
}
