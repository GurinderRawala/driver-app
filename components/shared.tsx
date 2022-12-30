import { Text, TextProps, ThemeMode, makeStyles, useThemeMode } from "@rneui/themed";
import React, { FC, useEffect, useRef } from "react";
import { merge } from 'lodash';
import { StatusBar, View, ViewProps, Image, Animated, Easing, StatusBarProps, ScrollViewProps, ScrollView, LayoutChangeEvent } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

import { useLoadExpoFont } from "../theme/hooks";
import { updateLayoutStore } from "store";

const STATUS_BAR_STYLE: Record<ThemeMode, StatusBarProps["barStyle"]> = {
    light: "dark-content",
    dark: "light-content"
};
const SPINNER_ICON_SIZE = 55;

export const PMText: FC<TextProps> = (props) =>{
    const style = useStyles();
    return(
        <Text { ...props } style={merge({}, props.style, style.text)}/>
    )
}

export const PMLoadingSpinner: FC = () =>{
    const animateRef = useRef(new Animated.Value(0));
    const style = useStyles();

    const spin = animateRef.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const animationEffect = () => Animated.timing(animateRef.current, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true
    });

    useEffect(
        () =>{
            Animated.loop(
                animationEffect()
            ).start();
        }, []
    )
    
    return(
        <View style={{ ...style.view, ...style.spinnerContainer }}>
            <Image source={require('../assets/permiles-icon.png')} style={{ resizeMode: "contain", ...style.permilesImage }}/>
            <Animated.View style={{
                transform: [{ rotate: spin }]
            }}
            >
                <EvilIcons name="spinner-3" size={SPINNER_ICON_SIZE} color={style.spinnerIcon.color} />
            </Animated.View>
        </View>
    )
}

export const onStroreLayout = (e: LayoutChangeEvent): void =>{
    const {width,height} = e.nativeEvent.layout;
    updateLayoutStore("updateLayoutStore", {width, height});
}

export const PMView: FC<ViewProps> = (props) =>{
    const  { onLayoutRootView, isFontLoaded } = useLoadExpoFont();
    const style = useStyles();
    const assignableProps: ViewProps = {
        ...props,
        style: merge({}, props.style, style.view),
        onLayout: (e: LayoutChangeEvent) => {
            onStroreLayout(e);
            onLayoutRootView()
        }
    }

    if(!isFontLoaded){
        return <PMLoadingSpinner />
    }
   
    return(
        <View {...assignableProps}/>
    )
}

export const PMStatusBar: FC = () =>{
    const { mode } = useThemeMode();
    const style = useStyles();
    return  <StatusBar barStyle={STATUS_BAR_STYLE[mode]} backgroundColor={style.statusbar.backgroundColor} />
}
const SCROLL_VIEW_DEFAULT_PADDING = 75;
export const PMScrollView: FC<ScrollViewProps> = (props) =>{
    const  { onLayoutRootView, isFontLoaded } = useLoadExpoFont();
    const style = useStyles();
    const assignableProps: ScrollViewProps = {
        ...props,
        style: merge({}, props.style, style.view, {paddingTop: SCROLL_VIEW_DEFAULT_PADDING}),
        onLayout: (e: LayoutChangeEvent) => {
            onStroreLayout(e);
            onLayoutRootView()
        }
    }
    if(!isFontLoaded){
        return <PMLoadingSpinner />
    }
    return(
        <ScrollView {...assignableProps}/>
    )
}

export const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "Titillium-regular",
        color: theme.colors.black,
        fontWeight: "200"
    },
    view: {
        backgroundColor: theme.colors.background,
        padding: 1
    },
    statusbar: {
        backgroundColor: theme.colors.black
    },
    spinnerIcon: {
        color: theme.colors.black
    },
    permilesImage: {
        height: 120,
        width: 250 
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}));