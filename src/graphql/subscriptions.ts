// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateAvailabilityItem = `subscription OnCreateAvailabilityItem {
  onCreateAvailabilityItem {
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
export const onUpdateAvailabilityItem = `subscription OnUpdateAvailabilityItem {
  onUpdateAvailabilityItem {
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
export const onDeleteAvailabilityItem = `subscription OnDeleteAvailabilityItem {
  onDeleteAvailabilityItem {
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
export const onCreateBooking = `subscription OnCreateBooking {
  onCreateBooking {
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
export const onUpdateBooking = `subscription OnUpdateBooking {
  onUpdateBooking {
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
export const onDeleteBooking = `subscription OnDeleteBooking {
  onDeleteBooking {
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
export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateEmployeeServicess = `subscription OnCreateEmployeeServicess {
  onCreateEmployeeServicess {
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
export const onUpdateEmployeeServicess = `subscription OnUpdateEmployeeServicess {
  onUpdateEmployeeServicess {
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
export const onDeleteEmployeeServicess = `subscription OnDeleteEmployeeServicess {
  onDeleteEmployeeServicess {
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
export const onCreateService = `subscription OnCreateService {
  onCreateService {
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
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
export const onCreateBranch = `subscription OnCreateBranch {
  onCreateBranch {
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
export const onUpdateBranch = `subscription OnUpdateBranch {
  onUpdateBranch {
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
export const onDeleteBranch = `subscription OnDeleteBranch {
  onDeleteBranch {
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
export const onCreateBranchEmployees = `subscription OnCreateBranchEmployees {
  onCreateBranchEmployees {
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
export const onUpdateBranchEmployees = `subscription OnUpdateBranchEmployees {
  onUpdateBranchEmployees {
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
export const onDeleteBranchEmployees = `subscription OnDeleteBranchEmployees {
  onDeleteBranchEmployees {
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
export const onCreateBranchServices = `subscription OnCreateBranchServices {
  onCreateBranchServices {
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
export const onUpdateBranchServices = `subscription OnUpdateBranchServices {
  onUpdateBranchServices {
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
export const onDeleteBranchServices = `subscription OnDeleteBranchServices {
  onDeleteBranchServices {
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
export const onCreateBusiness = `subscription OnCreateBusiness {
  onCreateBusiness {
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
export const onUpdateBusiness = `subscription OnUpdateBusiness {
  onUpdateBusiness {
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
export const onDeleteBusiness = `subscription OnDeleteBusiness {
  onDeleteBusiness {
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
export const onCreateUserBusinesses = `subscription OnCreateUserBusinesses {
  onCreateUserBusinesses {
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
export const onUpdateUserBusinesses = `subscription OnUpdateUserBusinesses {
  onUpdateUserBusinesses {
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
export const onDeleteUserBusinesses = `subscription OnDeleteUserBusinesses {
  onDeleteUserBusinesses {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
