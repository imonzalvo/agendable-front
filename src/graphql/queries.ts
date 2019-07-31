// tslint:disable
// this is an auto generated file. This will be overwritten

export const getAvailabilityItem = `query GetAvailabilityItem($id: ID!) {
  getAvailabilityItem(id: $id) {
    id
    day
    from
    to
    employee {
      id
      givenName
      familyName
      user {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      phone
      services {
        nextToken
      }
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      branches {
        nextToken
      }
    }
  }
}
`;
export const listAvailabilityItems = `query ListAvailabilityItems(
  $filter: ModelAvailabilityItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listAvailabilityItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      day
      from
      to
      employee {
        id
        givenName
        familyName
        phone
      }
    }
    nextToken
  }
}
`;
export const getBooking = `query GetBooking($id: ID!) {
  getBooking(id: $id) {
    id
    createdAt
    start
    end
    status
    client {
      id
      givenName
      familyName
      userName
      email
      phone
      userType
      bookings {
        nextToken
      }
      businesses {
        nextToken
      }
    }
    branch {
      id
      address
      phone
      email
      name
      bookings {
        nextToken
      }
      services {
        nextToken
      }
      business {
        id
        name
        email
        phone
      }
      employees {
        nextToken
      }
    }
    service {
      id
      name
      price
      currency
      duration
      employees {
        nextToken
      }
      branch {
        nextToken
      }
      description
      bookings {
        nextToken
      }
    }
    employee {
      id
      givenName
      familyName
      user {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      phone
      services {
        nextToken
      }
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      branches {
        nextToken
      }
    }
  }
}
`;
export const listBookings = `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      start
      end
      status
      client {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      branch {
        id
        address
        phone
        email
        name
      }
      service {
        id
        name
        price
        currency
        duration
        description
      }
      employee {
        id
        givenName
        familyName
        phone
      }
    }
    nextToken
  }
}
`;
export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    givenName
    familyName
    user {
      id
      givenName
      familyName
      userName
      email
      phone
      userType
      bookings {
        nextToken
      }
      businesses {
        nextToken
      }
    }
    phone
    services {
      items {
        id
      }
      nextToken
    }
    availability {
      items {
        id
        day
        from
        to
      }
      nextToken
    }
    bookings {
      items {
        id
        createdAt
        start
        end
        status
      }
      nextToken
    }
    branches {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      givenName
      familyName
      user {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      phone
      services {
        nextToken
      }
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      branches {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEmployeeServices = `query GetEmployeeServices($id: ID!) {
  getEmployeeServices(id: $id) {
    id
    service {
      id
      name
      price
      currency
      duration
      employees {
        nextToken
      }
      branch {
        nextToken
      }
      description
      bookings {
        nextToken
      }
    }
    employee {
      id
      givenName
      familyName
      user {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      phone
      services {
        nextToken
      }
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      branches {
        nextToken
      }
    }
  }
}
`;
export const listEmployeeServicess = `query ListEmployeeServicess(
  $filter: ModelEmployeeServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployeeServicess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      service {
        id
        name
        price
        currency
        duration
        description
      }
      employee {
        id
        givenName
        familyName
        phone
      }
    }
    nextToken
  }
}
`;
export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
    id
    name
    price
    currency
    duration
    employees {
      items {
        id
      }
      nextToken
    }
    branch {
      items {
        id
      }
      nextToken
    }
    description
    bookings {
      items {
        id
        createdAt
        start
        end
        status
      }
      nextToken
    }
  }
}
`;
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      currency
      duration
      employees {
        nextToken
      }
      branch {
        nextToken
      }
      description
      bookings {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBranch = `query GetBranch($id: ID!) {
  getBranch(id: $id) {
    id
    address
    phone
    email
    name
    bookings {
      items {
        id
        createdAt
        start
        end
        status
      }
      nextToken
    }
    services {
      items {
        id
      }
      nextToken
    }
    business {
      id
      name
      email
      phone
      owners {
        nextToken
      }
      branches {
        nextToken
      }
    }
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listBranchs = `query ListBranchs(
  $filter: ModelBranchFilterInput
  $limit: Int
  $nextToken: String
) {
  listBranchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      address
      phone
      email
      name
      bookings {
        nextToken
      }
      services {
        nextToken
      }
      business {
        id
        name
        email
        phone
      }
      employees {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBranchEmployees = `query GetBranchEmployees($id: ID!) {
  getBranchEmployees(id: $id) {
    id
    branch {
      id
      address
      phone
      email
      name
      bookings {
        nextToken
      }
      services {
        nextToken
      }
      business {
        id
        name
        email
        phone
      }
      employees {
        nextToken
      }
    }
    employee {
      id
      givenName
      familyName
      user {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      phone
      services {
        nextToken
      }
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      branches {
        nextToken
      }
    }
  }
}
`;
export const listBranchEmployeess = `query ListBranchEmployeess(
  $filter: ModelBranchEmployeesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBranchEmployeess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      branch {
        id
        address
        phone
        email
        name
      }
      employee {
        id
        givenName
        familyName
        phone
      }
    }
    nextToken
  }
}
`;
export const getBranchServices = `query GetBranchServices($id: ID!) {
  getBranchServices(id: $id) {
    id
    branch {
      id
      address
      phone
      email
      name
      bookings {
        nextToken
      }
      services {
        nextToken
      }
      business {
        id
        name
        email
        phone
      }
      employees {
        nextToken
      }
    }
    service {
      id
      name
      price
      currency
      duration
      employees {
        nextToken
      }
      branch {
        nextToken
      }
      description
      bookings {
        nextToken
      }
    }
  }
}
`;
export const listBranchServicess = `query ListBranchServicess(
  $filter: ModelBranchServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBranchServicess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      branch {
        id
        address
        phone
        email
        name
      }
      service {
        id
        name
        price
        currency
        duration
        description
      }
    }
    nextToken
  }
}
`;
export const getBusiness = `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    name
    email
    phone
    owners {
      items {
        id
      }
      nextToken
    }
    branches {
      items {
        id
        address
        phone
        email
        name
      }
      nextToken
    }
  }
}
`;
export const listBusinesss = `query ListBusinesss(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phone
      owners {
        nextToken
      }
      branches {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUserBusinesses = `query GetUserBusinesses($id: ID!) {
  getUserBusinesses(id: $id) {
    id
    owner {
      id
      givenName
      familyName
      userName
      email
      phone
      userType
      bookings {
        nextToken
      }
      businesses {
        nextToken
      }
    }
    business {
      id
      name
      email
      phone
      owners {
        nextToken
      }
      branches {
        nextToken
      }
    }
  }
}
`;
export const listUserBusinessess = `query ListUserBusinessess(
  $filter: ModelUserBusinessesFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBusinessess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
      }
      business {
        id
        name
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    givenName
    familyName
    userName
    email
    phone
    userType
    bookings {
      items {
        id
        createdAt
        start
        end
        status
      }
      nextToken
    }
    businesses {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      givenName
      familyName
      userName
      email
      phone
      userType
      bookings {
        nextToken
      }
      businesses {
        nextToken
      }
    }
    nextToken
  }
}
`;
