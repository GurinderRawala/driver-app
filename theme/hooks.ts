import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as font from "expo-font";

import { PER_MILES_FONT } from "assets/font";

SplashScreen.preventAutoHideAsync();

export const useLoadExpoFont = () =>{
    const [isFontLoaded, setFontLoaded] = useState<boolean>(false);

    useEffect(() => {
        const loadFont = async () => {
            try{
                await font.loadAsync(PER_MILES_FONT)
                setFontLoaded(true)
            }catch(err){
                console.error({err}, "Failed to load");
                setFontLoaded(false)
            }
        }

        loadFont();
    }, [setFontLoaded])

    const onLayoutRootView = useCallback(async () => {
        if (isFontLoaded) {
            return await SplashScreen.hideAsync();
        }
    }, [isFontLoaded]);


    return  { onLayoutRootView, isFontLoaded } 
}