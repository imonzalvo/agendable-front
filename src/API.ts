/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CreateAvailabilityItemInput {
  id?: string | null;
  day?: Day | null;
  from: string;
  to: string;
  availabilityItemEmployeeId?: string | null;
}

export enum Day {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export interface UpdateAvailabilityItemInput {
  id: string;
  day?: Day | null;
  from?: string | null;
  to?: string | null;
  availabilityItemEmployeeId?: string | null;
}

export interface DeleteAvailabilityItemInput {
  id?: string | null;
}

export interface CreateBookingServicesInput {
  id?: string | null;
  bookingServicesServiceId?: string | null;
  bookingServicesBookingId?: string | null;
}

export enum BookingStatus {
  COMPLETED = 'COMPLETED',
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
}

export interface UpdateBookingServicesInput {
  id: string;
  bookingServicesServiceId?: string | null;
  bookingServicesBookingId?: string | null;
}

export interface DeleteBookingServicesInput {
  id?: string | null;
}

export interface CreateBookingInput {
  id?: string | null;
  createdAt: string;
  start: string;
  end: string;
  status: BookingStatus;
  clientEmail?: string | null;
  clientPhone?: string | null;
  clientName?: string | null;
  clientFamilyName?: string | null;
  bookingClientId?: string | null;
  bookingBranchId: string;
  bookingEmployeeId: string;
}

export interface UpdateBookingInput {
  id: string;
  createdAt?: string | null;
  start?: string | null;
  end?: string | null;
  status?: BookingStatus | null;
  clientEmail?: string | null;
  clientPhone?: string | null;
  clientName?: string | null;
  clientFamilyName?: string | null;
  bookingClientId?: string | null;
  bookingBranchId?: string | null;
  bookingEmployeeId?: string | null;
}

export interface DeleteBookingInput {
  id?: string | null;
}

export interface CreateEmployeeInput {
  id?: string | null;
  givenName: string;
  familyName: string;
  phone?: string | null;
  employeeUserId?: string | null;
  employeeBranchesId?: string | null;
}

export interface UpdateEmployeeInput {
  id: string;
  givenName?: string | null;
  familyName?: string | null;
  phone?: string | null;
  employeeUserId?: string | null;
  employeeBranchesId?: string | null;
}

export interface DeleteEmployeeInput {
  id?: string | null;
}

export interface CreateEmployeeServicesInput {
  id?: string | null;
  employeeServicesServiceId?: string | null;
  employeeServicesEmployeeId?: string | null;
}

export interface UpdateEmployeeServicesInput {
  id: string;
  employeeServicesServiceId?: string | null;
  employeeServicesEmployeeId?: string | null;
}

export interface DeleteEmployeeServicesInput {
  id?: string | null;
}

export interface CreateServiceInput {
  id?: string | null;
  name: string;
  price: number;
  currency?: string | null;
  duration: number;
  description?: string | null;
}

export interface UpdateServiceInput {
  id: string;
  name?: string | null;
  price?: number | null;
  currency?: string | null;
  duration?: number | null;
  description?: string | null;
}

export interface DeleteServiceInput {
  id?: string | null;
}

export interface CreateBranchInput {
  id?: string | null;
  address: string;
  phone: string;
  email: string;
  name: string;
  description?: string | null;
  image?: string | null;
  branchBusinessId: string;
}

export interface UpdateBranchInput {
  id: string;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  branchBusinessId?: string | null;
}

export interface DeleteBranchInput {
  id?: string | null;
}

export interface CreateBranchServicesInput {
  id?: string | null;
  branchServicesBranchId?: string | null;
  branchServicesServiceId?: string | null;
}

export interface DeleteBranchServicesInput {
  id?: string | null;
}

export interface CreateBusinessInput {
  id?: string | null;
  name: string;
  email: string;
  phone: string;
  handle: string;
}

export interface DeleteBusinessInput {
  id?: string | null;
}

export interface CreateUserInput {
  id?: string | null;
  givenName: string;
  familyName: string;
  userName: string;
  email?: string | null;
  phone?: string | null;
  userType: UserType;
}

export interface UpdateUserInput {
  id: string;
  givenName?: string | null;
  familyName?: string | null;
  userName?: string | null;
  email?: string | null;
  phone?: string | null;
  userType?: UserType | null;
}

export interface DeleteUserInput {
  id?: string | null;
}

export interface UpdateBranchServicesInput {
  id: string;
  branchServicesBranchId?: string | null;
  branchServicesServiceId?: string | null;
}

export interface UpdateBusinessInput {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  handle?: string | null;
}

export interface ModelEmployeeServicesFilterInput {
  id?: ModelIDFilterInput | null;
  and?: (ModelEmployeeServicesFilterInput | null)[] | null;
  or?: (ModelEmployeeServicesFilterInput | null)[] | null;
  not?: ModelEmployeeServicesFilterInput | null;
}

export interface ModelIDFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: (string | null)[] | null;
  beginsWith?: string | null;
}

export interface ModelUserFilterInput {
  id?: ModelIDFilterInput | null;
  givenName?: ModelStringFilterInput | null;
  familyName?: ModelStringFilterInput | null;
  userName?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  phone?: ModelStringFilterInput | null;
  userType?: ModelUserTypeFilterInput | null;
  and?: (ModelUserFilterInput | null)[] | null;
  or?: (ModelUserFilterInput | null)[] | null;
  not?: ModelUserFilterInput | null;
}

export interface ModelStringFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: (string | null)[] | null;
  beginsWith?: string | null;
}

export interface ModelUserTypeFilterInput {
  eq?: UserType | null;
  ne?: UserType | null;
}

export interface ModelAvailabilityItemFilterInput {
  id?: ModelIDFilterInput | null;
  day?: ModelDayFilterInput | null;
  from?: ModelStringFilterInput | null;
  to?: ModelStringFilterInput | null;
  and?: (ModelAvailabilityItemFilterInput | null)[] | null;
  or?: (ModelAvailabilityItemFilterInput | null)[] | null;
  not?: ModelAvailabilityItemFilterInput | null;
}

export interface ModelDayFilterInput {
  eq?: Day | null;
  ne?: Day | null;
}

export interface ModelBookingServicesFilterInput {
  id?: ModelIDFilterInput | null;
  and?: (ModelBookingServicesFilterInput | null)[] | null;
  or?: (ModelBookingServicesFilterInput | null)[] | null;
  not?: ModelBookingServicesFilterInput | null;
}

export interface ModelBookingFilterInput {
  id?: ModelIDFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  start?: ModelStringFilterInput | null;
  end?: ModelStringFilterInput | null;
  status?: ModelBookingStatusFilterInput | null;
  clientEmail?: ModelStringFilterInput | null;
  clientPhone?: ModelStringFilterInput | null;
  clientName?: ModelStringFilterInput | null;
  clientFamilyName?: ModelStringFilterInput | null;
  and?: (ModelBookingFilterInput | null)[] | null;
  or?: (ModelBookingFilterInput | null)[] | null;
  not?: ModelBookingFilterInput | null;
}

export interface ModelBookingStatusFilterInput {
  eq?: BookingStatus | null;
  ne?: BookingStatus | null;
}

export interface ModelEmployeeFilterInput {
  id?: ModelIDFilterInput | null;
  givenName?: ModelStringFilterInput | null;
  familyName?: ModelStringFilterInput | null;
  phone?: ModelStringFilterInput | null;
  and?: (ModelEmployeeFilterInput | null)[] | null;
  or?: (ModelEmployeeFilterInput | null)[] | null;
  not?: ModelEmployeeFilterInput | null;
}

export interface ModelServiceFilterInput {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  price?: ModelFloatFilterInput | null;
  currency?: ModelStringFilterInput | null;
  duration?: ModelIntFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: (ModelServiceFilterInput | null)[] | null;
  or?: (ModelServiceFilterInput | null)[] | null;
  not?: ModelServiceFilterInput | null;
}

export interface ModelFloatFilterInput {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: (number | null)[] | null;
}

export interface ModelIntFilterInput {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: (number | null)[] | null;
}

export interface ModelBranchFilterInput {
  id?: ModelIDFilterInput | null;
  address?: ModelStringFilterInput | null;
  phone?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  and?: (ModelBranchFilterInput | null)[] | null;
  or?: (ModelBranchFilterInput | null)[] | null;
  not?: ModelBranchFilterInput | null;
}

export interface ModelBranchServicesFilterInput {
  id?: ModelIDFilterInput | null;
  and?: (ModelBranchServicesFilterInput | null)[] | null;
  or?: (ModelBranchServicesFilterInput | null)[] | null;
  not?: ModelBranchServicesFilterInput | null;
}

export interface ModelBusinessFilterInput {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  phone?: ModelStringFilterInput | null;
  handle?: ModelStringFilterInput | null;
  and?: (ModelBusinessFilterInput | null)[] | null;
  or?: (ModelBusinessFilterInput | null)[] | null;
  not?: ModelBusinessFilterInput | null;
}

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface CreateAvailabilityItemMutationVariables {
  input: CreateAvailabilityItemInput;
}

export interface CreateAvailabilityItemMutation {
  createAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface UpdateAvailabilityItemMutationVariables {
  input: UpdateAvailabilityItemInput;
}

export interface UpdateAvailabilityItemMutation {
  updateAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface DeleteAvailabilityItemMutationVariables {
  input: DeleteAvailabilityItemInput;
}

export interface DeleteAvailabilityItemMutation {
  deleteAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface CreateBookingServicesMutationVariables {
  input: CreateBookingServicesInput;
}

export interface CreateBookingServicesMutation {
  createBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface UpdateBookingServicesMutationVariables {
  input: UpdateBookingServicesInput;
}

export interface UpdateBookingServicesMutation {
  updateBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface DeleteBookingServicesMutationVariables {
  input: DeleteBookingServicesInput;
}

export interface DeleteBookingServicesMutation {
  deleteBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface CreateBookingMutationVariables {
  input: CreateBookingInput;
}

export interface CreateBookingMutation {
  createBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface UpdateBookingMutationVariables {
  input: UpdateBookingInput;
}

export interface UpdateBookingMutation {
  updateBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface DeleteBookingMutationVariables {
  input: DeleteBookingInput;
}

export interface DeleteBookingMutation {
  deleteBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface CreateEmployeeMutationVariables {
  input: CreateEmployeeInput;
}

export interface CreateEmployeeMutation {
  createEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface UpdateEmployeeMutationVariables {
  input: UpdateEmployeeInput;
}

export interface UpdateEmployeeMutation {
  updateEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface DeleteEmployeeMutationVariables {
  input: DeleteEmployeeInput;
}

export interface DeleteEmployeeMutation {
  deleteEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface CreateEmployeeServicesMutationVariables {
  input: CreateEmployeeServicesInput;
}

export interface CreateEmployeeServicesMutation {
  createEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface UpdateEmployeeServicesMutationVariables {
  input: UpdateEmployeeServicesInput;
}

export interface UpdateEmployeeServicesMutation {
  updateEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface DeleteEmployeeServicesMutationVariables {
  input: DeleteEmployeeServicesInput;
}

export interface DeleteEmployeeServicesMutation {
  deleteEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface CreateServiceMutationVariables {
  input: CreateServiceInput;
}

export interface CreateServiceMutation {
  createService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface UpdateServiceMutationVariables {
  input: UpdateServiceInput;
}

export interface UpdateServiceMutation {
  updateService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface DeleteServiceMutationVariables {
  input: DeleteServiceInput;
}

export interface DeleteServiceMutation {
  deleteService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface CreateBranchMutationVariables {
  input: CreateBranchInput;
}

export interface CreateBranchMutation {
  createBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface UpdateBranchMutationVariables {
  input: UpdateBranchInput;
}

export interface UpdateBranchMutation {
  updateBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface DeleteBranchMutationVariables {
  input: DeleteBranchInput;
}

export interface DeleteBranchMutation {
  deleteBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface CreateBranchServicesMutationVariables {
  input: CreateBranchServicesInput;
}

export interface CreateBranchServicesMutation {
  createBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface DeleteBranchServicesMutationVariables {
  input: DeleteBranchServicesInput;
}

export interface DeleteBranchServicesMutation {
  deleteBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface CreateBusinessMutationVariables {
  input: CreateBusinessInput;
}

export interface CreateBusinessMutation {
  createBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface DeleteBusinessMutationVariables {
  input: DeleteBusinessInput;
}

export interface DeleteBusinessMutation {
  deleteBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface CreateUserMutationVariables {
  input: CreateUserInput;
}

export interface CreateUserMutation {
  createUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface UpdateUserMutationVariables {
  input: UpdateUserInput;
}

export interface UpdateUserMutation {
  updateUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface DeleteUserMutationVariables {
  input: DeleteUserInput;
}

export interface DeleteUserMutation {
  deleteUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface UpdateBranchServicesMutationVariables {
  input: UpdateBranchServicesInput;
}

export interface UpdateBranchServicesMutation {
  updateBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface UpdateBusinessMutationVariables {
  input: UpdateBusinessInput;
}

export interface UpdateBusinessMutation {
  updateBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface GetEmployeeAvailableTimeQueryVariables {
  id?: string | null;
  date?: string | null;
  duration?: number | null;
}

export interface GetEmployeeAvailableTimeQuery {
  getEmployeeAvailableTime: string | null;
}

export interface GetEmployeeServicesQueryVariables {
  id: string;
}

export interface GetEmployeeServicesQuery {
  getEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface ListEmployeeServicessQueryVariables {
  filter?: ModelEmployeeServicesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListEmployeeServicessQuery {
  listEmployeeServicess: {
    __typename: 'ModelEmployeeServicesConnection';
    items:
      | ({
          __typename: 'EmployeeServices';
          id: string;
          employee: {
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null;
          service: {
            __typename: 'Service';
            id: string;
            name: string;
            price: number;
            currency: string | null;
            duration: number;
            description: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetUserQueryVariables {
  id: string;
}

export interface GetUserQuery {
  getUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface ListUsersQueryVariables {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListUsersQuery {
  listUsers: {
    __typename: 'ModelUserConnection';
    items:
      | ({
          __typename: 'User';
          id: string;
          givenName: string;
          familyName: string;
          userName: string;
          email: string | null;
          phone: string | null;
          userType: UserType;
          business: {
            __typename: 'Business';
            id: string;
            name: string;
            email: string;
            phone: string;
            handle: string;
          } | null;
          bookings: {
            __typename: 'ModelBookingConnection';
            nextToken: string | null;
          } | null;
          owner: string | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetAvailabilityItemQueryVariables {
  id: string;
}

export interface GetAvailabilityItemQuery {
  getAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface ListAvailabilityItemsQueryVariables {
  filter?: ModelAvailabilityItemFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListAvailabilityItemsQuery {
  listAvailabilityItems: {
    __typename: 'ModelAvailabilityItemConnection';
    items:
      | ({
          __typename: 'AvailabilityItem';
          id: string;
          day: Day | null;
          from: string;
          to: string;
          employee: {
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetBookingServicesQueryVariables {
  id: string;
}

export interface GetBookingServicesQuery {
  getBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface ListBookingServicessQueryVariables {
  filter?: ModelBookingServicesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListBookingServicessQuery {
  listBookingServicess: {
    __typename: 'ModelBookingServicesConnection';
    items:
      | ({
          __typename: 'BookingServices';
          id: string;
          booking: {
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null;
          service: {
            __typename: 'Service';
            id: string;
            name: string;
            price: number;
            currency: string | null;
            duration: number;
            description: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetBookingQueryVariables {
  id: string;
}

export interface GetBookingQuery {
  getBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface ListBookingsQueryVariables {
  filter?: ModelBookingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListBookingsQuery {
  listBookings: {
    __typename: 'ModelBookingConnection';
    items:
      | ({
          __typename: 'Booking';
          id: string;
          createdAt: string;
          start: string;
          end: string;
          status: BookingStatus;
          client: {
            __typename: 'User';
            id: string;
            givenName: string;
            familyName: string;
            userName: string;
            email: string | null;
            phone: string | null;
            userType: UserType;
            owner: string | null;
          } | null;
          clientEmail: string | null;
          clientPhone: string | null;
          clientName: string | null;
          clientFamilyName: string | null;
          services: {
            __typename: 'ModelBookingServicesConnection';
            nextToken: string | null;
          } | null;
          employee: {
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          };
          branch: {
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          };
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetEmployeeQueryVariables {
  id: string;
}

export interface GetEmployeeQuery {
  getEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface ListEmployeesQueryVariables {
  filter?: ModelEmployeeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListEmployeesQuery {
  listEmployees: {
    __typename: 'ModelEmployeeConnection';
    items:
      | ({
          __typename: 'Employee';
          id: string;
          givenName: string;
          familyName: string;
          user: {
            __typename: 'User';
            id: string;
            givenName: string;
            familyName: string;
            userName: string;
            email: string | null;
            phone: string | null;
            userType: UserType;
            owner: string | null;
          } | null;
          phone: string | null;
          services: {
            __typename: 'ModelEmployeeServicesConnection';
            nextToken: string | null;
          } | null;
          availability: {
            __typename: 'ModelAvailabilityItemConnection';
            nextToken: string | null;
          } | null;
          bookings: {
            __typename: 'ModelBookingConnection';
            nextToken: string | null;
          } | null;
          branches: {
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface ListServicesQueryVariables {
  filter?: ModelServiceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListServicesQuery {
  listServices: {
    __typename: 'ModelServiceConnection';
    items:
      | ({
          __typename: 'Service';
          id: string;
          name: string;
          price: number;
          currency: string | null;
          duration: number;
          employees: {
            __typename: 'ModelEmployeeServicesConnection';
            nextToken: string | null;
          } | null;
          description: string | null;
          bookings: {
            __typename: 'ModelBookingServicesConnection';
            nextToken: string | null;
          } | null;
          branch: {
            __typename: 'ModelBranchServicesConnection';
            nextToken: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetServiceQueryVariables {
  id: string;
}

export interface GetServiceQuery {
  getService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface GetBranchQueryVariables {
  id: string;
}

export interface GetBranchQuery {
  getBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface ListBranchsQueryVariables {
  filter?: ModelBranchFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListBranchsQuery {
  listBranchs: {
    __typename: 'ModelBranchConnection';
    items:
      | ({
          __typename: 'Branch';
          id: string;
          address: string;
          phone: string;
          email: string;
          name: string;
          description: string | null;
          image: string | null;
          bookings: {
            __typename: 'ModelBookingConnection';
            nextToken: string | null;
          } | null;
          employees: {
            __typename: 'ModelEmployeeConnection';
            nextToken: string | null;
          } | null;
          services: {
            __typename: 'ModelBranchServicesConnection';
            nextToken: string | null;
          } | null;
          business: {
            __typename: 'Business';
            id: string;
            name: string;
            email: string;
            phone: string;
            handle: string;
          };
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetBranchServicesQueryVariables {
  id: string;
}

export interface GetBranchServicesQuery {
  getBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface ListBranchServicessQueryVariables {
  filter?: ModelBranchServicesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListBranchServicessQuery {
  listBranchServicess: {
    __typename: 'ModelBranchServicesConnection';
    items:
      | ({
          __typename: 'BranchServices';
          id: string;
          service: {
            __typename: 'Service';
            id: string;
            name: string;
            price: number;
            currency: string | null;
            duration: number;
            description: string | null;
          } | null;
          branch: {
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface ListBusinesssQueryVariables {
  filter?: ModelBusinessFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListBusinesssQuery {
  listBusinesss: {
    __typename: 'ModelBusinessConnection';
    items:
      | ({
          __typename: 'Business';
          id: string;
          name: string;
          email: string;
          phone: string;
          owners: {
            __typename: 'User';
            id: string;
            givenName: string;
            familyName: string;
            userName: string;
            email: string | null;
            phone: string | null;
            userType: UserType;
            owner: string | null;
          };
          handle: string;
          branches: {
            __typename: 'ModelBranchConnection';
            nextToken: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface GetBusinessQueryVariables {
  id: string;
}

export interface GetBusinessQuery {
  getBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface BusinessByHandleQueryVariables {
  handle?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBusinessFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface BusinessByHandleQuery {
  businessByHandle: {
    __typename: 'ModelBusinessConnection';
    items:
      | ({
          __typename: 'Business';
          id: string;
          name: string;
          email: string;
          phone: string;
          owners: {
            __typename: 'User';
            id: string;
            givenName: string;
            familyName: string;
            userName: string;
            email: string | null;
            phone: string | null;
            userType: UserType;
            owner: string | null;
          };
          handle: string;
          branches: {
            __typename: 'ModelBranchConnection';
            nextToken: string | null;
          } | null;
        } | null)[]
      | null;
    nextToken: string | null;
  } | null;
}

export interface OnCreateAvailabilityItemSubscription {
  onCreateAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnUpdateAvailabilityItemSubscription {
  onUpdateAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnDeleteAvailabilityItemSubscription {
  onDeleteAvailabilityItem: {
    __typename: 'AvailabilityItem';
    id: string;
    day: Day | null;
    from: string;
    to: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnCreateBookingServicesSubscription {
  onCreateBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnUpdateBookingServicesSubscription {
  onUpdateBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnDeleteBookingServicesSubscription {
  onDeleteBookingServices: {
    __typename: 'BookingServices';
    id: string;
    booking: {
      __typename: 'Booking';
      id: string;
      createdAt: string;
      start: string;
      end: string;
      status: BookingStatus;
      client: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      clientEmail: string | null;
      clientPhone: string | null;
      clientName: string | null;
      clientFamilyName: string | null;
      services: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      employee: {
        __typename: 'Employee';
        id: string;
        givenName: string;
        familyName: string;
        phone: string | null;
      };
      branch: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      };
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnCreateBookingSubscription {
  onCreateBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface OnUpdateBookingSubscription {
  onUpdateBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface OnDeleteBookingSubscription {
  onDeleteBooking: {
    __typename: 'Booking';
    id: string;
    createdAt: string;
    start: string;
    end: string;
    status: BookingStatus;
    client: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    clientEmail: string | null;
    clientPhone: string | null;
    clientName: string | null;
    clientFamilyName: string | null;
    services: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    };
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    };
  } | null;
}

export interface OnCreateEmployeeSubscription {
  onCreateEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnUpdateEmployeeSubscription {
  onUpdateEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnDeleteEmployeeSubscription {
  onDeleteEmployee: {
    __typename: 'Employee';
    id: string;
    givenName: string;
    familyName: string;
    user: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null;
    phone: string | null;
    services: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    availability: {
      __typename: 'ModelAvailabilityItemConnection';
      items:
        | ({
            __typename: 'AvailabilityItem';
            id: string;
            day: Day | null;
            from: string;
            to: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branches: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnCreateEmployeeServicesSubscription {
  onCreateEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnUpdateEmployeeServicesSubscription {
  onUpdateEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnDeleteEmployeeServicesSubscription {
  onDeleteEmployeeServices: {
    __typename: 'EmployeeServices';
    id: string;
    employee: {
      __typename: 'Employee';
      id: string;
      givenName: string;
      familyName: string;
      user: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      } | null;
      phone: string | null;
      services: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      availability: {
        __typename: 'ModelAvailabilityItemConnection';
        nextToken: string | null;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      branches: {
        __typename: 'Branch';
        id: string;
        address: string;
        phone: string;
        email: string;
        name: string;
        description: string | null;
        image: string | null;
      } | null;
    } | null;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
  } | null;
}

export interface OnCreateServiceSubscription {
  onCreateService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface OnUpdateServiceSubscription {
  onUpdateService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface OnDeleteServiceSubscription {
  onDeleteService: {
    __typename: 'Service';
    id: string;
    name: string;
    price: number;
    currency: string | null;
    duration: number;
    employees: {
      __typename: 'ModelEmployeeServicesConnection';
      items:
        | ({
            __typename: 'EmployeeServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    description: string | null;
    bookings: {
      __typename: 'ModelBookingServicesConnection';
      items:
        | ({
            __typename: 'BookingServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    branch: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface OnCreateBranchSubscription {
  onCreateBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface OnUpdateBranchSubscription {
  onUpdateBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface OnDeleteBranchSubscription {
  onDeleteBranch: {
    __typename: 'Branch';
    id: string;
    address: string;
    phone: string;
    email: string;
    name: string;
    description: string | null;
    image: string | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    employees: {
      __typename: 'ModelEmployeeConnection';
      items:
        | ({
            __typename: 'Employee';
            id: string;
            givenName: string;
            familyName: string;
            phone: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    services: {
      __typename: 'ModelBranchServicesConnection';
      items:
        | ({
            __typename: 'BranchServices';
            id: string;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
}

export interface OnCreateBranchServicesSubscription {
  onCreateBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnDeleteBranchServicesSubscription {
  onDeleteBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnCreateBusinessSubscription {
  onCreateBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface OnDeleteBusinessSubscription {
  onDeleteBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}

export interface OnCreateUserSubscriptionVariables {
  owner: string;
}

export interface OnCreateUserSubscription {
  onCreateUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface OnUpdateUserSubscriptionVariables {
  owner: string;
}

export interface OnUpdateUserSubscription {
  onUpdateUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface OnDeleteUserSubscriptionVariables {
  owner: string;
}

export interface OnDeleteUserSubscription {
  onDeleteUser: {
    __typename: 'User';
    id: string;
    givenName: string;
    familyName: string;
    userName: string;
    email: string | null;
    phone: string | null;
    userType: UserType;
    business: {
      __typename: 'Business';
      id: string;
      name: string;
      email: string;
      phone: string;
      owners: {
        __typename: 'User';
        id: string;
        givenName: string;
        familyName: string;
        userName: string;
        email: string | null;
        phone: string | null;
        userType: UserType;
        owner: string | null;
      };
      handle: string;
      branches: {
        __typename: 'ModelBranchConnection';
        nextToken: string | null;
      } | null;
    } | null;
    bookings: {
      __typename: 'ModelBookingConnection';
      items:
        | ({
            __typename: 'Booking';
            id: string;
            createdAt: string;
            start: string;
            end: string;
            status: BookingStatus;
            clientEmail: string | null;
            clientPhone: string | null;
            clientName: string | null;
            clientFamilyName: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
}

export interface OnUpdateBranchServicesSubscription {
  onUpdateBranchServices: {
    __typename: 'BranchServices';
    id: string;
    service: {
      __typename: 'Service';
      id: string;
      name: string;
      price: number;
      currency: string | null;
      duration: number;
      employees: {
        __typename: 'ModelEmployeeServicesConnection';
        nextToken: string | null;
      } | null;
      description: string | null;
      bookings: {
        __typename: 'ModelBookingServicesConnection';
        nextToken: string | null;
      } | null;
      branch: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
    } | null;
    branch: {
      __typename: 'Branch';
      id: string;
      address: string;
      phone: string;
      email: string;
      name: string;
      description: string | null;
      image: string | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      employees: {
        __typename: 'ModelEmployeeConnection';
        nextToken: string | null;
      } | null;
      services: {
        __typename: 'ModelBranchServicesConnection';
        nextToken: string | null;
      } | null;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      };
    } | null;
  } | null;
}

export interface OnUpdateBusinessSubscription {
  onUpdateBusiness: {
    __typename: 'Business';
    id: string;
    name: string;
    email: string;
    phone: string;
    owners: {
      __typename: 'User';
      id: string;
      givenName: string;
      familyName: string;
      userName: string;
      email: string | null;
      phone: string | null;
      userType: UserType;
      business: {
        __typename: 'Business';
        id: string;
        name: string;
        email: string;
        phone: string;
        handle: string;
      } | null;
      bookings: {
        __typename: 'ModelBookingConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    handle: string;
    branches: {
      __typename: 'ModelBranchConnection';
      items:
        | ({
            __typename: 'Branch';
            id: string;
            address: string;
            phone: string;
            email: string;
            name: string;
            description: string | null;
            image: string | null;
          } | null)[]
        | null;
      nextToken: string | null;
    } | null;
  } | null;
}
