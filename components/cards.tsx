import { Card, CardProps, makeStyles } from "@rneui/themed";
import { merge } from "lodash";
import React,{ FC, ReactNode } from "react";

export interface PMCardProps extends CardProps{
    children: ReactNode;
}
export const PMCard: FC<PMCardProps> = (props) =>{
    const { children } = props;
    const style = usePMCardStyles();
    return(
        <Card 
            {
                ...merge({}, style, props)
            }
        >{children}</Card>
    );
}

export const usePMCardStyles = makeStyles(
    (theme) => ({
        containerStyle: {
            backgroundColor: theme.colors.grey5,
            color: theme.colors.black,
            borderRadius: 10
        },
    })
)