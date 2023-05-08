import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation SIGN_UP(
    $email: String
    $password: String
    $name: String
    $givenName: String
    $familyName: String
    $userName: String
    $userType: String
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      givenName: $givenName
      familyName: $familyName
      userName: $userName
      userType: $userType
    ) {
      token
      user {
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String, $password: String) {
    login(email: $email, password: $password) {
      user {
        name
      }
      token
    }
  }
`;

export const CONFIRM_USER = gql`
  mutation CONFIRM_USER($email: String, $verifyToken: String) {
    confirmUser(email: $email, verifyToken: $verifyToken) {
      token
      user {
        email
      }
    }
  }
`;
