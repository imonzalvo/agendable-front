/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServicesData
// ====================================================

export interface GetServicesData_getBranch_services_branches {
  __typename: 'Branch';
  id: string;
}

export interface GetServicesData_getBranch_services_employees {
  __typename: 'Employee';
  id: string;
}

export interface GetServicesData_getBranch_services_category {
  __typename: 'Category';
  id: string;
  name: string;
}

export interface GetServicesData_getBranch_services {
  __typename: 'Service';
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: number;
  branches: GetServicesData_getBranch_services_branches[];
  description: string;
  employees: GetServicesData_getBranch_services_employees[];
  category: GetServicesData_getBranch_services_category | null;
}

export interface GetServicesData_getBranch {
  __typename: 'Branch';
  services: GetServicesData_getBranch_services[];
}

export interface GetServicesData {
  getBranch: GetServicesData_getBranch | null;
}

export interface GetServicesDataVariables {
  id: string;
}
