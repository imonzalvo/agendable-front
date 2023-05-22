import gql from 'graphql-tag';

export const GET_BUSINESS_SERVICES_DATA = gql`
  query GetBusinessServicesData($id: String!) {
    getBusiness(id: $id) {
      categories {
        id
      }
      branches {
        id
      }
      employee {
        id
      }
      services {
        id
        name
        duration
        description
        price
        currency
        employees {
          id
          givenName
          familyName
        }
      }
    }
  }
`;

export const UPDATE_SERVICE_DATA = gql`
  mutation UpdateServiceData(
    $id: String!
    $name: String
    $description: String
    $price: Float
    $duration: Int
  ) {
    __typename
    updateService(
      id: $id
      name: $name
      price: $price
      duration: $duration
      description: $description
    ) {
      id
      name
      duration
      description
      price
      currency
      employees {
        id
        givenName
        familyName
      }
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation CreateService(
    $name: String!
    $price: Float!
    $currency: String!
    $duration: Int!
    $description: String!
    $branchesId: [String!]!
    $categoryId: String!
    $employeesId: [String!]!
  ) {
    createService(
      name: $name
      price: $price
      currency: $currency
      duration: $duration
      description: $description
      branchesId: $branchesId
      categoryId: $categoryId
      employeesId: $employeesId
    ) {
      id
      name
      duration
      description
      price
      currency
      employees {
        id
        givenName
        familyName
      }
    }
  }
`;
