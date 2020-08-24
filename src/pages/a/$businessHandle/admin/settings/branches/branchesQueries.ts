import gql from 'graphql-tag';

export const GET_BRANCHES_DATA = gql`
  query GetBranchesData($id: String!) {
    getBusiness(id: $id) {
      branches {
        id
        address
        phone
        email
        name
        description
        image
      }
    }
  }
`;

export const UPDATE_BRANCH_DATA = gql`
  mutation UpdateBranchData(
    $id: ID!
    $name: String
    $email: String
    $phone: String
    $address: String
    $description: String
    $image: String
  ) {
    __typename
    updateBranch(
      id: $id
      name: $name
      email: $email
      phone: $phone
      address: $address
      description: $description
      image: $image
    ) {
      id
      name
      email
      phone
      address
      description
      image
    }
  }
`;

export const CREATE_BRANCH = gql`
  mutation CreateBranch(
    $name: String!
    $email: String!
    $phone: String!
    $address: String!
    $description: String!
    $image: String
  ) {
    createBranch(
      name: $name
      email: $email
      phone: $phone
      address: $address
      description: $description
      image: $image
    ) {
      name
      email
      phone
      address
      description
      image
    }
  }
`;
