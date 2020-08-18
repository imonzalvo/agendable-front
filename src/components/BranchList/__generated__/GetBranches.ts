/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBranches
// ====================================================

export interface GetBranches_getBusiness_branches {
  __typename: "Branch";
  id: string;
  name: string;
  description: string;
}

export interface GetBranches_getBusiness {
  __typename: "Business";
  branches: GetBranches_getBusiness_branches[];
}

export interface GetBranches {
  getBusiness: GetBranches_getBusiness | null;
}

export interface GetBranchesVariables {
  id: string;
}
