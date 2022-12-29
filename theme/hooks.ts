import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";

import { PER_MILES_FONT } from "../assets/font";

SplashScreen.preventAutoHideAsync();

export const useLoadExpoFont = () =>{
    const [isFontLoaded] = useFonts(PER_MILES_FONT)
    const onLayoutRootView = useCallback(async () => {
        if (isFontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isFontLoaded]);


    return  { onLayoutRootView, isFontLoaded } 
}