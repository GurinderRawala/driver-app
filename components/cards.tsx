import { Card, CardProps, makeStyles } from "@rneui/themed";
import { merge } from "lodash";
import React,{ FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { PMStoreState } from "store";

export interface PMCardProps extends CardProps{
    children: ReactNode;
    width?: number;
}
const MAIN_CONTAINER_PADDING = 28;
export const PMCard: FC<PMCardProps> = (props) =>{
    const { children, width } = props;
    const layout = useSelector(({layoutReducer}: PMStoreState) => layoutReducer);
    const updateWidth = width ? width : layout.width;
    const style = usePMCardStyles(updateWidth - MAIN_CONTAINER_PADDING);
    return(
        <Card 
            {
                ...merge({}, style, props)
            }
        >{children}</Card>
    );
}

export const usePMCardStyles = makeStyles(
    (theme, defaultWidth: number) => ({
        containerStyle: {
            backgroundColor: theme.colors.grey5,
            color: theme.colors.black,
            borderRadius: 10,
            width: defaultWidth
        },
    })
)