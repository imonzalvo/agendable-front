/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteEmployee
// ====================================================

export interface DeleteEmployee_deleteEmployee {
  __typename: "Employee";
  id: string;
}

export interface DeleteEmployee {
  deleteEmployee: DeleteEmployee_deleteEmployee | null;
}

export interface DeleteEmployeeVariables {
  id: string;
}
