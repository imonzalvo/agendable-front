// tslint:disable
// this is an auto generated file. This will be overwritten

export const createAvailabilityItem = `mutation CreateAvailabilityItem($input: CreateAvailabilityItemInput!) {
  createAvailabilityItem(input: $input) {
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
export const updateAvailabilityItem = `mutation UpdateAvailabilityItem($input: UpdateAvailabilityItemInput!) {
  updateAvailabilityItem(input: $input) {
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
export const deleteAvailabilityItem = `mutation DeleteAvailabilityItem($input: DeleteAvailabilityItemInput!) {
  deleteAvailabilityItem(input: $input) {
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
export const createBooking = `mutation CreateBooking($input: CreateBookingInput!) {
  createBooking(input: $input) {
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
export const updateBooking = `mutation UpdateBooking($input: UpdateBookingInput!) {
  updateBooking(input: $input) {
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
export const deleteBooking = `mutation DeleteBooking($input: DeleteBookingInput!) {
  deleteBooking(input: $input) {
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
export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
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
        serviceId
        employeeId
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
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
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
        serviceId
        employeeId
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
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
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
        serviceId
        employeeId
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
export const createEmployeeServicess = `mutation CreateEmployeeServicess($input: CreateEmployeeServicessInput!) {
  createEmployeeServicess(input: $input) {
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
    serviceId
    employeeId
  }
}
`;
export const updateEmployeeServicess = `mutation UpdateEmployeeServicess($input: UpdateEmployeeServicessInput!) {
  updateEmployeeServicess(input: $input) {
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
    serviceId
    employeeId
  }
}
`;
export const deleteEmployeeServicess = `mutation DeleteEmployeeServicess($input: DeleteEmployeeServicessInput!) {
  deleteEmployeeServicess(input: $input) {
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
    serviceId
    employeeId
  }
}
`;
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    name
    price
    currency
    duration
    employees {
      items {
        id
        serviceId
        employeeId
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
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
    id
    name
    price
    currency
    duration
    employees {
      items {
        id
        serviceId
        employeeId
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
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
    id
    name
    price
    currency
    duration
    employees {
      items {
        id
        serviceId
        employeeId
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
export const createBranch = `mutation CreateBranch($input: CreateBranchInput!) {
  createBranch(input: $input) {
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
export const updateBranch = `mutation UpdateBranch($input: UpdateBranchInput!) {
  updateBranch(input: $input) {
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
export const deleteBranch = `mutation DeleteBranch($input: DeleteBranchInput!) {
  deleteBranch(input: $input) {
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
export const createBranchEmployees = `mutation CreateBranchEmployees($input: CreateBranchEmployeesInput!) {
  createBranchEmployees(input: $input) {
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
export const updateBranchEmployees = `mutation UpdateBranchEmployees($input: UpdateBranchEmployeesInput!) {
  updateBranchEmployees(input: $input) {
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
export const deleteBranchEmployees = `mutation DeleteBranchEmployees($input: DeleteBranchEmployeesInput!) {
  deleteBranchEmployees(input: $input) {
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
export const createBranchServices = `mutation CreateBranchServices($input: CreateBranchServicesInput!) {
  createBranchServices(input: $input) {
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
export const updateBranchServices = `mutation UpdateBranchServices($input: UpdateBranchServicesInput!) {
  updateBranchServices(input: $input) {
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
export const deleteBranchServices = `mutation DeleteBranchServices($input: DeleteBranchServicesInput!) {
  deleteBranchServices(input: $input) {
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
export const createBusiness = `mutation CreateBusiness($input: CreateBusinessInput!) {
  createBusiness(input: $input) {
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
export const updateBusiness = `mutation UpdateBusiness($input: UpdateBusinessInput!) {
  updateBusiness(input: $input) {
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
export const deleteBusiness = `mutation DeleteBusiness($input: DeleteBusinessInput!) {
  deleteBusiness(input: $input) {
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
export const createUserBusinesses = `mutation CreateUserBusinesses($input: CreateUserBusinessesInput!) {
  createUserBusinesses(input: $input) {
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
export const updateUserBusinesses = `mutation UpdateUserBusinesses($input: UpdateUserBusinessesInput!) {
  updateUserBusinesses(input: $input) {
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
export const deleteUserBusinesses = `mutation DeleteUserBusinesses($input: DeleteUserBusinessesInput!) {
  deleteUserBusinesses(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
