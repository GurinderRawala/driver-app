import { gql } from "graphql-request";
import { useGqlQuery } from "../../api";
import { QUERY_KEY } from "../../contants";
import { FindAssignedTripsQuery } from "../../generated/graphql";
import { GraphQLError } from "graphql";

export const findAssignedTripsGQL = gql`
    query findAssignedTrips{
        findAssignedTrips{
            id
            tripId
            bol
            assignedTo
            tripInfo
            createdAt
            updatedAt
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
    const { data, isError, error, isLoading } = useGqlQuery<FindAssignedTripsQuery>(QUERY_KEY.ASSIGNED_TRIPS, findAssignedTripsGQL, {});

    return {
        data,
        isError,
        error,
        isLoading
    }
}