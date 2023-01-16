import { gql } from "graphql-request";
import { useGqlQuery } from "../../api";
import { QUERY_KEY } from "../../contants";
import { FindAssignedTripsQuery } from "../../generated/graphql";
import { GraphQLError } from "graphql";

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

export type UseAssignedTrips = () => {
    data: FindAssignedTripsQuery | undefined;
    isError: boolean;
    error: GraphQLError | null;
    isLoading: boolean;
}

export const useAssignedTrips: UseAssignedTrips = () => {
    const { data, isError, error, isLoading } = useGqlQuery<FindAssignedTripsQuery>(QUERY_KEY.ASSIGNED_TRIPS, findAssignedTripsGQL, { orderBy: "DESC" });

    return {
        data,
        isError,
        error,
        isLoading
    }
}