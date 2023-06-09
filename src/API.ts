/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookingWithServicesInput = {
  id?: string | null,
  createdAt: string,
  start: string,
  end: string,
  status: BookingStatus,
  clientEmail?: string | null,
  clientPhone?: string | null,
  clientName?: string | null,
  clientFamilyName?: string | null,
  bookingClientId?: string | null,
  bookingBranchId: string,
  bookingEmployeeId: string,
};

export enum BookingStatus {
  COMPLETED = "COMPLETED",
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
}


export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}


export type CreateAvailabilityItemInput = {
  id?: string | null,
  day?: Day | null,
  from: string,
  to: string,
  availabilityItemEmployeeId?: string | null,
};

export enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}


export type UpdateAvailabilityItemInput = {
  id: string,
  day?: Day | null,
  from?: string | null,
  to?: string | null,
  availabilityItemEmployeeId?: string | null,
};

export type DeleteAvailabilityItemInput = {
  id?: string | null,
};

export type CreateVacationsItemInput = {
  id?: string | null,
  from: string,
  to: string,
  vacationsItemEmployeeId?: string | null,
};

export type UpdateVacationsItemInput = {
  id: string,
  from?: string | null,
  to?: string | null,
  vacationsItemEmployeeId?: string | null,
};

export type DeleteVacationsItemInput = {
  id?: string | null,
};

export type CreateBookingServicesInput = {
  id?: string | null,
  bookingServicesServiceId?: string | null,
  bookingServicesBookingId?: string | null,
};

export type UpdateBookingServicesInput = {
  id: string,
  bookingServicesServiceId?: string | null,
  bookingServicesBookingId?: string | null,
};

export type DeleteBookingServicesInput = {
  id?: string | null,
};

export type CreateBookingInput = {
  id?: string | null,
  createdAt: string,
  start: string,
  end: string,
  status: BookingStatus,
  clientEmail?: string | null,
  clientPhone?: string | null,
  clientName?: string | null,
  clientFamilyName?: string | null,
  bookingClientId?: string | null,
  bookingBranchId: string,
  bookingEmployeeId: string,
};

export type UpdateBookingInput = {
  id: string,
  createdAt?: string | null,
  start?: string | null,
  end?: string | null,
  status?: BookingStatus | null,
  clientEmail?: string | null,
  clientPhone?: string | null,
  clientName?: string | null,
  clientFamilyName?: string | null,
  bookingClientId?: string | null,
  bookingBranchId?: string | null,
  bookingEmployeeId?: string | null,
};

export type DeleteBookingInput = {
  id?: string | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  givenName: string,
  familyName: string,
  phone?: string | null,
  employeeUserId?: string | null,
  employeeBranchesId?: string | null,
};

export type UpdateEmployeeInput = {
  id: string,
  givenName?: string | null,
  familyName?: string | null,
  phone?: string | null,
  employeeUserId?: string | null,
  employeeBranchesId?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateEmployeeServicesInput = {
  id?: string | null,
  employeeServicesServiceId?: string | null,
  employeeServicesEmployeeId?: string | null,
};

export type UpdateEmployeeServicesInput = {
  id: string,
  employeeServicesServiceId?: string | null,
  employeeServicesEmployeeId?: string | null,
};

export type DeleteEmployeeServicesInput = {
  id?: string | null,
};

export type CreateServiceInput = {
  id?: string | null,
  name: string,
  price: number,
  currency?: string | null,
  duration: number,
  description?: string | null,
};

export type UpdateServiceInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  currency?: string | null,
  duration?: number | null,
  description?: string | null,
};

export type DeleteServiceInput = {
  id?: string | null,
};

export type CreateBranchInput = {
  id?: string | null,
  address: string,
  phone: string,
  email: string,
  name: string,
  description?: string | null,
  image?: string | null,
  editors?: string | null,
  branchBusinessId: string,
};

export type UpdateBranchInput = {
  id: string,
  address?: string | null,
  phone?: string | null,
  email?: string | null,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  editors?: string | null,
  branchBusinessId?: string | null,
};

export type DeleteBranchInput = {
  id?: string | null,
};

export type CreateBranchServicesInput = {
  id?: string | null,
  branchServicesBranchId?: string | null,
  branchServicesServiceId?: string | null,
};

export type DeleteBranchServicesInput = {
  id?: string | null,
};

export type CreateBusinessInput = {
  id?: string | null,
  name: string,
  email: string,
  phone: string,
  handle: string,
};

export type DeleteBusinessInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  givenName: string,
  familyName: string,
  userName: string,
  email?: string | null,
  phone?: string | null,
  userType: UserType,
};

export type UpdateUserInput = {
  id: string,
  givenName?: string | null,
  familyName?: string | null,
  userName?: string | null,
  email?: string | null,
  phone?: string | null,
  userType?: UserType | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type UpdateBranchServicesInput = {
  id: string,
  branchServicesBranchId?: string | null,
  branchServicesServiceId?: string | null,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  handle?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  givenName?: ModelStringFilterInput | null,
  familyName?: ModelStringFilterInput | null,
  userName?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  userType?: ModelUserTypeFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUserTypeFilterInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type ModelAvailabilityItemFilterInput = {
  id?: ModelIDFilterInput | null,
  day?: ModelDayFilterInput | null,
  from?: ModelStringFilterInput | null,
  to?: ModelStringFilterInput | null,
  and?: Array< ModelAvailabilityItemFilterInput | null > | null,
  or?: Array< ModelAvailabilityItemFilterInput | null > | null,
  not?: ModelAvailabilityItemFilterInput | null,
};

export type ModelDayFilterInput = {
  eq?: Day | null,
  ne?: Day | null,
};

export type ModelVacationsItemFilterInput = {
  id?: ModelIDFilterInput | null,
  from?: ModelStringFilterInput | null,
  to?: ModelStringFilterInput | null,
  and?: Array< ModelVacationsItemFilterInput | null > | null,
  or?: Array< ModelVacationsItemFilterInput | null > | null,
  not?: ModelVacationsItemFilterInput | null,
};

export type ModelBookingServicesFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelBookingServicesFilterInput | null > | null,
  or?: Array< ModelBookingServicesFilterInput | null > | null,
  not?: ModelBookingServicesFilterInput | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  start?: ModelStringFilterInput | null,
  end?: ModelStringFilterInput | null,
  status?: ModelBookingStatusFilterInput | null,
  clientEmail?: ModelStringFilterInput | null,
  clientPhone?: ModelStringFilterInput | null,
  clientName?: ModelStringFilterInput | null,
  clientFamilyName?: ModelStringFilterInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
};

export type ModelBookingStatusFilterInput = {
  eq?: BookingStatus | null,
  ne?: BookingStatus | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDFilterInput | null,
  givenName?: ModelStringFilterInput | null,
  familyName?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelEmployeeServicesFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelEmployeeServicesFilterInput | null > | null,
  or?: Array< ModelEmployeeServicesFilterInput | null > | null,
  not?: ModelEmployeeServicesFilterInput | null,
};

export type ModelServiceFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  currency?: ModelStringFilterInput | null,
  duration?: ModelIntFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBranchFilterInput = {
  id?: ModelIDFilterInput | null,
  address?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  image?: ModelStringFilterInput | null,
  editors?: ModelStringFilterInput | null,
  and?: Array< ModelBranchFilterInput | null > | null,
  or?: Array< ModelBranchFilterInput | null > | null,
  not?: ModelBranchFilterInput | null,
};

export type ModelBranchServicesFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelBranchServicesFilterInput | null > | null,
  or?: Array< ModelBranchServicesFilterInput | null > | null,
  not?: ModelBranchServicesFilterInput | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  handle?: ModelStringFilterInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateBookingWithServicesMutationVariables = {
  input: CreateBookingWithServicesInput,
  servicesId?: Array< string | null > | null,
};

export type CreateBookingWithServicesMutation = {
  createBookingWithServices:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type CreateAvailabilityItemMutationVariables = {
  input: CreateAvailabilityItemInput,
};

export type CreateAvailabilityItemMutation = {
  createAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAvailabilityItemMutationVariables = {
  input: UpdateAvailabilityItemInput,
};

export type UpdateAvailabilityItemMutation = {
  updateAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAvailabilityItemMutationVariables = {
  input: DeleteAvailabilityItemInput,
};

export type DeleteAvailabilityItemMutation = {
  deleteAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateVacationsItemMutationVariables = {
  input: CreateVacationsItemInput,
};

export type CreateVacationsItemMutation = {
  createVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateVacationsItemMutationVariables = {
  input: UpdateVacationsItemInput,
};

export type UpdateVacationsItemMutation = {
  updateVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteVacationsItemMutationVariables = {
  input: DeleteVacationsItemInput,
};

export type DeleteVacationsItemMutation = {
  deleteVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateBookingServicesMutationVariables = {
  input: CreateBookingServicesInput,
};

export type CreateBookingServicesMutation = {
  createBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateBookingServicesMutationVariables = {
  input: UpdateBookingServicesInput,
};

export type UpdateBookingServicesMutation = {
  updateBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteBookingServicesMutationVariables = {
  input: DeleteBookingServicesInput,
};

export type DeleteBookingServicesMutation = {
  deleteBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
};

export type CreateBookingMutation = {
  createBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
};

export type UpdateBookingMutation = {
  updateBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
};

export type DeleteBookingMutation = {
  deleteBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type CreateEmployeeServicesMutationVariables = {
  input: CreateEmployeeServicesInput,
};

export type CreateEmployeeServicesMutation = {
  createEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateEmployeeServicesMutationVariables = {
  input: UpdateEmployeeServicesInput,
};

export type UpdateEmployeeServicesMutation = {
  updateEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteEmployeeServicesMutationVariables = {
  input: DeleteEmployeeServicesInput,
};

export type DeleteEmployeeServicesMutation = {
  deleteEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
};

export type CreateServiceMutation = {
  createService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
};

export type UpdateServiceMutation = {
  updateService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
};

export type DeleteServiceMutation = {
  deleteService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateBranchMutationVariables = {
  input: CreateBranchInput,
};

export type CreateBranchMutation = {
  createBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateBranchMutationVariables = {
  input: UpdateBranchInput,
};

export type UpdateBranchMutation = {
  updateBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteBranchMutationVariables = {
  input: DeleteBranchInput,
};

export type DeleteBranchMutation = {
  deleteBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateBranchServicesMutationVariables = {
  input: CreateBranchServicesInput,
};

export type CreateBranchServicesMutation = {
  createBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type DeleteBranchServicesMutationVariables = {
  input: DeleteBranchServicesInput,
};

export type DeleteBranchServicesMutation = {
  deleteBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
};

export type CreateBusinessMutation = {
  createBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
};

export type DeleteBusinessMutation = {
  deleteBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateBranchServicesMutationVariables = {
  input: UpdateBranchServicesInput,
};

export type UpdateBranchServicesMutation = {
  updateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
};

export type UpdateBusinessMutation = {
  updateBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetEmployeeAvailableTimeQueryVariables = {
  id?: string | null,
  date?: string | null,
  duration?: number | null,
};

export type GetEmployeeAvailableTimeQuery = {
  getEmployeeAvailableTime: string | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAvailabilityItemQueryVariables = {
  id: string,
};

export type GetAvailabilityItemQuery = {
  getAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAvailabilityItemsQueryVariables = {
  filter?: ModelAvailabilityItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAvailabilityItemsQuery = {
  listAvailabilityItems:  {
    __typename: "ModelAvailabilityItemConnection",
    items:  Array< {
      __typename: "AvailabilityItem",
      id: string,
      day: Day | null,
      from: string,
      to: string,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVacationsItemQueryVariables = {
  id: string,
};

export type GetVacationsItemQuery = {
  getVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListVacationsItemsQueryVariables = {
  filter?: ModelVacationsItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVacationsItemsQuery = {
  listVacationsItems:  {
    __typename: "ModelVacationsItemConnection",
    items:  Array< {
      __typename: "VacationsItem",
      id: string,
      from: string,
      to: string,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBookingServicesQueryVariables = {
  id: string,
};

export type GetBookingServicesQuery = {
  getBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListBookingServicessQueryVariables = {
  filter?: ModelBookingServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingServicessQuery = {
  listBookingServicess:  {
    __typename: "ModelBookingServicesConnection",
    items:  Array< {
      __typename: "BookingServices",
      id: string,
      booking:  {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: number,
        currency: string | null,
        duration: number,
        description: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeServicesQueryVariables = {
  id: string,
};

export type GetEmployeeServicesQuery = {
  getEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListEmployeeServicessQueryVariables = {
  filter?: ModelEmployeeServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeeServicessQuery = {
  listEmployeeServicess:  {
    __typename: "ModelEmployeeServicesConnection",
    items:  Array< {
      __typename: "EmployeeServices",
      id: string,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: number,
        currency: string | null,
        duration: number,
        description: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetBranchQueryVariables = {
  id: string,
};

export type GetBranchQuery = {
  getBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListBranchsQueryVariables = {
  filter?: ModelBranchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBranchsQuery = {
  listBranchs:  {
    __typename: "ModelBranchConnection",
    items:  Array< {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBranchServicesQueryVariables = {
  id: string,
};

export type GetBranchServicesQuery = {
  getBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type ListBranchServicessQueryVariables = {
  filter?: ModelBranchServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBranchServicessQuery = {
  listBranchServicess:  {
    __typename: "ModelBranchServicesConnection",
    items:  Array< {
      __typename: "BranchServices",
      id: string,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: number,
        currency: string | null,
        duration: number,
        description: string | null,
      } | null,
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListBusinesssQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinesssQuery = {
  listBusinesss:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type BusinessByHandleQueryVariables = {
  handle?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessByHandleQuery = {
  businessByHandle:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QGetEmployeeAvailableTimeQueryVariables = {
  id: string,
  duration: number,
  date: string,
};

export type QGetEmployeeAvailableTimeQuery = {
  getEmployeeAvailableTime: string | null,
};

export type CREATE_BOOKING_WITH_SERVICESMutationVariables = {
  createdAt: string,
  start: string,
  end: string,
  status: BookingStatus,
  bookingBranchId: string,
  bookingEmployeeId: string,
  clientEmail?: string | null,
  clientFamilyName?: string | null,
  clientName?: string | null,
  clientPhone?: string | null,
  servicesId?: Array< string | null > | null,
};

export type CREATE_BOOKING_WITH_SERVICESMutation = {
  createBookingWithServices:  {
    __typename: "Booking",
    id: string,
    start: string,
    end: string,
    clientName: string | null,
    clientEmail: string | null,
    clientFamilyName: string | null,
    clientPhone: string | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
    },
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
        service:  {
          __typename: "Service",
          id: string,
        } | null,
      } | null > | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
    },
  } | null,
};

export type OnCreateBookingWithServicesSubscription = {
  onCreateBookingWithServices:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type OnCreateAvailabilityItemSubscription = {
  onCreateAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAvailabilityItemSubscription = {
  onUpdateAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAvailabilityItemSubscription = {
  onDeleteAvailabilityItem:  {
    __typename: "AvailabilityItem",
    id: string,
    day: Day | null,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateVacationsItemSubscription = {
  onCreateVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateVacationsItemSubscription = {
  onUpdateVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteVacationsItemSubscription = {
  onDeleteVacationsItem:  {
    __typename: "VacationsItem",
    id: string,
    from: string,
    to: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateBookingServicesSubscription = {
  onCreateBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateBookingServicesSubscription = {
  onUpdateBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteBookingServicesSubscription = {
  onDeleteBookingServices:  {
    __typename: "BookingServices",
    id: string,
    booking:  {
      __typename: "Booking",
      id: string,
      createdAt: string,
      start: string,
      end: string,
      status: BookingStatus,
      client:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      clientEmail: string | null,
      clientPhone: string | null,
      clientName: string | null,
      clientFamilyName: string | null,
      services:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      },
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking:  {
    __typename: "Booking",
    id: string,
    createdAt: string,
    start: string,
    end: string,
    status: BookingStatus,
    client:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    clientEmail: string | null,
    clientPhone: string | null,
    clientName: string | null,
    clientFamilyName: string | null,
    services:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    },
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    id: string,
    givenName: string,
    familyName: string,
    user:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    phone: string | null,
    availability:  {
      __typename: "ModelAvailabilityItemConnection",
      items:  Array< {
        __typename: "AvailabilityItem",
        id: string,
        day: Day | null,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    vacations:  {
      __typename: "ModelVacationsItemConnection",
      items:  Array< {
        __typename: "VacationsItem",
        id: string,
        from: string,
        to: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnCreateEmployeeServicesSubscription = {
  onCreateEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateEmployeeServicesSubscription = {
  onUpdateEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteEmployeeServicesSubscription = {
  onDeleteEmployeeServices:  {
    __typename: "EmployeeServices",
    id: string,
    employee:  {
      __typename: "Employee",
      id: string,
      givenName: string,
      familyName: string,
      user:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      } | null,
      phone: string | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      vacations:  {
        __typename: "ModelVacationsItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateServiceSubscription = {
  onCreateService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService:  {
    __typename: "Service",
    id: string,
    name: string,
    price: number,
    currency: string | null,
    duration: number,
    description: string | null,
    bookings:  {
      __typename: "ModelBookingServicesConnection",
      items:  Array< {
        __typename: "BookingServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeServicesConnection",
      items:  Array< {
        __typename: "EmployeeServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branch:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateBranchSubscription = {
  onCreateBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateBranchSubscription = {
  onUpdateBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteBranchSubscription = {
  onDeleteBranch:  {
    __typename: "Branch",
    id: string,
    address: string,
    phone: string,
    email: string,
    name: string,
    description: string | null,
    image: string | null,
    editors: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    services:  {
      __typename: "ModelBranchServicesConnection",
      items:  Array< {
        __typename: "BranchServices",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateBranchServicesSubscription = {
  onCreateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnDeleteBranchServicesSubscription = {
  onDeleteBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    givenName: string,
    familyName: string,
    userName: string,
    email: string | null,
    phone: string | null,
    userType: UserType,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
        owner: string | null,
      },
      handle: string,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
        clientEmail: string | null,
        clientPhone: string | null,
        clientName: string | null,
        clientFamilyName: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateBranchServicesSubscription = {
  onUpdateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingServicesConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeServicesConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      description: string | null,
      image: string | null,
      editors: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      services:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      },
    } | null,
  } | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness:  {
    __typename: "Business",
    id: string,
    name: string,
    email: string,
    phone: string,
    owners:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
        handle: string,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    },
    handle: string,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
        description: string | null,
        image: string | null,
        editors: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type BookingDataFragment = {
  __typename: "Booking",
  id: string,
  start: string,
  end: string,
  clientName: string | null,
  clientEmail: string | null,
  clientFamilyName: string | null,
  clientPhone: string | null,
  employee:  {
    __typename: string,
    id: string,
    givenName: string,
    familyName: string,
  },
  services:  {
    __typename: string,
    items:  Array< {
      __typename: string,
      id: string,
      service:  {
        __typename: string,
        id: string,
      } | null,
    } | null > | null,
  } | null,
  branch:  {
    __typename: string,
    id: string,
  },
};
