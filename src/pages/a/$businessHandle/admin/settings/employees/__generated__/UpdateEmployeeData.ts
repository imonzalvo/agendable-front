/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailabilityItemEmployeeInputType } from './../../../../../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateEmployeeData
// ====================================================

export interface UpdateEmployeeData_updateEmployee_availability {
  __typename: 'AvailabilityItem';
  id: string;
  day: string;
  from: string;
  to: string;
}

export interface UpdateEmployeeData_updateEmployee_services {
  __typename: 'Service';
  id: string;
  name: string;
}

export interface UpdateEmployeeData_updateEmployee_vacations {
  __typename: 'VacationsItem';
  id: string;
  from: string;
  to: string;
}

export interface UpdateEmployeeData_updateEmployee {
  __typename: 'Employee';
  id: string;
  availability: UpdateEmployeeData_updateEmployee_availability[];
  givenName: string;
  familyName: string;
  phone: string | null;
  services: UpdateEmployeeData_updateEmployee_services[];
  vacations: UpdateEmployeeData_updateEmployee_vacations[];
}

export interface UpdateEmployeeData {
  updateEmployee: UpdateEmployeeData_updateEmployee | null;
}

export interface UpdateEmployeeDataVariables {
  id: string;
  givenName?: string | null;
  familyName?: string | null;
  phone?: string | null;
  availabilityItems?: AvailabilityItemEmployeeInputType | null;
}
