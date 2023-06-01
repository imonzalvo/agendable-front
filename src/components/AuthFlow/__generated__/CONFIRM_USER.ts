/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CONFIRM_USER
// ====================================================

export interface CONFIRM_USER_confirmUser_user {
  __typename: "User";
  email: string;
}

export interface CONFIRM_USER_confirmUser {
  __typename: "AuthPayload";
  token: string | null;
  user: CONFIRM_USER_confirmUser_user | null;
}

export interface CONFIRM_USER {
  confirmUser: CONFIRM_USER_confirmUser | null;
}

export interface CONFIRM_USERVariables {
  email?: string | null;
  verifyToken?: string | null;
}
