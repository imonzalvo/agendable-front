/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetUpBusiness
// ====================================================

export interface SetUpBusiness_setUpBusiness_categories {
  __typename: "Category";
  id: string;
}

export interface SetUpBusiness_setUpBusiness_branches {
  __typename: "Branch";
  id: string;
}

export interface SetUpBusiness_setUpBusiness {
  __typename: "Business";
  id: string;
  categories: SetUpBusiness_setUpBusiness_categories[];
  branches: SetUpBusiness_setUpBusiness_branches[];
}

export interface SetUpBusiness {
  setUpBusiness: SetUpBusiness_setUpBusiness | null;
}

export interface SetUpBusinessVariables {
  name: string;
  email: string;
  phone: string;
  handle: string;
  address: string;
  description: string;
}
