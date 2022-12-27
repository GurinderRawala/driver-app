import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TFont from "../assets/font/TitilliumWeb-Black.ttf";

SplashScreen.preventAutoHideAsync();

export const useLoadExpoFont = () =>{
    const [isFontLoaded] = useFonts({'Titillium': TFont})
    const onLayoutRootView = useCallback(async () => {
        if (isFontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isFontLoaded]);


    return  { onLayoutRootView, isFontLoaded } 
}