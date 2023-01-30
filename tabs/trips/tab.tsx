import React, { FC } from "react";
import { Card, makeStyles } from "@rneui/themed";
import { UseAssignedTripsReturn, useAssignedTrips, useResponseToTrip } from "./hooks";

import { FlatList, View } from "react-native";

import { LoadCard } from "./components/load-card";
import { FindAssignedTripsQuery, LoadModifiedOutput, DriverResponseEnum } from "generated/graphql";
import { PMLoadingOrError, PMText, PMView } from "components/shared";
import { TripActionButton } from "./components/trip-action-button";

export type AssignedTrip = FindAssignedTripsQuery["findAssignedTrips"][number];

export const TripsTab: FC = () =>{
    const s = useTripsTabStyle();
    const { data, isError, isLoading, refetchTrips } = useAssignedTrips();

    const acceptRejectOnPress = useAcceptRejectTripButton(refetchTrips)

    if(isLoading || isError){
        return <PMLoadingOrError isError={isError} isLoading={isLoading} />
    }

    const renderItem = ({item}:{ item: AssignedTrip }) =>{
    
        return (
            <View>
                <PMText h3 style={s.tripNumber}>Trip: {item.tripId}</PMText>
                <Card.Divider />
                <FlatList 
                    data={item.tripInfo}
                    renderItem={({item}) => <LoadCard tripInfo={item as LoadModifiedOutput} key={item.id}/>}
                    keyExtractor={(item) => item?.id}
                />
                {
                    item.state === "ASSIGNED" && (
                        <TripActionButton 
                            acceptButtonProps={
                                {
                                    onPress: () => {
                                        acceptRejectOnPress(item.id, DriverResponseEnum.Accepted)
                                    }
                                }
                            }
                            rejectButtonProps={
                                {
                                    onPress: () =>{
                                        acceptRejectOnPress(item.id, DriverResponseEnum.Rejected)
                                    }
                                }
                            }
                        />
                    )
                }
            </View>
        )
    }
    return (
        <PMView style={s.container}>
            {
                data?.findAssignedTrips && !isError && (
                    <FlatList 
                        data={data.findAssignedTrips}
                        renderItem={renderItem}
                        keyExtractor={(item) => item?.id as string}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                )
            }
        </PMView>
    )
}


export const useAcceptRejectTripButton = (refetch: UseAssignedTripsReturn["refetchTrips"] ) => {
    const { updateTripState  } = useResponseToTrip();
    return (id: AssignedTrip["id"], driverResponse: DriverResponseEnum) => {
        updateTripState({
            id,
            driverResponse,
        }, {
            onSuccess: () => {
                refetch();
                console.log("Successfully updated");
            },
            onError: (error) => {
                console.log("Failed to update", {error});
            }
        })
    }
}

export const useTripsTabStyle =  makeStyles(
    () => ({
        container:  {
            flex: 1,
            justifyContent: 'space-evenly',
            paddingTop: 75,
        },
        tripNumber: {
            textAlign: 'center',
        }
    })
)