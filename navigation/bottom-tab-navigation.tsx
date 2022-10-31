import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Tab;

const TestHomeScreen = () => <Text>Home Screen</Text>

export const BottomTabNavigation: FC = () =>{
    return (
        <Navigator
            initialRouteName='Home'
        >
            <Screen name="Home" component={TestHomeScreen} />
        </Navigator>
    )
}