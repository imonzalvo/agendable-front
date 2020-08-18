/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LOGIN
// ====================================================

export interface LOGIN_login_user {
  __typename: "User";
  name: string | null;
}

export interface LOGIN_login {
  __typename: "AuthPayload";
  user: LOGIN_login_user;
  token: string;
}

export interface LOGIN {
  login: LOGIN_login;
}

export interface LOGINVariables {
  email?: string | null;
  password?: string | null;
}
