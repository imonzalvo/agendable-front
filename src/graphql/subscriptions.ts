// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBookingWithServices = `subscription OnCreateBookingWithServices {
  onCreateBookingWithServices {
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
export const onCreateVacationsItem = `subscription OnCreateVacationsItem {
  onCreateVacationsItem {
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
export const onUpdateVacationsItem = `subscription OnUpdateVacationsItem {
  onUpdateVacationsItem {
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
export const onDeleteVacationsItem = `subscription OnDeleteVacationsItem {
  onDeleteVacationsItem {
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
export const onCreateBookingServices = `subscription OnCreateBookingServices {
  onCreateBookingServices {
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
export const onUpdateBookingServices = `subscription OnUpdateBookingServices {
  onUpdateBookingServices {
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
export const onDeleteBookingServices = `subscription OnDeleteBookingServices {
  onDeleteBookingServices {
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
export const onCreateEmployeeServices = `subscription OnCreateEmployeeServices {
  onCreateEmployeeServices {
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
export const onUpdateEmployeeServices = `subscription OnUpdateEmployeeServices {
  onUpdateEmployeeServices {
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
export const onDeleteEmployeeServices = `subscription OnDeleteEmployeeServices {
  onDeleteEmployeeServices {
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
export const onCreateService = `subscription OnCreateService {
  onCreateService {
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
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
export const onCreateBranch = `subscription OnCreateBranch {
  onCreateBranch {
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
export const onUpdateBranch = `subscription OnUpdateBranch {
  onUpdateBranch {
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
export const onDeleteBranch = `subscription OnDeleteBranch {
  onDeleteBranch {
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
export const onCreateBranchServices = `subscription OnCreateBranchServices {
  onCreateBranchServices {
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
export const onDeleteBranchServices = `subscription OnDeleteBranchServices {
  onDeleteBranchServices {
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
export const onCreateBusiness = `subscription OnCreateBusiness {
  onCreateBusiness {
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
export const onDeleteBusiness = `subscription OnDeleteBusiness {
  onDeleteBusiness {
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
export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onUpdateBranchServices = `subscription OnUpdateBranchServices {
  onUpdateBranchServices {
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
export const onUpdateBusiness = `subscription OnUpdateBusiness {
  onUpdateBusiness {
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
