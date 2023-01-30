import React, { FC, PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigation } from "./bottom-tab-navigation";
import { reportConfig as reportTripConfig } from 'tabs/trips';
import { useTheme } from "@rneui/themed";

const { Navigator, Screen } = createNativeStackNavigator();

export const PMNavigation: FC<PropsWithChildren> = ({children}) => {
    const { theme } = useTheme();
    const navigatorOptions = {
        initialRouteName: "tabs",
        screenOptions: {
            headerStyle: {
                backgroundColor: theme.colors.background,
            },
            headerTitleStyle: {
                color: theme.colors.black,
            },
            headerTintColor: theme.colors.black
        }
    };
    return (
        <NavigationContainer>
            <Navigator
                { ...navigatorOptions }
            >
                <Screen
                    name="tabs"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />
                <Screen {...reportTripConfig}/>
                {children}
            </Navigator>
        </NavigationContainer>
    )
}