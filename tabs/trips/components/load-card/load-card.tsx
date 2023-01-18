import React, { FC } from "react";
import { View } from "react-native";

import { LoadModifiedOutput, ShipperOutput, ReceiverOutput } from "generated/graphql";
import { PMCard } from "components/cards";
import { PMText } from "components/shared";
import { useTripsCardStyles } from "./styles";
import { LoadInfo } from "./load-info";
import { pick } from "lodash";
import { Card } from "@rneui/themed";
import { OpenURL } from "../open-url";
import { createGoogleMapURL } from "tabs/trips/utils";

export interface LoadCardProps{
    tripInfo: LoadModifiedOutput;
}
export const LoadCard: FC<LoadCardProps> = ({tripInfo}) =>{
    const styles = useTripsCardStyles();

    const { shipper, receiver } = tripInfo;

    return (
        <>
            <PMCard>
                <Card.Title style={{ fontFamily: "TitilliumRegular"}}>Pick up</Card.Title>
                <Card.Divider />
                <View style={styles.body}>
                    {
                        shipper.map(
                            (ship, i) => (
                                <View style={{marginBottom: 3}} key={i}>
                                    <PMText h4>{ship.shipperName}</PMText>
                                    <ShipperReceiverInfo resourceType="shipper" shipper={ship}/>
                                </View>
                            )
                        )
                    }
                </View>
                <LoadInfo 
                    info={pick(tripInfo, "poNumber", "trailerNo", "hazmat", "commodity", "specialInstructions")}
                />
            </PMCard>

            <PMCard>
                <Card.Title style={{ fontFamily: "TitilliumRegular"}}>Delivery</Card.Title>
                <Card.Divider />
                <View style={styles.body}>
                    {
                        receiver.map(
                            (rec, i) => (
                                <View style={{marginBottom: 3}} key={i}>
                                    <PMText h4>{rec.receiverName}</PMText>
                                    <ShipperReceiverInfo resourceType="receiver" receiver={rec}/>
                                </View>
                            )
                        )
                    }
                </View>
            </PMCard>
        </>
    )
}

export interface ShipperReceiverInfoProps{
    shipper?: ShipperOutput;
    receiver?: ReceiverOutput;
    resourceType: "shipper" | "receiver";
}

export const ShipperReceiverInfo: FC<ShipperReceiverInfoProps> = ({ 
    shipper,
    receiver,
    resourceType
}) =>{
    const styles = useTripsCardStyles();
    switch(resourceType){
    case "shipper":
        return(
            <View style={styles.infoContainer}>
                <PMText style={styles.infoTitle}>Pick up address:</PMText>
                <PMText style={styles.info}>
                    <OpenURL url={createGoogleMapURL(shipper.address)}>
                        <PMText style={{textDecorationLine: "underline"}}>
                            { Object.values(shipper.address).join(" ") }
                        </PMText>
                    </OpenURL>
                </PMText>
            </View>
        )
    case "receiver":
        return(
            <View style={styles.infoContainer}>
                <PMText style={styles.infoTitle}>Delivery address:</PMText>
                <PMText style={styles.info}>
                    <OpenURL url={createGoogleMapURL(receiver.address)}>
                        <PMText style={{textDecorationLine: "underline"}}>
                            { Object.values(receiver.address).join(" ") }
                        </PMText>
                    </OpenURL>
                </PMText>
            </View>
        )
    default:
        return null
    }
}