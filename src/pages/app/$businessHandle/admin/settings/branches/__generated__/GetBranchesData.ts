/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBranchesData
// ====================================================

export interface GetBranchesData_getBusiness_branches {
  __typename: "Branch";
  id: string;
  address: string;
  phone: string;
  email: string;
  name: string;
  description: string;
  image: string | null;
}

export interface GetBranchesData_getBusiness {
  __typename: "Business";
  branches: GetBranchesData_getBusiness_branches[];
}

export interface GetBranchesData {
  getBusiness: GetBranchesData_getBusiness | null;
}

export interface GetBranchesDataVariables {
  id: string;
}
