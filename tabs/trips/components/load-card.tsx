import React, { FC } from "react";
import { Card, makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { Load, Maybe } from "generated/graphql";
import { PMCard } from "components/cards";
import { PMText } from "components/shared";

export interface LoadCardProps{
    tripInfo: Load;
}
export const LoadCard: FC<LoadCardProps> = ({tripInfo}) =>{
    const styles = useTripsCardStyles();
    const shipperInfo = tripInfo.shipper.map(parseJSON);
    const receiverInfo = tripInfo.receiver.map(parseJSON);
    return (
        <PMCard containerStyle={styles.container}>
            <View style={styles.body}>
                {
                    shipperInfo.map(mapToKeysAndValues)
                }
                <Card.Divider />
                {
                    receiverInfo.map(mapToKeysAndValues)
                }
            </View>
        </PMCard>
    )
}

export const mapToKeysAndValues = (info: Record<string, string>, index: number) =>{
    const styles = useTripsCardStyles();
    const keys = Object.keys(info)
    return(
        <View key={index}>
            {
                keys.map((key, index) =>(
                    <View key={[key,index].join("-")}>
                        <PMText style={styles.infoTitle}>{key.toUpperCase()}</PMText>
                        <PMText style={styles.info}>{info[key]}</PMText>
                    </View>
                ))
            }
        </View>
    )
}

export const parseJSON = (info: Maybe<string>) => JSON.parse(info as string)

export const useTripsCardStyles = makeStyles(
    () => (
        {
            container: {
                width: 400
            },
            heading: {
                textAlign: "center"
            },
            body: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            infoContainer:{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 5
            },
            infoTitle:{
                flex: 2,
                fontWeight: "900",
                textAlign: "left"
            },
            info:{
                flex: 3,
                fontWeight: "600",
                textAlign: "left"
            }
        }
    )
)