export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A special custom Scalar type for Dates that converts to a ISO formatted string  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Date: any;
};

/** Query data from driver app graphql */
export type Query = {
  readonly driverInfo: Maybe<Driver>;
  readonly findAssignedLoads: Maybe<ReadonlyArray<Maybe<Load>>>;
  readonly findAssignedTrips: Maybe<ReadonlyArray<Maybe<TripModifiedOutput>>>;
  readonly trailers: Maybe<ReadonlyArray<Maybe<Trailer>>>;
};


/** Query data from driver app graphql */
export type QueryFindAssignedLoadsArgs = {
  orderBy: InputMaybe<Scalars['String']>;
  where: InputMaybe<LoadInput>;
};


/** Query data from driver app graphql */
export type QueryFindAssignedTripsArgs = {
  orderBy: InputMaybe<Scalars['String']>;
  where: InputMaybe<TripInput>;
};


/** Query data from driver app graphql */
export type QueryTrailersArgs = {
  orderBy: InputMaybe<Scalars['String']>;
  where: InputMaybe<TrailerInput>;
};

/** Trip output fields */
export type TripModifiedOutput = {
  /** The driver ID of the assigned driver */
  readonly assignedTo: Scalars['ID'];
  /** BOL of the trip, aws file download link */
  readonly bol: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The ID of the trip, automatically generated */
  readonly id: Scalars['ID'];
  /** POD of the trip, aws file download link */
  readonly pod: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** State (state: string), CREATED | ASSIGNED | MOVING | DELIVERED | PAID */
  readonly state: Scalars['String'];
  /** Total miles of the trip */
  readonly totalMiles: Maybe<Scalars['Float']>;
  /** Trip id number, automatically generated */
  readonly tripId: Scalars['Int'];
  /** The trip information */
  readonly tripInfo: ReadonlyArray<Maybe<LoadModifiedOutput>>;
};

/** Address information */
export type AddressOutput = {
  /** Name of the city */
  readonly city: Scalars['String'];
  /** Name of the country */
  readonly country: Maybe<Scalars['String']>;
  /** Postal code for the address important */
  readonly postalCode: Scalars['String'];
  /** Name of the state/province */
  readonly state: Scalars['String'];
  /** Street name */
  readonly streetName: Scalars['String'];
  /** Unit number of bussiness or house number */
  readonly unitNumber: Scalars['String'];
};

export type Driver = {
  readonly address: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly awaitingSignup: Scalars['Boolean'];
  readonly clientid: Scalars['String'];
  readonly createdAt: Scalars['Date'];
  readonly driver_id: Scalars['String'];
  readonly drivers_licence: Scalars['String'];
  readonly email: Scalars['String'];
  readonly filepath: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly firstname: Scalars['String'];
  readonly id: Scalars['String'];
  readonly lastname: Scalars['String'];
  readonly licence_state: Scalars['String'];
  readonly password: Scalars['String'];
  readonly phone: Scalars['String'];
  readonly reg_date: Scalars['Date'];
  readonly truckno: Scalars['String'];
  readonly updatedAt: Scalars['Date'];
};

/** Driver app mutations */
export type DriverMutations = {
  readonly responseToTrip: Maybe<TripModifiedOutput>;
};


/** Driver app mutations */
export type DriverMutationsResponseToTripArgs = {
  driverResponse: DriverResponseEnum;
  id: Scalars['ID'];
};

export enum DriverResponseEnum {
  Accepted = 'ACCEPTED',
  Assigned = 'ASSIGNED',
  Created = 'CREATED',
  Delivered = 'DELIVERED',
  Delivering = 'DELIVERING',
  Loaded = 'LOADED',
  Loading = 'LOADING',
  Moving = 'MOVING',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Load = {
  readonly assignedTo: Maybe<Scalars['String']>;
  readonly brokerId: Scalars['String'];
  readonly clientid: Scalars['String'];
  readonly commodity: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['Date'];
  readonly filepath: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly hazmat: Scalars['Boolean'];
  readonly id: Scalars['String'];
  readonly loadId: Maybe<Scalars['Int']>;
  readonly poNumber: Scalars['String'];
  readonly receiver: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly shipper: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly specialInstructions: Maybe<Scalars['String']>;
  readonly state: Scalars['String'];
  readonly totalWeight: Maybe<Scalars['String']>;
  readonly trailerNo: Maybe<Scalars['String']>;
  readonly tripId: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['Date'];
};

export type LoadInput = {
  readonly assignedTo: InputMaybe<Scalars['String']>;
  readonly brokerId: InputMaybe<Scalars['String']>;
  readonly clientid: InputMaybe<Scalars['String']>;
  readonly commodity: InputMaybe<Scalars['String']>;
  readonly createdAt: InputMaybe<Scalars['Date']>;
  readonly filepath: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly hazmat: InputMaybe<Scalars['Boolean']>;
  readonly id: InputMaybe<Scalars['String']>;
  readonly loadId: InputMaybe<Scalars['Int']>;
  readonly poNumber: InputMaybe<Scalars['String']>;
  readonly receiver: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly shipper: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly specialInstructions: InputMaybe<Scalars['String']>;
  readonly state: InputMaybe<Scalars['String']>;
  readonly totalWeight: InputMaybe<Scalars['String']>;
  readonly trailerNo: InputMaybe<Scalars['String']>;
  readonly tripId: InputMaybe<Scalars['String']>;
  readonly updatedAt: InputMaybe<Scalars['Date']>;
};

/** Loads output information */
export type LoadModifiedOutput = {
  /** Load assigned to (driverId: uuid) */
  readonly assignedTo: Maybe<Scalars['ID']>;
  /** Load brokerId (brokerId: uuid) */
  readonly brokerId: Maybe<Scalars['String']>;
  /** Commodity of the load (commodity: string) */
  readonly commodity: Maybe<Scalars['String']>;
  /** Is load is hazmat yes or no? (hazmat: boolean) */
  readonly hazmat: Scalars['Boolean'];
  /** The uuid of load, automatically generated if not provided */
  readonly id: Scalars['ID'];
  /** Po number (poNumber: string) */
  readonly poNumber: Scalars['String'];
  /** List of receivers (receiver: [string]) */
  readonly receiver: ReadonlyArray<Maybe<ReceiverOutput>>;
  /** List of shippers (shipper: [string]) */
  readonly shipper: ReadonlyArray<Maybe<ShipperOutput>>;
  /** Special instructions (specialInstructions: string) */
  readonly specialInstructions: Maybe<Scalars['String']>;
  /** State (state: string), CREATED | ASSIGNED | MOVING | DELIVERED | PAID */
  readonly state: Scalars['String'];
  /** Total weight (totalWeight: string) */
  readonly totalWeight: Maybe<Scalars['String']>;
  /** Assigned Trailer number (trailerNo: string) */
  readonly trailerNo: Maybe<Scalars['String']>;
};

/** Receiver information */
export type ReceiverOutput = {
  /** Address of the receiver */
  readonly address: AddressOutput;
  /** Arrival at the receiver */
  readonly arrival: Maybe<Scalars['String']>;
  /** Delivery appointment date and time */
  readonly deliveryAppointment: Maybe<Scalars['String']>;
  /** Depart at the receiver */
  readonly depart: Maybe<Scalars['String']>;
  /** Email of the receiver */
  readonly email: Maybe<Scalars['String']>;
  /** Phone number of the receiver */
  readonly phoneNumber: Maybe<Scalars['String']>;
  /** The name of the receiver */
  readonly receiverName: Scalars['String'];
};

/** Shipper information */
export type ShipperOutput = {
  /** Address of the shipper */
  readonly address: AddressOutput;
  /** Arrival at the shipper */
  readonly arrival: Maybe<Scalars['String']>;
  /** Depart at the shipper */
  readonly depart: Maybe<Scalars['String']>;
  /** Email of the shipper */
  readonly email: Maybe<Scalars['String']>;
  /** Phone number of the shipper */
  readonly phoneNumber: Maybe<Scalars['String']>;
  /** Pick up appointment date and time */
  readonly pickUpAppointment: Maybe<Scalars['String']>;
  /** The name of the shipper */
  readonly shipperName: Scalars['String'];
};

export type Trailer = {
  readonly clientid: Scalars['String'];
  readonly createdAt: Scalars['Date'];
  readonly filepath: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id: Scalars['String'];
  readonly licencePlate: Scalars['String'];
  readonly licenceState: Scalars['String'];
  readonly make: Scalars['String'];
  readonly model: Scalars['String'];
  readonly notes: Maybe<Scalars['String']>;
  readonly safetyExpire: Scalars['String'];
  readonly trailerAttributes: Scalars['String'];
  readonly trailerNo: Scalars['String'];
  readonly updatedAt: Scalars['Date'];
  readonly vinNumber: Maybe<Scalars['String']>;
  readonly year: Scalars['String'];
};

export type TrailerInput = {
  readonly clientid: InputMaybe<Scalars['String']>;
  readonly createdAt: InputMaybe<Scalars['Date']>;
  readonly filepath: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id: InputMaybe<Scalars['String']>;
  readonly licencePlate: InputMaybe<Scalars['String']>;
  readonly licenceState: InputMaybe<Scalars['String']>;
  readonly make: InputMaybe<Scalars['String']>;
  readonly model: InputMaybe<Scalars['String']>;
  readonly notes: InputMaybe<Scalars['String']>;
  readonly safetyExpire: InputMaybe<Scalars['String']>;
  readonly trailerAttributes: InputMaybe<Scalars['String']>;
  readonly trailerNo: InputMaybe<Scalars['String']>;
  readonly updatedAt: InputMaybe<Scalars['Date']>;
  readonly vinNumber: InputMaybe<Scalars['String']>;
  readonly year: InputMaybe<Scalars['String']>;
};

export type TripInput = {
  readonly assignedTo: InputMaybe<Scalars['String']>;
  readonly bol: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly clientid: InputMaybe<Scalars['String']>;
  readonly createdAt: InputMaybe<Scalars['Date']>;
  readonly id: InputMaybe<Scalars['String']>;
  readonly pod: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly state: InputMaybe<Scalars['String']>;
  readonly totalMiles: InputMaybe<Scalars['Float']>;
  readonly tripId: InputMaybe<Scalars['Int']>;
  readonly tripInfo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly updatedAt: InputMaybe<Scalars['Date']>;
};

export type FindAssignedTripsQueryVariables = Exact<{
  where: InputMaybe<TripInput>;
  orderBy: InputMaybe<Scalars['String']>;
}>;


export type FindAssignedTripsQuery = { readonly findAssignedTrips: ReadonlyArray<{ readonly id: string, readonly state: string, readonly tripId: number, readonly assignedTo: string, readonly totalMiles: number | null, readonly bol: ReadonlyArray<string | null> | null, readonly pod: ReadonlyArray<string | null> | null, readonly tripInfo: ReadonlyArray<{ readonly id: string, readonly assignedTo: string | null, readonly commodity: string | null, readonly poNumber: string, readonly brokerId: string | null, readonly hazmat: boolean, readonly specialInstructions: string | null, readonly trailerNo: string | null, readonly totalWeight: string | null, readonly shipper: ReadonlyArray<{ readonly shipperName: string, readonly phoneNumber: string | null, readonly email: string | null, readonly address: { readonly unitNumber: string, readonly streetName: string, readonly city: string, readonly state: string, readonly postalCode: string, readonly country: string | null } } | null>, readonly receiver: ReadonlyArray<{ readonly receiverName: string, readonly phoneNumber: string | null, readonly email: string | null, readonly address: { readonly unitNumber: string, readonly streetName: string, readonly city: string, readonly state: string, readonly postalCode: string, readonly country: string | null } } | null> } | null> } | null> | null };

export type ResponseToTripMutationVariables = Exact<{
  driverResponse: DriverResponseEnum;
  id: Scalars['ID'];
}>;


export type ResponseToTripMutation = { readonly responseToTrip: { readonly id: string, readonly tripId: number, readonly state: string, readonly totalMiles: number | null } | null };
