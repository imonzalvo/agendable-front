// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBookingWithServices = `mutation CreateBookingWithServices(
  $input: CreateBookingWithServicesInput!
  $servicesId: [ID]
) {
  createBookingWithServices(input: $input, servicesId: $servicesId) {
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
      vacations {
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
        editors
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
      editors
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
        owner
      }
      phone
      availability {
        nextToken
      }
      vacations {
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
        editors
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
        owner
      }
      phone
      availability {
        nextToken
      }
      vacations {
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
        editors
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
        owner
      }
      phone
      availability {
        nextToken
      }
      vacations {
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
        editors
      }
    }
  }
}
`;
export const createVacationsItem = `mutation CreateVacationsItem($input: CreateVacationsItemInput!) {
  createVacationsItem(input: $input) {
    id
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
      vacations {
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
        editors
      }
    }
  }
}
`;
export const updateVacationsItem = `mutation UpdateVacationsItem($input: UpdateVacationsItemInput!) {
  updateVacationsItem(input: $input) {
    id
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
      vacations {
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
        editors
      }
    }
  }
}
`;
export const deleteVacationsItem = `mutation DeleteVacationsItem($input: DeleteVacationsItemInput!) {
  deleteVacationsItem(input: $input) {
    id
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
      vacations {
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
        editors
      }
    }
  }
}
`;
export const createBookingServices = `mutation CreateBookingServices($input: CreateBookingServicesInput!) {
  createBookingServices(input: $input) {
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
        editors
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
export const updateBookingServices = `mutation UpdateBookingServices($input: UpdateBookingServicesInput!) {
  updateBookingServices(input: $input) {
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
        editors
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
export const deleteBookingServices = `mutation DeleteBookingServices($input: DeleteBookingServicesInput!) {
  deleteBookingServices(input: $input) {
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
        editors
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
      vacations {
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
        editors
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
      editors
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
      vacations {
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
        editors
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
      editors
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
      vacations {
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
        editors
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
      editors
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
    vacations {
      items {
        id
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
      editors
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
    vacations {
      items {
        id
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
      editors
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
    vacations {
      items {
        id
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
      editors
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
export const createEmployeeServices = `mutation CreateEmployeeServices($input: CreateEmployeeServicesInput!) {
  createEmployeeServices(input: $input) {
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
      vacations {
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
        editors
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
export const updateEmployeeServices = `mutation UpdateEmployeeServices($input: UpdateEmployeeServicesInput!) {
  updateEmployeeServices(input: $input) {
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
      vacations {
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
        editors
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
export const deleteEmployeeServices = `mutation DeleteEmployeeServices($input: DeleteEmployeeServicesInput!) {
  deleteEmployeeServices(input: $input) {
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
      vacations {
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
        editors
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
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
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
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
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
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
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
export const createBranch = `mutation CreateBranch($input: CreateBranchInput!) {
  createBranch(input: $input) {
    id
    address
    phone
    email
    name
    description
    image
    editors
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
export const updateBranch = `mutation UpdateBranch($input: UpdateBranchInput!) {
  updateBranch(input: $input) {
    id
    address
    phone
    email
    name
    description
    image
    editors
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
export const deleteBranch = `mutation DeleteBranch($input: DeleteBranchInput!) {
  deleteBranch(input: $input) {
    id
    address
    phone
    email
    name
    description
    image
    editors
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
export const createBranchServices = `mutation CreateBranchServices($input: CreateBranchServicesInput!) {
  createBranchServices(input: $input) {
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
      editors
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
export const deleteBranchServices = `mutation DeleteBranchServices($input: DeleteBranchServicesInput!) {
  deleteBranchServices(input: $input) {
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
      editors
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
export const createBusiness = `mutation CreateBusiness($input: CreateBusinessInput!) {
  createBusiness(input: $input) {
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
        editors
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
        editors
      }
      nextToken
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const updateBranchServices = `mutation UpdateBranchServices($input: UpdateBranchServicesInput!) {
  updateBranchServices(input: $input) {
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
      editors
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
export const updateBusiness = `mutation UpdateBusiness($input: UpdateBusinessInput!) {
  updateBusiness(input: $input) {
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
        editors
      }
      nextToken
    }
  }
}
`;
