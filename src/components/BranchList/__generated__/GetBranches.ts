/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBranches
// ====================================================

export interface GetBranches_getBusiness_branches_items {
  __typename: 'Branch';
  id: string;
  name: string;
}

export interface GetBranches_getBusiness_branches {
  __typename: 'ModelBranchConnection';
  items: (GetBranches_getBusiness_branches_items | null)[] | null;
}

export interface GetBranches_getBusiness {
  __typename: 'Business';
  branches: GetBranches_getBusiness_branches | null;
}

export interface GetBranches {
  getBusiness: GetBranches_getBusiness | null;
}

export interface GetBranchesVariables {
  id: string;
}
