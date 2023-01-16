import React, { useEffect, useRef, FC } from "react";
import { View, Image, Animated, Easing } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

import { useStyles } from "./styles";
import { PMText } from "./pm-text";

export interface PMLoadingOrErrorProps{
    isError?: boolean;
    isLoading?: boolean;
}

const ERROR_TEXT = "Something went wrong.";
const SPINNER_ICON_SIZE = 55;

// Using same component for loading spinner and error messages. If no props passed component will be used as error.

export const PMLoadingOrError: FC<PMLoadingOrErrorProps> = ({ isError = true, isLoading }) =>{
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

    if(!isLoading && !isError){
        return null;
    }
    
    return(
        <View style={{ ...style.view, ...style.spinnerContainer }}>
            <Image source={require('../../assets/permiles-icon.png')} style={{ resizeMode: "contain", ...style.permilesImage }}/>
            {
                !isError && isLoading && (
                    <Animated.View style={{
                        transform: [{ rotate: spin }]
                    }}
                    >
                        <EvilIcons name="spinner-3" size={SPINNER_ICON_SIZE} color={style.spinnerIcon.color} />
                    </Animated.View>
                )
            }
            {
                isError &&(
                    <PMText>{ERROR_TEXT}</PMText>
                )
            }
        </View>
    )
}