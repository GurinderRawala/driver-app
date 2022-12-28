import React, { FC } from "react";
import { PMText, PMView } from "../components/shared";
import { makeStyles } from "@rneui/themed";

export const TripsTab: FC = () =>{
    const s = useTripsTabStyle();
   
    return (
        <PMView style={s.container}>
            <PMText h2>Trips Page</PMText>
        </PMView>
    )
}

export const useTripsTabStyle =  makeStyles(
    (theme) => ({
        container:  {
            flex: 1,
            justifyContent: 'space-evenly',
            padding: theme.spacing.xs
        }
    })
)