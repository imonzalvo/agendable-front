import gql from 'graphql-tag';

export const GET_EMPLOYEES_DATA = gql`
  query GetEmployeesData($id: String!) {
    getBusiness(id: $id) {
      branches {
        id
      }
      services {
        id
      }
      employee {
        id
        availability {
          id
          day
          from
          to
        }
        givenName
        familyName
        phone
        services {
          id
          name
        }
        vacations {
          id
          from
          to
        }
      }
    }
  }
`;

export const UPDATE_EMPLOYEE_DATA = gql`
  mutation UpdateEmployeeData(
    $id: ID!
    $givenName: String
    $familyName: String
    $phone: String
    $availabilityItems: [AvailabilityItemEmployeeInputType]
  ) {
    __typename
    updateEmployee(
      id: $id
      givenName: $givenName
      familyName: $familyName
      phone: $phone
      availabilityItems: $availabilityItems
    ) {
      id
      availability {
        id
        day
        from
        to
      }
      givenName
      familyName
      phone
      services {
        id
        name
      }
      vacations {
        id
        from
        to
      }
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $givenName: String!
    $familyName: String!
    $phone: String!
    $branchesId: [String!]!
    $servicesId: [String!]!
    $businessId: String!
    $availabilityItems: [AvailabilityItemEmployeeInputType]
  ) {
    createEmployee(
      givenName: $givenName
      familyName: $familyName
      phone: $phone
      branchesId: $branchesId
      servicesId: $servicesId
      businessId: $businessId
      availabilityItems: $availabilityItems
    ) {
      id
      availability {
        id
        day
        from
        to
      }
      givenName
      familyName
      phone
      services {
        id
        name
      }
      vacations {
        id
        from
        to
      }
    }
  }
`;
