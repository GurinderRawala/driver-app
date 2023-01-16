import React,{ FC, ReactNode } from "react";

import * as webBrowser from 'expo-web-browser';
import { Alert, TouchableOpacity } from "react-native";

export interface OpenURLProps{
    url: string;
    children: ReactNode | string;
}

export const OpenURL: FC<OpenURLProps> = ({
    url,
    children
}) =>{
    const openPage = async() =>{
        try{
            await webBrowser.openBrowserAsync(url);
        }catch(error){
            Alert.alert(error.message);
        }
    }
   
    return(
        <TouchableOpacity 
            onPress={openPage}
        >
            { children }
        </TouchableOpacity>
    );
}