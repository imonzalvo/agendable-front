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

// TODO: Move it
export const SET_UP_BUSINESS = gql`
  mutation SetUpBusiness(
    $name: String!
    $email: String!
    $phone: String!
    $handle: String!
    $address: String!
    $description: String!
  ) {
    setUpBusiness(
      name: $name
      email: $email
      phone: $phone
      handle: $handle
      address: $address
      description: $description
    ) {
      id
      categories {
        id
      }
      branches {
        id
      }
    }
  }
`;

export const SET_UP_SERVICES = gql`
  mutation SetUpServices(
    $currency: String!
    $description: String!
    $duration: Int!
    $name: String!
    $price: Float!
  ) {
    setUpServices(
      currency: $currency
      description: $description
      duration: $duration
      name: $name
      price: $price
    ) {
      id
    }
  }
`;
