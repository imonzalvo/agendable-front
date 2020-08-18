/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SIGN_UP
// ====================================================

export interface SIGN_UP_signup_user {
  __typename: "User";
  email: string;
}

export interface SIGN_UP_signup {
  __typename: "AuthPayload";
  token: string;
  user: SIGN_UP_signup_user;
}

export interface SIGN_UP {
  signup: SIGN_UP_signup;
}

export interface SIGN_UPVariables {
  email?: string | null;
  password?: string | null;
  name?: string | null;
  givenName?: string | null;
  familyName?: string | null;
  userName?: string | null;
  userType?: string | null;
}
