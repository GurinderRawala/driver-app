import { Button, ButtonProps } from "@rneui/themed";
import { merge } from "lodash";
import React, { FC } from "react";

export type PMButtonProps = Omit<ButtonProps, "radius">;

export const PMButton: FC<PMButtonProps> = (props) => (
    <Button { ...{ ...merge({}, props, buttonCommonProps) }}/>
)

export const buttonCommonProps: Pick<ButtonProps, "radius" | "style"> = {
    radius: 8,
    style: {
        minWidth: 150,
    }
}