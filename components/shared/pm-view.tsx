import React, { FC } from "react";
import { LayoutChangeEvent, ScrollViewProps, ScrollView, View, ViewProps } from "react-native";


import { useLoadExpoFont } from "theme/hooks";
import { useStyles } from "./styles";
import { merge } from "lodash";
import { PMLoadingOrError } from "./loading-error";
import { updateLayoutStore } from "store";

const SCROLL_VIEW_DEFAULT_PADDING = 75;

// This is custom permiles ScrollView and View with font and theme. Use these components to wrap the tab once and do not reuse 
// inside the same component as it will mess up the layout. 
export const PMScrollView: FC<ScrollViewProps> = (props) =>{
    const  { onLayoutRootView, isFontLoaded } = useLoadExpoFont();
    const style = useStyles();
    const assignableProps: ScrollViewProps = {
        ...props,
        style: merge({}, props.style, style.view, {paddingTop: SCROLL_VIEW_DEFAULT_PADDING}),
        onLayout: (e: LayoutChangeEvent) => {
            onStoreLayout(e);
            onLayoutRootView()
        }
    }
    if(!isFontLoaded){
        return <PMLoadingOrError />
    }
    return(
        <ScrollView {...assignableProps}/>
    )
}


export const PMView: FC<ViewProps> = (props) =>{
    const  { onLayoutRootView, isFontLoaded } = useLoadExpoFont();
    const style = useStyles();
    const assignableProps: ViewProps = {
        ...props,
        style: merge({}, props.style, style.view),
        onLayout: (e: LayoutChangeEvent) => {
            onStoreLayout(e);
            onLayoutRootView()
        }
    }

    if(!isFontLoaded){
        return <PMLoadingOrError />
    }
   
    return(
        <View {...assignableProps}/>
    )
}


export const onStoreLayout = (e: LayoutChangeEvent): void =>{
    const {width,height} = e.nativeEvent.layout;
    updateLayoutStore("updateLayoutStore", {width, height});
}