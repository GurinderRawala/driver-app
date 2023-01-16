import { LoadModifiedOutput } from "generated/graphql";
import React,{ FC } from "react";
import { useTripsCardStyles } from "./styles";
import { StyleProp, View, ViewStyle } from "react-native";
import { PMText } from "components/shared";
import { Card, TextProps } from "@rneui/themed";
import { isBoolean } from "lodash";

export interface LoadInfoProps{
    info: Pick<LoadModifiedOutput, 
    "poNumber" | "trailerNo" | "hazmat" | "commodity" | "specialInstructions"
    >,
}

export const LoadInfo: FC<LoadInfoProps> = ({
    info,
}) => {
    const s = useTripsCardStyles();
    const styleKeyValuePair: KeyValuePairProps["styleProps"] = {
        containerStyle: s.infoContainer,
        keyStyle: s.infoTitle,
        valueStyle: s.info
    }

    const titles: string[] = ["PO Number", "Trailer No", "Hazmat", "Commodity", "Instructions"]

    return (
        <View>
            <PMText h4 style={{marginTop: 10}}>Details</PMText>
            <Card.Divider />
            {
                Object.keys(info).map(
                    (title: keyof LoadInfoProps["info"], i: number) => (
                        <KeyValuePair 
                            key={i}
                            infoKey={titles[i]}
                            infoValue={info[title]}
                            styleProps={styleKeyValuePair}
                        />
                    )
                )
            }
        </View>
    )
}

export interface KeyValuePairProps{
    infoKey: string;
    infoValue: string | boolean;
    styleProps: {
        containerStyle: StyleProp<ViewStyle>;
        keyStyle: TextProps["style"];
        valueStyle: TextProps["style"];
    }
    
}

export const KeyValuePair: FC<KeyValuePairProps> = ({ infoKey, infoValue, styleProps }) => (
    <View style={styleProps.containerStyle}>
        <PMText style={styleProps.keyStyle}>{infoKey}:</PMText>
        <PMText style={styleProps.valueStyle}>{
            isBoolean(infoValue)
                ? ( infoValue ? "Yes" : "No" )
                : infoValue
        }</PMText>
    </View>
)