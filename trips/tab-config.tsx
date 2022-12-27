import React from "react";
import { TripsTab } from "./tab";
import { Entypo } from "@expo/vector-icons";
import type { BottomTabNavigationEventMap, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteConfig, TabNavigationState } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

export type TripsScreenConfig =  RouteConfig<
RootStackParamList, 
"Trips", 
TabNavigationState<ParamListBase>, 
BottomTabNavigationOptions, 
BottomTabNavigationEventMap
>;

export const createTripsTabConfig = ( commonOptions: BottomTabNavigationOptions = {} ):TripsScreenConfig =>({
    name: "Trips",
    component: TripsTab,
    options: {
        ...commonOptions,
        tabBarIcon: ({size, color}) => <Entypo name="map" size={size} color={color}/>
    }
})