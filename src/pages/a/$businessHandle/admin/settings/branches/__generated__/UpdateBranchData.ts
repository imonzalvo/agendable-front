/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBranchData
// ====================================================

export interface UpdateBranchData_updateBranch {
  __typename: 'Branch';
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string | null;
}

export interface UpdateBranchData {
  updateBranch: UpdateBranchData_updateBranch | null;
}

export interface UpdateBranchDataVariables {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
}
