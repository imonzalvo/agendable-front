/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailabilityItemEmployeeInputType } from './../../../../../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CreateEmployee
// ====================================================

export interface CreateEmployee_createEmployee_availability {
  __typename: 'AvailabilityItem';
  id: string;
  day: string;
  from: string;
  to: string;
}

export interface CreateEmployee_createEmployee_services {
  __typename: 'Service';
  id: string;
  name: string;
}

export interface CreateEmployee_createEmployee_vacations {
  __typename: 'VacationsItem';
  id: string;
  from: string;
  to: string;
}

export interface CreateEmployee_createEmployee {
  __typename: 'Employee';
  id: string;
  availability: CreateEmployee_createEmployee_availability[];
  givenName: string;
  familyName: string;
  phone: string | null;
  services: CreateEmployee_createEmployee_services[];
  vacations: CreateEmployee_createEmployee_vacations[];
}

export interface CreateEmployee {
  createEmployee: CreateEmployee_createEmployee | null;
}

export interface CreateEmployeeVariables {
  givenName: string;
  familyName: string;
  phone: string;
  branchesId: string[];
  servicesId: string[];
  businessId: string;
  availabilityItems?: (AvailabilityItemEmployeeInputType | null)[] | null;
}
