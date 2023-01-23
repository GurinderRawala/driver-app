import { gql } from "graphql-request";
import { useGqlMutation, useGqlQuery } from "api";
import { QUERY_KEY } from "../../contants";
import { FindAssignedTripsQuery, ResponseToTripMutation, ResponseToTripMutationVariables } from "generated/graphql";
import { GraphQLError } from "graphql";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, UseMutateFunction } from "react-query";

export const findAssignedTripsGQL = gql`
query findAssignedTrips(
    $where: tripInput
    $orderBy: String 
){
	findAssignedTrips(
        where: $where
        orderBy: $orderBy
    ){
		id
		state
		tripId
		assignedTo
		totalMiles
		bol
		pod
		tripInfo {
			id
			assignedTo
			commodity
			poNumber
			brokerId
			hazmat
			specialInstructions
			shipper{
				shipperName 
				address{
					unitNumber 
					streetName 
					city 
					state 
					postalCode 
					country
			 } 
				phoneNumber 
				email
			}
			receiver{
				receiverName 
				address{
					unitNumber 
					streetName 
					city state 
					postalCode 
					country
				} 
				phoneNumber 
				email
			}
			trailerNo
			totalWeight
		}
	}
}
`;


export type UseAssignedTripsReturn = {
    data: FindAssignedTripsQuery | undefined;
    isError: boolean;
    error: GraphQLError | null;
    isLoading: boolean;
	refetchTrips: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<FindAssignedTripsQuery, GraphQLError>>
};

export type UseAssignedTrips = () => UseAssignedTripsReturn;

export const useAssignedTrips: UseAssignedTrips = () => {
    const { data, isError, error, isLoading, refetch } = useGqlQuery<FindAssignedTripsQuery>([QUERY_KEY.ASSIGNED_TRIPS, findAssignedTripsGQL], findAssignedTripsGQL, { orderBy: "DESC" });

    return {
        data,
        isError,
        error,
        isLoading,
        refetchTrips: refetch
    }
}


export const responseToTripGQL = gql`
	mutation responseToTrip(
		$driverResponse: driverResponseEnum!
		$id: ID!
	){
		responseToTrip(driverResponse: $driverResponse, id: $id){
			id
			tripId
			state
			totalMiles
		}
	}
`;

export type UseResponseToTripReturn = {
	updateTripState: UseMutateFunction<ResponseToTripMutation, unknown, ResponseToTripMutationVariables, unknown>;
	data: ResponseToTripMutation;
	isError: boolean;
	isLoading: boolean;
};

export type UseResponseToTrip = () => UseAssignedTripsReturn;

export const useResponseToTrip = () =>{
    const { mutate, data, isError, isLoading } = useGqlMutation<ResponseToTripMutation, unknown, ResponseToTripMutationVariables>(responseToTripGQL)

    return{
        updateTripState: mutate,
        data,
        isError,
        isLoading
    }
}