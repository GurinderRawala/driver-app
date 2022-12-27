import { CreateThemeOptions, ThemeProvider, createTheme } from '@rneui/themed';
import React,{ FC, ReactNode } from 'react';

const lightColors: CreateThemeOptions["lightColors"] = {
    primary: "#041c34",
    secondary: "#b1355c",
    background: "#FFFFFF",
}

const darkColors: CreateThemeOptions["darkColors"] = {
    ...lightColors,
    background: "#333"
};


const theme = createTheme({
    lightColors,
    darkColors,
    mode: "dark",
});

export interface PMThemeProviderProps{
    children: ReactNode
}

export const PMThemeProvider: FC<PMThemeProviderProps> = ({children}) =>{

    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}