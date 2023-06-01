/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBranch
// ====================================================

export interface CreateBranch_createBranch {
  __typename: "Branch";
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string | null;
}

export interface CreateBranch {
  createBranch: CreateBranch_createBranch | null;
}

export interface CreateBranchVariables {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image?: string | null;
}
