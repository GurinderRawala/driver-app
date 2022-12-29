import React, { FC } from "react";
import { Card, makeStyles } from "@rneui/themed";
import { useAssignedTrips } from "./hooks";

import { FlatList, View } from "react-native";

import { LoadCard } from "./components/load-card";
import { FindAssignedTripsQuery, Load } from "generated/graphql";
import { PMLoadingSpinner, PMText, PMView } from "components/shared";

export const TripsTab: FC = () =>{
    const s = useTripsTabStyle();
    const { data, isError, isLoading } = useAssignedTrips();
    if(isLoading){
        return <PMLoadingSpinner />
    }

    const renderItem = ({item}: { item: FindAssignedTripsQuery["findAssignedTrips"][number]}) =>{
        const tripInfo: Load[] = item?.tripInfo.map(load => JSON.parse(load as string));
        return (
            <View>
                <PMText h3 style={s.tripNumber}>Trip: {item.tripId}</PMText>
                <Card.Divider />
                {
                    tripInfo.map((info) => <LoadCard tripInfo={info} key={info.id}/>)
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