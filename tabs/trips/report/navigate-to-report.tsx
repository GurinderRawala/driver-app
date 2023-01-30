import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { PMButton, PMButtonProps } from "components/pm-button";
import { SCREEN_OPTIONS } from "./constants";
import { RootStackParamList } from "navigation/types";

export type NavigateButtonProps = Omit<PMButtonProps, "onPress">

export interface NavigateToReportProps{
    buttonProps: NavigateButtonProps;
    loadInfo: RootStackParamList["LoadReport"]
}

export const NavigateToReport: FC<NavigateToReportProps> = ({ buttonProps, loadInfo }) => {
    const navigation = useNavigation();
    return (
        <PMButton 
            onPress={ () => navigation.navigate(SCREEN_OPTIONS.NAME as never, loadInfo as never) }
            {
                ...buttonProps
            }
        />
    )

}