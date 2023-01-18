import { Button, ButtonProps } from "@rneui/themed";
import { merge } from "lodash";
import React, { FC } from "react";

export const PMButton: FC<Omit<ButtonProps, "radius">> = (props) => (
    <Button { ...{ ...merge({}, props, buttonCommonProps) }}/>
)

export const buttonCommonProps: Pick<ButtonProps, "radius" | "style"> = {
    radius: 8,
    style: {
        minWidth: 150,
    }
}