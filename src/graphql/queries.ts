// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEmployeeAvailableTime = `query GetEmployeeAvailableTime($id: ID, $date: String, $duration: Int) {
  getEmployeeAvailableTime(id: $id, date: $date, duration: $duration)
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
    business {
      id
      name
      email
      phone
      owners {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
        owner
      }
      handle
      branches {
        nextToken
      }
    }
    bookings {
      items {
        id
        createdAt
        start
        end
        status
        clientEmail
        clientPhone
        clientName
        clientFamilyName
      }
      nextToken
    }
    owner
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
      business {
        id
        name
        email
        phone
        handle
      }
      bookings {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
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
        owner
      }
      phone
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      services {
        nextToken
      }
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
export const getBookingServices = `query GetBookingServices($id: ID!) {
  getBookingServices(id: $id) {
    id
    booking {
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
        owner
      }
      clientEmail
      clientPhone
      clientName
      clientFamilyName
      services {
        nextToken
      }
      employee {
        id
        givenName
        familyName
        phone
      }
      branch {
        id
        address
        phone
        email
        name
        description
        image
      }
    }
    service {
      id
      name
      price
      currency
      duration
      description
      bookings {
        nextToken
      }
      employees {
        nextToken
      }
      branch {
        nextToken
      }
    }
  }
}
`;
export const listBookingServicess = `query ListBookingServicess(
  $filter: ModelBookingServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookingServicess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      booking {
        id
        createdAt
        start
        end
        status
        clientEmail
        clientPhone
        clientName
        clientFamilyName
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
      business {
        id
        name
        email
        phone
        handle
      }
      bookings {
        nextToken
      }
      owner
    }
    clientEmail
    clientPhone
    clientName
    clientFamilyName
    services {
      items {
        id
      }
      nextToken
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
        owner
      }
      phone
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      services {
        nextToken
      }
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
    branch {
      id
      address
      phone
      email
      name
      description
      image
      bookings {
        nextToken
      }
      employees {
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
        handle
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
        owner
      }
      clientEmail
      clientPhone
      clientName
      clientFamilyName
      services {
        nextToken
      }
      employee {
        id
        givenName
        familyName
        phone
      }
      branch {
        id
        address
        phone
        email
        name
        description
        image
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
      business {
        id
        name
        email
        phone
        handle
      }
      bookings {
        nextToken
      }
      owner
    }
    phone
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
        clientEmail
        clientPhone
        clientName
        clientFamilyName
      }
      nextToken
    }
    services {
      items {
        id
      }
      nextToken
    }
    branches {
      id
      address
      phone
      email
      name
      description
      image
      bookings {
        nextToken
      }
      employees {
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
        handle
      }
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
        owner
      }
      phone
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      services {
        nextToken
      }
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
    nextToken
  }
}
`;
export const getEmployeeServices = `query GetEmployeeServices($id: ID!) {
  getEmployeeServices(id: $id) {
    id
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
        owner
      }
      phone
      availability {
        nextToken
      }
      bookings {
        nextToken
      }
      services {
        nextToken
      }
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
    service {
      id
      name
      price
      currency
      duration
      description
      bookings {
        nextToken
      }
      employees {
        nextToken
      }
      branch {
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
      employee {
        id
        givenName
        familyName
        phone
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
      description
      bookings {
        nextToken
      }
      employees {
        nextToken
      }
      branch {
        nextToken
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
    description
    bookings {
      items {
        id
      }
      nextToken
    }
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
    description
    image
    bookings {
      items {
        id
        createdAt
        start
        end
        status
        clientEmail
        clientPhone
        clientName
        clientFamilyName
      }
      nextToken
    }
    employees {
      items {
        id
        givenName
        familyName
        phone
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
        id
        givenName
        familyName
        userName
        email
        phone
        userType
        owner
      }
      handle
      branches {
        nextToken
      }
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
      description
      image
      bookings {
        nextToken
      }
      employees {
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
        handle
      }
    }
    nextToken
  }
}
`;
export const getBranchServices = `query GetBranchServices($id: ID!) {
  getBranchServices(id: $id) {
    id
    service {
      id
      name
      price
      currency
      duration
      description
      bookings {
        nextToken
      }
      employees {
        nextToken
      }
      branch {
        nextToken
      }
    }
    branch {
      id
      address
      phone
      email
      name
      description
      image
      bookings {
        nextToken
      }
      employees {
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
        handle
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
      service {
        id
        name
        price
        currency
        duration
        description
      }
      branch {
        id
        address
        phone
        email
        name
        description
        image
      }
    }
    nextToken
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
        id
        givenName
        familyName
        userName
        email
        phone
        userType
        owner
      }
      handle
      branches {
        nextToken
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
      id
      givenName
      familyName
      userName
      email
      phone
      userType
      business {
        id
        name
        email
        phone
        handle
      }
      bookings {
        nextToken
      }
      owner
    }
    handle
    branches {
      items {
        id
        address
        phone
        email
        name
        description
        image
      }
      nextToken
    }
  }
}
`;
export const businessByHandle = `query BusinessByHandle(
  $handle: String
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  businessByHandle(
    handle: $handle
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      phone
      owners {
        id
        givenName
        familyName
        userName
        email
        phone
        userType
        owner
      }
      handle
      branches {
        nextToken
      }
    }
    nextToken
  }
}
`;
