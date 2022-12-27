import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { useTheme } from '@rneui/themed';
import { createTripsTabConfig } from '../trips';
import { RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const { Navigator, Screen } = Tab;

export const BottomTabNavigation: FC = () =>{
    const { theme } = useTheme();
    const screenCommonOptions: BottomTabNavigationOptions = {
        tabBarActiveTintColor: theme.colors.primary
    }
    const navigatorProps: { screenOptions: BottomTabNavigationOptions }  = {
        screenOptions:{
            tabBarStyle: {
                backgroundColor: theme.colors.secondary,
                borderTopColor: theme.colors.secondary,
            },
            tabBarActiveTintColor: "#fff",
            headerShown: false,
        }
    }
    return (
        <Navigator
            initialRouteName='Trips'
            { ...navigatorProps}
        >
            <Screen { ...createTripsTabConfig(screenCommonOptions) }/>
        </Navigator>
    )
}