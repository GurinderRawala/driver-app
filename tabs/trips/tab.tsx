import React, { FC } from "react";
import { Card, makeStyles } from "@rneui/themed";
import { useAssignedTrips } from "./hooks";

import { FlatList, View } from "react-native";

import { LoadCard } from "./components/load-card";
import { FindAssignedTripsQuery, LoadModifiedOutput } from "generated/graphql";
import { PMLoadingOrError, PMText, PMView } from "components/shared";
import { TripActionButton } from "./components/trip-action-button";

export const TripsTab: FC = () =>{
    const s = useTripsTabStyle();
    const { data, isError, isLoading } = useAssignedTrips();
    if(isLoading || isError){
        return <PMLoadingOrError isError={isError} isLoading={isLoading} />
    }

    const renderItem = ({item}:{ item: FindAssignedTripsQuery["findAssignedTrips"][number] }) =>{
    
        return (
            <View>
                <PMText h3 style={s.tripNumber}>Trip: {item.tripId}</PMText>
                <Card.Divider />
                <FlatList 
                    data={item.tripInfo}
                    renderItem={({item}) => <LoadCard tripInfo={item as LoadModifiedOutput} key={item.id}/>}
                    keyExtractor={(item) => item?.id}
                />
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

            <TripActionButton />
        </PMView>
    )
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