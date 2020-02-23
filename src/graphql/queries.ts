// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEmployeeAvailableTime = /* GraphQL */ `
  query GetEmployeeAvailableTime($id: ID, $date: String, $duration: Int) {
    getEmployeeAvailableTime(id: $id, date: $date, duration: $duration)
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
export const getAvailabilityItem = /* GraphQL */ `
  query GetAvailabilityItem($id: ID!) {
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
export const listAvailabilityItems = /* GraphQL */ `
  query ListAvailabilityItems(
    $filter: ModelAvailabilityItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailabilityItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getVacationsItem = /* GraphQL */ `
  query GetVacationsItem($id: ID!) {
    getVacationsItem(id: $id) {
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
export const listVacationsItems = /* GraphQL */ `
  query ListVacationsItems(
    $filter: ModelVacationsItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVacationsItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
export const getBookingServices = /* GraphQL */ `
  query GetBookingServices($id: ID!) {
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
export const listBookingServicess = /* GraphQL */ `
  query ListBookingServicess(
    $filter: ModelBookingServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingServicess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
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
          editors
        }
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
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
      nextToken
    }
  }
`;
export const getEmployeeServices = /* GraphQL */ `
  query GetEmployeeServices($id: ID!) {
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
export const listEmployeeServicess = /* GraphQL */ `
  query ListEmployeeServicess(
    $filter: ModelEmployeeServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeServicess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const listServices = /* GraphQL */ `
  query ListServices(
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
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
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
export const getBranch = /* GraphQL */ `
  query GetBranch($id: ID!) {
    getBranch(id: $id) {
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
export const listBranchs = /* GraphQL */ `
  query ListBranchs(
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
      nextToken
    }
  }
`;
export const getBranchServices = /* GraphQL */ `
  query GetBranchServices($id: ID!) {
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
export const listBranchServicess = /* GraphQL */ `
  query ListBranchServicess(
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
          editors
        }
      }
      nextToken
    }
  }
`;
export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
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
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
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
          editors
        }
        nextToken
      }
    }
  }
`;
export const businessByHandle = /* GraphQL */ `
  query BusinessByHandle(
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
