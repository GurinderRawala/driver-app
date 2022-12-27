import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { useTheme } from '@rneui/themed';
import { tripsTabConfig } from '../trips';
import { RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const { Navigator, Screen } = Tab;

export const BottomTabNavigation: FC = () =>{
    const { theme } = useTheme();
   
    const navigatorProps: { screenOptions: BottomTabNavigationOptions }  = {
        screenOptions:{
            tabBarStyle: {
                backgroundColor: theme.colors.primary,
                borderTopColor: theme.colors.primary,
            },
            tabBarActiveTintColor: theme.colors.secondary,
            headerShown: false,
        }
    }
    return (
        <Navigator
            initialRouteName='Trips'
            { ...navigatorProps}
        >
            <Screen { ...tripsTabConfig }/>
        </Navigator>
    )
}