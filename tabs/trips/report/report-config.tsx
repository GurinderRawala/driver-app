import { ParamListBase, RouteConfig, StackNavigationState } from "@react-navigation/native";
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { SCREEN_OPTIONS } from "./constants";
import { ReportLoad } from "./report-load";

export type ReportRouteConfig =  RouteConfig<
ParamListBase, 
"LoadReport", 
StackNavigationState<ParamListBase>, 
NativeStackNavigationOptions, 
NativeStackNavigationEventMap>

export const reportConfig: ReportRouteConfig = {
    name: SCREEN_OPTIONS.NAME,
    component: ReportLoad,
    options: {
        title: SCREEN_OPTIONS.TITLE,
        
    }
}