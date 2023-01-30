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
import { NavigateToReport } from "tabs/trips/report";

export interface LoadCardProps{
    tripInfo: LoadModifiedOutput;
}
export const LoadCard: FC<LoadCardProps> = ({tripInfo}) =>{
    const styles = useTripsCardStyles();

    const { shipper, receiver } = tripInfo;

    return (
        <>
            <PMCard>
                <Card.Title style={{ fontFamily: "Titillium" }}>Pick up</Card.Title>
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
                <Card.Title style={{ fontFamily: "Titillium" }}>Delivery</Card.Title>
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
    switch(resourceType){
    case "shipper":
        return(
            <>
                <LoadAddress  address={shipper.address}/>
                <View>
                    {
                        !shipper.arrival || !shipper.depart && (
                            <NavigateToReport 
                                loadInfo={{
                                    stopID: shipper.stopID,
                                    arrival: shipper.arrival,
                                    depart: shipper.depart
                                }}
                                
                                buttonProps={{
                                    title: "Report pick up",
                                    style: {
                                        width: "50%",
                                        height: 35,
                                        marginTop: 10
                                    },
                                    size: "sm",
                                    titleStyle: {
                                        fontSize: 14,
                                    },
                                    color: "success"
                                }}
                            />
                        )
                    }
                </View>
            </>
        )
    case "receiver":
        return(
            <LoadAddress address={receiver.address}/>
        )
    default:
        return null
    }
}

export interface LoadAddressProps{
    address: ShipperOutput["address"]
}

export const LoadAddress: FC<LoadAddressProps> = ({address}) => {
    const styles = useTripsCardStyles();
    return(
        <View style={styles.infoContainer}>
            <PMText style={styles.infoTitle}>Pick up address:</PMText>
            <PMText style={styles.info}>
                <OpenURL url={createGoogleMapURL(address)}>
                    <PMText style={{textDecorationLine: "underline"}}>
                        { Object.values(address).join(" ") }
                    </PMText>
                </OpenURL>
            </PMText>
        </View>
    )
}