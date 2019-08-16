/* tslint:disable */
//  This file was automatically generated and should not be edited.

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


export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
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

export type CreateBookingInput = {
  id?: string | null,
  createdAt: string,
  start: string,
  end: string,
  status: BookingStatus,
  bookingClientId: string,
  bookingBranchId: string,
  bookingServiceId: string,
  bookingEmployeeId?: string | null,
};

export enum BookingStatus {
  COMPLETED = "COMPLETED",
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
}


export type UpdateBookingInput = {
  id: string,
  createdAt?: string | null,
  start?: string | null,
  end?: string | null,
  status?: BookingStatus | null,
  bookingClientId?: string | null,
  bookingBranchId?: string | null,
  bookingServiceId?: string | null,
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
};

export type UpdateEmployeeInput = {
  id: string,
  givenName?: string | null,
  familyName?: string | null,
  phone?: string | null,
  employeeUserId?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateEmployeeServicessInput = {
  id?: string | null,
  serviceId: string,
  employeeId: string,
  employeeServicessServiceId?: string | null,
  employeeServicessEmployeeId?: string | null,
};

export type UpdateEmployeeServicessInput = {
  id: string,
  serviceId: string,
  employeeId: string,
  employeeServicessServiceId?: string | null,
  employeeServicessEmployeeId?: string | null,
};

export type DeleteEmployeeServicessInput = {
  serviceId: string,
  employeeId: string,
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
  branchBusinessId: string,
};

export type UpdateBranchInput = {
  id: string,
  address?: string | null,
  phone?: string | null,
  email?: string | null,
  name?: string | null,
  branchBusinessId?: string | null,
};

export type DeleteBranchInput = {
  id?: string | null,
};

export type CreateBranchEmployeesInput = {
  id?: string | null,
  branchEmployeesBranchId?: string | null,
  branchEmployeesEmployeeId?: string | null,
};

export type UpdateBranchEmployeesInput = {
  id: string,
  branchEmployeesBranchId?: string | null,
  branchEmployeesEmployeeId?: string | null,
};

export type DeleteBranchEmployeesInput = {
  id?: string | null,
};

export type CreateBranchServicesInput = {
  id?: string | null,
  branchServicesBranchId?: string | null,
  branchServicesServiceId?: string | null,
};

export type UpdateBranchServicesInput = {
  id: string,
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
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteBusinessInput = {
  id?: string | null,
};

export type CreateUserBusinessesInput = {
  id?: string | null,
  userBusinessesOwnerId?: string | null,
  userBusinessesBusinessId?: string | null,
};

export type UpdateUserBusinessesInput = {
  id: string,
  userBusinessesOwnerId?: string | null,
  userBusinessesBusinessId?: string | null,
};

export type DeleteUserBusinessesInput = {
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

export type ModelAvailabilityItemFilterInput = {
  id?: ModelIDFilterInput | null,
  day?: ModelDayFilterInput | null,
  from?: ModelStringFilterInput | null,
  to?: ModelStringFilterInput | null,
  and?: Array< ModelAvailabilityItemFilterInput | null > | null,
  or?: Array< ModelAvailabilityItemFilterInput | null > | null,
  not?: ModelAvailabilityItemFilterInput | null,
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

export type ModelDayFilterInput = {
  eq?: Day | null,
  ne?: Day | null,
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

export type ModelBookingFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  start?: ModelStringFilterInput | null,
  end?: ModelStringFilterInput | null,
  status?: ModelBookingStatusFilterInput | null,
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

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEmployeeServicessFilterInput = {
  id?: ModelIDFilterInput | null,
  serviceId?: ModelIDFilterInput | null,
  employeeId?: ModelIDFilterInput | null,
  and?: Array< ModelEmployeeServicessFilterInput | null > | null,
  or?: Array< ModelEmployeeServicessFilterInput | null > | null,
  not?: ModelEmployeeServicessFilterInput | null,
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
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBranchFilterInput = {
  id?: ModelIDFilterInput | null,
  address?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelBranchFilterInput | null > | null,
  or?: Array< ModelBranchFilterInput | null > | null,
  not?: ModelBranchFilterInput | null,
};

export type ModelBranchEmployeesFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelBranchEmployeesFilterInput | null > | null,
  or?: Array< ModelBranchEmployeesFilterInput | null > | null,
  not?: ModelBranchEmployeesFilterInput | null,
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
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelUserBusinessesFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelUserBusinessesFilterInput | null > | null,
  or?: Array< ModelUserBusinessesFilterInput | null > | null,
  not?: ModelUserBusinessesFilterInput | null,
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

export type ModelUserTypeFilterInput = {
  eq?: UserType | null,
  ne?: UserType | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateEmployeeServicessMutationVariables = {
  input: CreateEmployeeServicessInput,
};

export type CreateEmployeeServicessMutation = {
  createEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
  } | null,
};

export type UpdateEmployeeServicessMutationVariables = {
  input: UpdateEmployeeServicessInput,
};

export type UpdateEmployeeServicessMutation = {
  updateEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
  } | null,
};

export type DeleteEmployeeServicessMutationVariables = {
  input: DeleteEmployeeServicessInput,
};

export type DeleteEmployeeServicessMutation = {
  deleteEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateBranchEmployeesMutationVariables = {
  input: CreateBranchEmployeesInput,
};

export type CreateBranchEmployeesMutation = {
  createBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateBranchEmployeesMutationVariables = {
  input: UpdateBranchEmployeesInput,
};

export type UpdateBranchEmployeesMutation = {
  updateBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteBranchEmployeesMutationVariables = {
  input: DeleteBranchEmployeesInput,
};

export type DeleteBranchEmployeesMutation = {
  deleteBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateBranchServicesMutationVariables = {
  input: CreateBranchServicesInput,
};

export type CreateBranchServicesMutation = {
  createBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateBranchServicesMutationVariables = {
  input: UpdateBranchServicesInput,
};

export type UpdateBranchServicesMutation = {
  updateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateUserBusinessesMutationVariables = {
  input: CreateUserBusinessesInput,
};

export type CreateUserBusinessesMutation = {
  createUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateUserBusinessesMutationVariables = {
  input: UpdateUserBusinessesInput,
};

export type UpdateUserBusinessesMutation = {
  updateUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteUserBusinessesMutationVariables = {
  input: DeleteUserBusinessesInput,
};

export type DeleteUserBusinessesMutation = {
  deleteUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      },
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      },
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: number,
        currency: string | null,
        duration: number,
        description: string | null,
      },
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeServicessQueryVariables = {
  serviceId: string,
  employeeId: string,
};

export type GetEmployeeServicessQuery = {
  getEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
  } | null,
};

export type ListEmployeeServicesssQueryVariables = {
  serviceId?: string | null,
  employeeId?: ModelIDKeyConditionInput | null,
  filter?: ModelEmployeeServicessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeeServicesssQuery = {
  listEmployeeServicesss:  {
    __typename: "ModelEmployeeServicessConnection",
    items:  Array< {
      __typename: "EmployeeServicess",
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
      employee:  {
        __typename: "Employee",
        id: string,
        givenName: string,
        familyName: string,
        phone: string | null,
      } | null,
      serviceId: string,
      employeeId: string,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBranchEmployeesQueryVariables = {
  id: string,
};

export type GetBranchEmployeesQuery = {
  getBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListBranchEmployeessQueryVariables = {
  filter?: ModelBranchEmployeesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBranchEmployeessQuery = {
  listBranchEmployeess:  {
    __typename: "ModelBranchEmployeesConnection",
    items:  Array< {
      __typename: "BranchEmployees",
      id: string,
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null,
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

export type GetBranchServicesQueryVariables = {
  id: string,
};

export type GetBranchServicesQuery = {
  getBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      branch:  {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserBusinessesQueryVariables = {
  id: string,
};

export type GetUserBusinessesQuery = {
  getUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListUserBusinessessQueryVariables = {
  filter?: ModelUserBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserBusinessessQuery = {
  listUserBusinessess:  {
    __typename: "ModelUserBusinessesConnection",
    items:  Array< {
      __typename: "UserBusinesses",
      id: string,
      owner:  {
        __typename: "User",
        id: string,
        givenName: string,
        familyName: string,
        userName: string,
        email: string | null,
        phone: string | null,
        userType: UserType,
      } | null,
      business:  {
        __typename: "Business",
        id: string,
        name: string,
        email: string,
        phone: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    },
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    },
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    },
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
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
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    phone: string | null,
    services:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateEmployeeServicessSubscription = {
  onCreateEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
  } | null,
};

export type OnUpdateEmployeeServicessSubscription = {
  onUpdateEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
  } | null,
};

export type OnDeleteEmployeeServicessSubscription = {
  onDeleteEmployeeServicess:  {
    __typename: "EmployeeServicess",
    id: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    serviceId: string,
    employeeId: string,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    employees:  {
      __typename: "ModelEmployeeServicessConnection",
      items:  Array< {
        __typename: "EmployeeServicess",
        id: string,
        serviceId: string,
        employeeId: string,
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
    description: string | null,
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
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
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    },
    employees:  {
      __typename: "ModelBranchEmployeesConnection",
      items:  Array< {
        __typename: "BranchEmployees",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateBranchEmployeesSubscription = {
  onCreateBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateBranchEmployeesSubscription = {
  onUpdateBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteBranchEmployeesSubscription = {
  onDeleteBranchEmployees:  {
    __typename: "BranchEmployees",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
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
      } | null,
      phone: string | null,
      services:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      availability:  {
        __typename: "ModelAvailabilityItemConnection",
        nextToken: string | null,
      } | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateBranchServicesSubscription = {
  onCreateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateBranchServicesSubscription = {
  onUpdateBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteBranchServicesSubscription = {
  onDeleteBranchServices:  {
    __typename: "BranchServices",
    id: string,
    branch:  {
      __typename: "Branch",
      id: string,
      address: string,
      phone: string,
      email: string,
      name: string,
      bookings:  {
        __typename: "ModelBookingConnection",
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
      },
      employees:  {
        __typename: "ModelBranchEmployeesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: number,
      currency: string | null,
      duration: number,
      employees:  {
        __typename: "ModelEmployeeServicessConnection",
        nextToken: string | null,
      } | null,
      branch:  {
        __typename: "ModelBranchServicesConnection",
        nextToken: string | null,
      } | null,
      description: string | null,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
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
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    branches:  {
      __typename: "ModelBranchConnection",
      items:  Array< {
        __typename: "Branch",
        id: string,
        address: string,
        phone: string,
        email: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateUserBusinessesSubscription = {
  onCreateUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateUserBusinessesSubscription = {
  onUpdateUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteUserBusinessesSubscription = {
  onDeleteUserBusinesses:  {
    __typename: "UserBusinesses",
    id: string,
    owner:  {
      __typename: "User",
      id: string,
      givenName: string,
      familyName: string,
      userName: string,
      email: string | null,
      phone: string | null,
      userType: UserType,
      bookings:  {
        __typename: "ModelBookingConnection",
        nextToken: string | null,
      } | null,
      businesses:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
    } | null,
    business:  {
      __typename: "Business",
      id: string,
      name: string,
      email: string,
      phone: string,
      owners:  {
        __typename: "ModelUserBusinessesConnection",
        nextToken: string | null,
      } | null,
      branches:  {
        __typename: "ModelBranchConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
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
    bookings:  {
      __typename: "ModelBookingConnection",
      items:  Array< {
        __typename: "Booking",
        id: string,
        createdAt: string,
        start: string,
        end: string,
        status: BookingStatus,
      } | null > | null,
      nextToken: string | null,
    } | null,
    businesses:  {
      __typename: "ModelUserBusinessesConnection",
      items:  Array< {
        __typename: "UserBusinesses",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
