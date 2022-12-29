/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Date: any;
};

/** Query data from driver app graphql */
export type Query = {
  readonly driverInfo: Maybe<Driver>;
  readonly findAssignedLoads: Maybe<ReadonlyArray<Maybe<Load>>>;
  readonly findAssignedTrips: Maybe<ReadonlyArray<Maybe<Trip>>>;
  readonly findTrailers: Maybe<ReadonlyArray<Maybe<Trailer>>>;
};


/** Query data from driver app graphql */
export type QueryFindTrailersArgs = {
  id: InputMaybe<Scalars['ID']>;
  trailerNo: InputMaybe<Scalars['String']>;
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

export type Trip = {
  readonly assignedTo: Scalars['String'];
  readonly bol: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly clientid: Scalars['String'];
  readonly createdAt: Scalars['Date'];
  readonly id: Scalars['String'];
  readonly pod: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly tripId: Scalars['Int'];
  readonly tripInfo: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly updatedAt: Scalars['Date'];
};

export type FindAssignedTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAssignedTripsQuery = { readonly findAssignedTrips: ReadonlyArray<{ readonly id: string, readonly tripId: number, readonly bol: ReadonlyArray<string | null> | null, readonly assignedTo: string, readonly tripInfo: ReadonlyArray<string | null>, readonly createdAt: any, readonly updatedAt: any }> };
