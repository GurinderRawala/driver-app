import React,{ FC } from "react";

import { Text, TextProps } from "@rneui/themed";
import { useStyles } from "./styles";
import { merge } from "lodash";

export const PMText: FC<TextProps> = (props) =>{
    const style = useStyles();
    return(
        <Text { ...props } style={merge({}, props.style, style.text)}/>
    )
}