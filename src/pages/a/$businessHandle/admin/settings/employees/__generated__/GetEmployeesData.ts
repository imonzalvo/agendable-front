/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEmployeesData
// ====================================================

export interface GetEmployeesData_getBusiness_branches {
  __typename: "Branch";
  id: string;
}

export interface GetEmployeesData_getBusiness_services {
  __typename: "Service";
  id: string;
}

export interface GetEmployeesData_getBusiness_employee_availability {
  __typename: "AvailabilityItem";
  id: string;
  day: string;
  from: string;
  to: string;
}

export interface GetEmployeesData_getBusiness_employee_services {
  __typename: "Service";
  id: string;
  name: string;
}

export interface GetEmployeesData_getBusiness_employee_vacations {
  __typename: "VacationsItem";
  id: string;
  from: string;
  to: string;
}

export interface GetEmployeesData_getBusiness_employee {
  __typename: "Employee";
  id: string;
  availability: GetEmployeesData_getBusiness_employee_availability[];
  givenName: string;
  familyName: string;
  phone: string | null;
  services: GetEmployeesData_getBusiness_employee_services[];
  vacations: GetEmployeesData_getBusiness_employee_vacations[];
}

export interface GetEmployeesData_getBusiness {
  __typename: "Business";
  branches: GetEmployeesData_getBusiness_branches[];
  services: GetEmployeesData_getBusiness_services[];
  employee: GetEmployeesData_getBusiness_employee[];
}

export interface GetEmployeesData {
  getBusiness: GetEmployeesData_getBusiness | null;
}

export interface GetEmployeesDataVariables {
  id: string;
}
