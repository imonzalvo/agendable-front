/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBranchData
// ====================================================

export interface UpdateBranchData_updateBranch_services {
  __typename: "Service";
  id: string;
}

export interface UpdateBranchData_updateBranch {
  __typename: "Branch";
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string | null;
  services: UpdateBranchData_updateBranch_services[];
}

export interface UpdateBranchData {
  updateBranch: UpdateBranchData_updateBranch;
}

export interface UpdateBranchDataVariables {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  description?: string | null;
  image?: string | null;
  servicesId?: string[] | null;
}
