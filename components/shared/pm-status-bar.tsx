import { ThemeMode, useThemeMode } from "@rneui/themed";
import React, { FC } from "react";
import { StatusBar, StatusBarProps } from "react-native";

import { useStyles } from "./styles";

const STATUS_BAR_STYLE: Record<ThemeMode, StatusBarProps["barStyle"]> = {
    light: "dark-content",
    dark: "light-content"
};

export const PMStatusBar: FC = () =>{
    const { mode } = useThemeMode();
    const style = useStyles();
    return  <StatusBar barStyle={STATUS_BAR_STYLE[mode]} backgroundColor={style.statusbar.backgroundColor} />
}


