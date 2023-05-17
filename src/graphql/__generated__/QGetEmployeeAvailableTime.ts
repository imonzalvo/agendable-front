/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetEmployeeAvailableTime
// ====================================================

export interface QGetEmployeeAvailableTime_getEmployeeAvailableTime {
  __typename: 'EmployeeAvailableTime';
  from: string | null;
  to: string | null;
}

export interface QGetEmployeeAvailableTime {
  getEmployeeAvailableTime: (QGetEmployeeAvailableTime_getEmployeeAvailableTime | null)[] | null;
}

export interface QGetEmployeeAvailableTimeVariables {
  id: string;
  duration: number;
  date: string;
}
