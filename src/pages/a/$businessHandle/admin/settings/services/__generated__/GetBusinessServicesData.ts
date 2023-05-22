/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBusinessServicesData
// ====================================================

export interface GetBusinessServicesData_getBusiness_categories {
  __typename: 'Category';
  id: string;
}

export interface GetBusinessServicesData_getBusiness_branches {
  __typename: 'Branch';
  id: string;
}

export interface GetBusinessServicesData_getBusiness_employee {
  __typename: 'Employee';
  id: string;
}

export interface GetBusinessServicesData_getBusiness_services_employees {
  __typename: 'Employee';
  id: string;
  givenName: string;
  familyName: string;
}

export interface GetBusinessServicesData_getBusiness_services {
  __typename: 'Service';
  id: string;
  name: string;
  duration: number;
  description: string;
  price: number;
  currency: string;
  employees: GetBusinessServicesData_getBusiness_services_employees[];
}

export interface GetBusinessServicesData_getBusiness {
  __typename: 'Business';
  categories: GetBusinessServicesData_getBusiness_categories[];
  branches: GetBusinessServicesData_getBusiness_branches[];
  employee: GetBusinessServicesData_getBusiness_employee[];
  services: GetBusinessServicesData_getBusiness_services[];
}

export interface GetBusinessServicesData {
  getBusiness: GetBusinessServicesData_getBusiness | null;
}

export interface GetBusinessServicesDataVariables {
  id: string;
}
