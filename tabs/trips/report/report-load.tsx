import React,{ FC } from "react";

import { PMScrollView, PMText } from "components/shared";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

export type ReportLoadProps = NativeStackScreenProps<RootStackParamList, 'LoadReport'>;

export const ReportLoad: FC<ReportLoadProps> = ({route}) => {
    return(
        <PMScrollView>
            <PMText>{JSON.stringify(route?.params)}</PMText>
        </PMScrollView>
    )
}